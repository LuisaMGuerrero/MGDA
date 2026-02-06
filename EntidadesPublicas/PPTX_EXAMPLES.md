# Ejemplos Prácticos de Generación de Presentaciones PPTX

## Casos de Uso del Proyecto

Este documento contiene ejemplos específicos de cómo se implementan las presentaciones PowerPoint en el proyecto de Diagnóstico de Archivos.

---

## 1. Estructura del Endpoint en Express.js

### Backend: Endpoint Individual

**Archivo:** `backend/src/controllers/survey.controller.js`

```javascript
export const generateIndividualPresentation = async (req, res, next) => {
  try {
    // 1. Obtener datos de la base de datos
    const survey = await Survey.findById(req.params.id);
    
    if (!survey) {
      return res.status(404).json({
        success: false,
        message: 'Encuesta no encontrada'
      });
    }

    // 2. Importar PptxGenJS dinámicamente
    const pptxgenModule = await import('pptxgenjs');
    const PptxGenJS = pptxgenModule.default;
    const pptx = new PptxGenJS();

    // 3. Extraer datos del formulario
    const data = survey.surveyData;

    // 4. Crear slides (ver ejemplos abajo)
    // ... código de creación de slides ...

    // 5. Generar el buffer
    const buffer = await pptx.write({ outputType: 'nodebuffer' });
    
    // 6. Crear nombre de archivo dinámico
    const fileName = `Diagnostico_${(data.nombre_entidad || 'Entidad').replace(/\s+/g, '_')}_${Date.now()}.pptx`;

    // 7. Configurar headers HTTP
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    
    // 8. Enviar archivo
    res.send(buffer);

  } catch (error) {
    console.error('Error generating individual presentation:', error);
    next(error);
  }
};
```

### Ruta del Endpoint

**Archivo:** `backend/src/routes/survey.routes.js`

```javascript
import { generateIndividualPresentation } from '../controllers/survey.controller.js';

// Ruta para presentación individual
router.get('/:id/presentation', generateIndividualPresentation);

// Uso: GET /api/surveys/69446d33aa95c23461c562c8/presentation
```

---

## 2. Frontend: Llamada al Endpoint

### API Service

**Archivo:** `frontend/src/services/api.js`

```javascript
export const surveyAPI = {
  // Generar presentación individual
  generateIndividualPresentation: async (id) => {
    const response = await api.get(`/surveys/${id}/presentation`, {
      responseType: 'blob'  // ¡IMPORTANTE! Para archivos binarios
    });
    return response.data;
  }
};
```

### Componente React

**Archivo:** `frontend/src/pages/ResultsPage.jsx`

```javascript
const handleGenerateIndividualPresentation = async (survey) => {
  try {
    // 1. Llamar al API
    const blob = await surveyAPI.generateIndividualPresentation(survey._id);
    
    // 2. Crear URL temporal del blob
    const url = window.URL.createObjectURL(blob);
    
    // 3. Crear elemento <a> para descarga
    const link = document.createElement('a');
    link.href = url;
    
    // 4. Nombre dinámico del archivo
    const entityName = survey.surveyData.nombre_entidad || 'Entidad';
    link.download = `Diagnostico_${entityName.replace(/\s+/g, '_')}_${Date.now()}.pptx`;
    
    // 5. Simular click para descargar
    document.body.appendChild(link);
    link.click();
    
    // 6. Limpiar
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
  } catch (err) {
    console.error('Error generating individual presentation:', err);
    alert('Error al generar la presentación individual.');
  }
};
```

---

## 3. Procesamiento de Datos del Formulario

### Función para Calcular Cumplimiento

```javascript
// Función auxiliar para calcular estadísticas por sección
const calcularPuntuacion = (data, prefix) => {
  let cumple = 0, parcial = 0, noCumple = 0, total = 0;
  
  // Iterar sobre todas las claves del objeto de datos
  Object.keys(data).forEach(key => {
    // Filtrar solo las preguntas (excluir detalles y observaciones)
    if (key.startsWith(prefix) && 
        !key.includes('_detail') && 
        !key.includes('_obs') && 
        !key.includes('_info')) {
      total++;
      
      // Contar por tipo de respuesta
      if (data[key] === 'Cumple') cumple++;
      else if (data[key] === 'Parcial') parcial++;
      else if (data[key] === 'No cumple') noCumple++;
    }
  });
  
  // Calcular porcentaje (Cumple = 100%, Parcial = 50%)
  const porcentaje = total > 0 
    ? ((cumple + parcial * 0.5) / total * 100).toFixed(1) 
    : 0;
  
  return { cumple, parcial, noCumple, total, porcentaje };
};

// Uso en el código
const aspectosAdmin = calcularPuntuacion(data, '1_');  // Preguntas que empiezan con 1_
const aspectosFuncion = calcularPuntuacion(data, '5_'); // Preguntas que empiezan con 5_
const aspectosPreserv = calcularPuntuacion(data, '8_'); // Preguntas que empiezan con 8_
```

### Estructura de Datos del Formulario

```javascript
// Ejemplo de datos recibidos del formulario
const surveyData = {
  // Identificación
  nombre_entidad: "Archivo General de la Nación",
  nivel: "nacional",
  sector: "Cultura",
  organismo: "Ministerio de Cultura",
  
  // Preguntas de cumplimiento
  "1_1_1": "Cumple",
  "1_1_1_detail": "Acuerdo 005 de 2020",
  "1_1_1_obs": "Observaciones adicionales",
  "1_1_2": "Parcial",
  "1_1_3": "No cumple",
  
  // ... más campos
};

// Filtrado de campos
const preguntasSeccion1 = Object.keys(surveyData)
  .filter(key => key.startsWith('1_') && !key.includes('_detail') && !key.includes('_obs'));
// Resultado: ["1_1_1", "1_1_2", "1_1_3", ...]
```

---

## 4. Ejemplos de Slides Específicos del Proyecto

### Slide 1: Portada Personalizada

```javascript
const slide1 = pptx.addSlide();
slide1.background = { color: '1976D2' };

slide1.addText('Diagnóstico Integral de Archivos', {
  x: 0.5,
  y: 1.5,
  w: 9,
  h: 0.8,
  fontSize: 40,
  bold: true,
  color: 'FFFFFF',
  align: 'center'
});

slide1.addText(data.nombre_entidad || 'Entidad', {
  x: 0.5,
  y: 2.5,
  w: 9,
  h: 1,
  fontSize: 32,
  bold: true,
  color: 'E3F2FD',
  align: 'center'
});

slide1.addText(`Fecha: ${new Date(survey.createdAt).toLocaleDateString('es-ES')}`, {
  x: 0.5,
  y: 4.5,
  w: 9,
  h: 0.4,
  fontSize: 18,
  color: 'FFFFFF',
  align: 'center'
});
```

### Slide 2: Información de la Entidad

```javascript
const slide2 = pptx.addSlide();
slide2.addText('Información de la Entidad', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

const infoData = [
  ['Campo', 'Valor'],
  ['Nombre', data.nombre_entidad || '-'],
  ['Nivel', data.nivel || '-'],
  ['Sector', data.sector || '-'],
  ['Carácter', data.caracter || '-'],
  ['Municipio', data.municipio || '-'],
  ['Departamento', data.departamento || '-'],
  ['Dependencias', (data.numero_dependencias || '-').toString()],
  ['Representante Legal', data.rep_nombre || '-'],
  ['Cargo', data.rep_cargo || '-']
];

slide2.addTable(infoData, {
  x: 0.8,
  y: 1.0,
  w: 8.4,
  fontSize: 14,
  border: { pt: 1, color: '1976D2' },
  fill: { color: 'F5F5F5' },
  color: '333333',
  rowH: 0.35,
  valign: 'middle'
});
```

### Slide 3: Resumen Ejecutivo con Tabla

```javascript
const slide3 = pptx.addSlide();
slide3.addText('Resumen Ejecutivo', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

const resumenData = [
  ['Aspecto', 'Cumple', 'Parcial', 'No Cumple', 'Total', '%'],
  [
    'Administrativos', 
    aspectosAdmin.cumple.toString(), 
    aspectosAdmin.parcial.toString(), 
    aspectosAdmin.noCumple.toString(), 
    aspectosAdmin.total.toString(), 
    aspectosAdmin.porcentaje + '%'
  ],
  [
    'Función Archivística', 
    aspectosFuncion.cumple.toString(), 
    aspectosFuncion.parcial.toString(), 
    aspectosFuncion.noCumple.toString(), 
    aspectosFuncion.total.toString(), 
    aspectosFuncion.porcentaje + '%'
  ],
  [
    'Preservación', 
    aspectosPreserv.cumple.toString(), 
    aspectosPreserv.parcial.toString(), 
    aspectosPreserv.noCumple.toString(), 
    aspectosPreserv.total.toString(), 
    aspectosPreserv.porcentaje + '%'
  ]
];

slide3.addTable(resumenData, {
  x: 0.8,
  y: 1.2,
  w: 8.4,
  fontSize: 14,
  border: { pt: 1, color: '1976D2' },
  fill: { color: 'F5F5F5' },
  color: '333333',
  rowH: 0.5,
  valign: 'middle',
  align: 'center'
});
```

### Slide 4: Gráfico de Barras Comparativo

```javascript
const slide4 = pptx.addSlide();
slide4.addText('Análisis de Cumplimiento por Sección', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

const chartData = [
  {
    name: 'Cumplimiento',
    labels: ['Administrativos', 'Función Archivística', 'Preservación'],
    values: [
      parseFloat(aspectosAdmin.porcentaje), 
      parseFloat(aspectosFuncion.porcentaje), 
      parseFloat(aspectosPreserv.porcentaje)
    ]
  }
];

slide4.addChart(pptx.ChartType.bar, chartData, {
  x: 1.5,
  y: 1.2,
  w: 7,
  h: 4,
  chartColors: ['4CAF50'],
  showTitle: false,
  showLegend: false,
  showValue: true,
  valAxisMaxVal: 100,
  valAxisTitle: 'Porcentaje de Cumplimiento (%)',
  catAxisTitle: 'Secciones'
});
```

### Slide 5: Gráfico de Pie (Distribución)

```javascript
const slide5 = pptx.addSlide();
slide5.addText('Distribución General de Respuestas', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

const totalCumple = aspectosAdmin.cumple + aspectosFuncion.cumple + aspectosPreserv.cumple;
const totalParcial = aspectosAdmin.parcial + aspectosFuncion.parcial + aspectosPreserv.parcial;
const totalNoCumple = aspectosAdmin.noCumple + aspectosFuncion.noCumple + aspectosPreserv.noCumple;

const pieChartData = [
  {
    name: 'Respuestas',
    labels: ['Cumple', 'Parcial', 'No Cumple'],
    values: [totalCumple, totalParcial, totalNoCumple]
  }
];

slide5.addChart(pptx.ChartType.pie, pieChartData, {
  x: 2,
  y: 1.2,
  w: 6,
  h: 4,
  chartColors: ['4CAF50', 'FF9800', 'F44336'],
  showTitle: false,
  showLegend: true,
  showValue: true,
  showPercent: true
});
```

### Slide 6: Gráfico de Barras Horizontal por Sección

```javascript
const slide6 = pptx.addSlide();
slide6.addText('I. Aspectos Administrativos', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

slide6.addText(`Cumplimiento: ${aspectosAdmin.porcentaje}%`, {
  x: 0.5,
  y: 0.9,
  w: 9,
  h: 0.3,
  fontSize: 18,
  color: '666666'
});

const adminChartData = [
  {
    name: 'Administrativos',
    labels: ['Cumple', 'Parcial', 'No Cumple'],
    values: [aspectosAdmin.cumple, aspectosAdmin.parcial, aspectosAdmin.noCumple]
  }
];

slide6.addChart(pptx.ChartType.bar, adminChartData, {
  x: 1.5,
  y: 1.5,
  w: 7,
  h: 3.5,
  chartColors: ['4CAF50', 'FF9800', 'F44336'],
  showTitle: false,
  showLegend: true,
  showValue: true,
  barDir: 'bar'  // Barras horizontales
});
```

### Slide 9: Recomendaciones Dinámicas

```javascript
const slide9 = pptx.addSlide();
slide9.addText('Recomendaciones', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

let yPos = 1.2;
const recomendaciones = [];

// Generar recomendaciones basadas en los datos
if (parseFloat(aspectosAdmin.porcentaje) < 70) {
  recomendaciones.push('• Fortalecer los aspectos administrativos y de gestión documental');
}
if (parseFloat(aspectosFuncion.porcentaje) < 70) {
  recomendaciones.push('• Mejorar la implementación de instrumentos archivísticos');
}
if (parseFloat(aspectosPreserv.porcentaje) < 70) {
  recomendaciones.push('• Optimizar las condiciones de preservación y almacenamiento');
}
if (totalNoCumple > totalCumple) {
  recomendaciones.push('• Priorizar la capacitación del personal en gestión documental');
}

// Si todo está bien, dar recomendaciones positivas
if (recomendaciones.length === 0) {
  recomendaciones.push('• Mantener el nivel de cumplimiento alcanzado');
  recomendaciones.push('• Continuar con las buenas prácticas implementadas');
}

// Agregar cada recomendación al slide
recomendaciones.forEach(rec => {
  slide9.addText(rec, {
    x: 0.8,
    y: yPos,
    w: 8.4,
    h: 0.4,
    fontSize: 16,
    color: '333333'
  });
  yPos += 0.5;
});
```

### Slide 10: Notas Finales (Condicional)

```javascript
// Solo agregar este slide si hay notas finales
if (data.notas_finales) {
  const slide10 = pptx.addSlide();
  slide10.addText('Notas Finales', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: '1976D2'
  });

  slide10.addText(data.notas_finales, {
    x: 0.8,
    y: 1.2,
    w: 8.4,
    h: 3,
    fontSize: 16,
    color: '333333',
    valign: 'top'
  });
}
```

---

## 5. Paleta de Colores del Proyecto

```javascript
// Colores principales
const COLORS = {
  primary: '1976D2',      // Azul principal
  primaryLight: 'E3F2FD', // Azul claro
  success: '4CAF50',      // Verde (Cumple)
  warning: 'FF9800',      // Naranja (Parcial)
  error: 'F44336',        // Rojo (No Cumple)
  text: '333333',         // Texto oscuro
  textLight: '666666',    // Texto gris
  background: 'F5F5F5',   // Fondo gris claro
  white: 'FFFFFF'
};

// Uso en slides
slide.background = { color: COLORS.primary };
slide.addText('Texto', { color: COLORS.text });
```

---

## 6. Flujo Completo de Datos

```
┌─────────────────┐
│   MongoDB       │
│   (Survey)      │
└────────┬────────┘
         │
         │ findById(id)
         ▼
┌─────────────────┐
│   Controller    │
│   (Backend)     │
└────────┬────────┘
         │
         │ survey.surveyData
         ▼
┌─────────────────┐
│ Procesamiento   │
│ de Datos        │
│ - calcularPunt  │
│ - validaciones  │
└────────┬────────┘
         │
         │ datos procesados
         ▼
┌─────────────────┐
│   PptxGenJS     │
│   - addSlide()  │
│   - addChart()  │
│   - addTable()  │
└────────┬────────┘
         │
         │ write()
         ▼
┌─────────────────┐
│   Buffer        │
│   (.pptx)       │
└────────┬────────┘
         │
         │ HTTP Response
         ▼
┌─────────────────┐
│   Frontend      │
│   (Blob)        │
└────────┬────────┘
         │
         │ createObjectURL
         ▼
┌─────────────────┐
│   Descarga      │
│   (Usuario)     │
└─────────────────┘
```

---

## 7. Testing y Debugging

### Probar Endpoint con cURL

```bash
# Generar presentación individual
curl -X GET http://localhost:3000/api/surveys/69446d33aa95c23461c562c8/presentation \
  --output diagnostico.pptx

# Verificar que el archivo se descargó
ls -lh diagnostico.pptx

# Abrir con PowerPoint
open diagnostico.pptx  # macOS
```

### Logs de Debugging

```javascript
export const generateIndividualPresentation = async (req, res, next) => {
  try {
    console.log('📊 Generando presentación para ID:', req.params.id);
    
    const survey = await Survey.findById(req.params.id);
    console.log('✅ Survey encontrado:', survey.surveyData.nombre_entidad);
    
    const stats = calcularPuntuacion(survey.surveyData, '1_');
    console.log('📈 Estadísticas calculadas:', stats);
    
    const buffer = await pptx.write({ outputType: 'nodebuffer' });
    console.log('💾 Buffer generado, tamaño:', buffer.length, 'bytes');
    
    res.send(buffer);
    console.log('✅ Presentación enviada exitosamente');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    next(error);
  }
};
```

---

## 8. Optimizaciones y Performance

### Caché de Presentaciones (Opcional)

```javascript
const cache = new Map();

export const generateIndividualPresentation = async (req, res, next) => {
  const cacheKey = `pptx_${req.params.id}`;
  
  // Verificar caché
  if (cache.has(cacheKey)) {
    console.log('📦 Usando presentación en caché');
    return res.send(cache.get(cacheKey));
  }
  
  // Generar presentación
  const buffer = await pptx.write({ outputType: 'nodebuffer' });
  
  // Guardar en caché (expirar después de 1 hora)
  cache.set(cacheKey, buffer);
  setTimeout(() => cache.delete(cacheKey), 3600000);
  
  res.send(buffer);
};
```

### Generación Asíncrona (Para Archivos Grandes)

```javascript
// Para presentaciones muy grandes, usar workers o queues
import { Worker } from 'worker_threads';

export const generateLargePresentation = async (req, res, next) => {
  const worker = new Worker('./workers/pptx-generator.js');
  
  worker.postMessage({ surveyId: req.params.id });
  
  worker.on('message', (buffer) => {
    res.send(buffer);
    worker.terminate();
  });
  
  worker.on('error', (error) => {
    console.error('Worker error:', error);
    next(error);
  });
};
```

---

## Conclusión

Con estos ejemplos prácticos, puedes:

1. ✅ Entender el flujo completo de generación de presentaciones
2. ✅ Modificar y personalizar slides según necesidades
3. ✅ Procesar datos del formulario correctamente
4. ✅ Implementar nuevas funcionalidades
5. ✅ Debuggear y optimizar el código

**Archivos de Referencia:**
- `backend/src/controllers/survey.controller.js`
- `backend/src/routes/survey.routes.js`
- `frontend/src/services/api.js`
- `frontend/src/pages/ResultsPage.jsx`
- `PPTX_DOCUMENTATION.md`
