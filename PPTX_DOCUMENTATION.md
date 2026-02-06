# Documentación Completa: PptxGenJS para Generación de Presentaciones PowerPoint

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [Conceptos Básicos](#conceptos-básicos)
4. [Estructura de Datos](#estructura-de-datos)
5. [Creación de Slides](#creación-de-slides)
6. [Elementos de Presentación](#elementos-de-presentación)
7. [Gráficos y Visualizaciones](#gráficos-y-visualizaciones)
8. [Tablas](#tablas)
9. [Estilos y Formato](#estilos-y-formato)
10. [Ejemplos Prácticos](#ejemplos-prácticos)
11. [Mejores Prácticas](#mejores-prácticas)
12. [Troubleshooting](#troubleshooting)

---

## Introducción

**PptxGenJS** es una librería JavaScript que permite crear presentaciones PowerPoint (.pptx) de forma programática. Es compatible con Node.js y navegadores, y genera archivos completamente compatibles con Microsoft PowerPoint, Google Slides y LibreOffice.

### Características Principales
- ✅ Creación de slides con texto, imágenes, tablas y gráficos
- ✅ Soporte completo para gráficos (barras, líneas, pie, etc.)
- ✅ Personalización de estilos y colores
- ✅ Exportación a archivo binario o base64
- ✅ Compatible con ES6 modules y CommonJS

---

## Instalación y Configuración

### Instalación

```bash
npm install pptxgenjs
```

### Importación en Node.js (ES6 Modules)

```javascript
// Importación dinámica (recomendado para evitar problemas de compatibilidad)
const pptxgenModule = await import('pptxgenjs');
const PptxGenJS = pptxgenModule.default;

// O importación estática
import PptxGenJS from 'pptxgenjs';
```

### Inicialización

```javascript
const pptx = new PptxGenJS();

// Configuración opcional
pptx.author = 'Tu Nombre';
pptx.company = 'Tu Empresa';
pptx.revision = '1';
pptx.subject = 'Diagnóstico de Archivos';
pptx.title = 'Presentación Generada';
```

---

## Conceptos Básicos

### Sistema de Coordenadas

PptxGenJS usa un sistema de coordenadas basado en **pulgadas**:
- **x**: Posición horizontal desde la izquierda (0 = borde izquierdo)
- **y**: Posición vertical desde arriba (0 = borde superior)
- **w**: Ancho del elemento
- **h**: Alto del elemento

**Dimensiones estándar de slide:**
- Ancho: 10 pulgadas
- Alto: 5.625 pulgadas (formato 16:9)

```javascript
// Ejemplo de posicionamiento
slide.addText('Texto centrado', {
  x: 0.5,    // 0.5 pulgadas desde la izquierda
  y: 2.0,    // 2 pulgadas desde arriba
  w: 9.0,    // 9 pulgadas de ancho
  h: 1.0     // 1 pulgada de alto
});
```

---

## Estructura de Datos

### Flujo de Trabajo Básico

```javascript
// 1. Crear instancia de PptxGenJS
const pptx = new PptxGenJS();

// 2. Agregar slides
const slide1 = pptx.addSlide();
const slide2 = pptx.addSlide();

// 3. Agregar contenido a los slides
slide1.addText('Título', { x: 1, y: 1, fontSize: 32 });
slide2.addChart(pptx.ChartType.bar, chartData, { x: 1, y: 1, w: 8, h: 4 });

// 4. Generar el archivo
const buffer = await pptx.write({ outputType: 'nodebuffer' });

// 5. Enviar al cliente (en Express.js)
res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
res.setHeader('Content-Disposition', 'attachment; filename=presentacion.pptx');
res.send(buffer);
```

### Tipos de Output

```javascript
// Buffer de Node.js (para backend)
const buffer = await pptx.write({ outputType: 'nodebuffer' });

// Base64 (para enviar por API)
const base64 = await pptx.write({ outputType: 'base64' });

// Blob (para navegador)
const blob = await pptx.write({ outputType: 'blob' });

// Archivo local (solo Node.js)
await pptx.writeFile({ fileName: 'presentacion.pptx' });
```

---

## Creación de Slides

### Agregar Slide Básico

```javascript
const slide = pptx.addSlide();
```

### Slide con Nombre

```javascript
const slide = pptx.addSlide({ sectionTitle: 'Sección 1' });
```

### Background del Slide

```javascript
// Color sólido
slide.background = { color: '1976D2' };

// Imagen de fondo
slide.background = { path: 'ruta/imagen.jpg' };

// Gradiente
slide.background = {
  fill: {
    type: 'solid',
    color: 'F1F1F1'
  }
};
```

---

## Elementos de Presentación

### 1. Texto

```javascript
slide.addText('Texto simple', {
  x: 1,
  y: 1,
  w: 8,
  h: 1,
  fontSize: 18,
  color: '333333',
  bold: true,
  italic: false,
  underline: false,
  align: 'center',      // 'left', 'center', 'right', 'justify'
  valign: 'middle',     // 'top', 'middle', 'bottom'
  fontFace: 'Arial'
});
```

### Opciones Avanzadas de Texto

```javascript
slide.addText('Texto con opciones avanzadas', {
  x: 1,
  y: 2,
  w: 8,
  h: 1,
  fontSize: 24,
  color: 'FF0000',
  bold: true,
  italic: true,
  underline: { style: 'sng' },  // 'sng', 'dbl', 'heavy'
  strike: false,
  subscript: false,
  superscript: false,
  charSpacing: 0,
  lineSpacing: 1.5,
  margin: [0.1, 0.1, 0.1, 0.1],  // [top, right, bottom, left]
  fill: { color: 'F1F1F1' },      // Color de fondo
  outline: { 
    color: '000000',
    size: 1
  },
  shadow: {
    type: 'outer',
    color: '000000',
    blur: 3,
    offset: 2,
    angle: 45,
    opacity: 0.5
  }
});
```

### 2. Imágenes

```javascript
// Desde archivo local
slide.addImage({
  path: 'ruta/imagen.jpg',
  x: 1,
  y: 1,
  w: 3,
  h: 2
});

// Desde URL
slide.addImage({
  data: 'https://ejemplo.com/imagen.jpg',
  x: 1,
  y: 1,
  w: 3,
  h: 2
});

// Desde base64
slide.addImage({
  data: 'data:image/png;base64,iVBORw0KGgoAAAANS...',
  x: 1,
  y: 1,
  w: 3,
  h: 2
});
```

### 3. Formas

```javascript
// Rectángulo
slide.addShape(pptx.ShapeType.rect, {
  x: 1,
  y: 1,
  w: 3,
  h: 2,
  fill: { color: '0088CC' },
  line: { color: '000000', width: 1 }
});

// Círculo
slide.addShape(pptx.ShapeType.ellipse, {
  x: 5,
  y: 1,
  w: 2,
  h: 2,
  fill: { color: 'FF0000' }
});
```

---

## Gráficos y Visualizaciones

### Tipos de Gráficos Disponibles

```javascript
pptx.ChartType.area
pptx.ChartType.bar
pptx.ChartType.bar3D
pptx.ChartType.bubble
pptx.ChartType.doughnut
pptx.ChartType.line
pptx.ChartType.pie
pptx.ChartType.radar
pptx.ChartType.scatter
```

### 1. Gráfico de Barras

```javascript
const chartData = [
  {
    name: 'Serie 1',
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    values: [10, 20, 30, 40]
  },
  {
    name: 'Serie 2',
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    values: [15, 25, 35, 45]
  }
];

slide.addChart(pptx.ChartType.bar, chartData, {
  x: 1,
  y: 1,
  w: 8,
  h: 4,
  chartColors: ['4CAF50', '2196F3'],
  showTitle: true,
  title: 'Ventas Mensuales',
  showLegend: true,
  legendPos: 'r',           // 't', 'b', 'l', 'r', 'tr'
  showValue: true,
  valAxisMaxVal: 50,
  valAxisMinVal: 0,
  valAxisTitle: 'Cantidad',
  catAxisTitle: 'Meses',
  barDir: 'col',            // 'bar' (horizontal), 'col' (vertical)
  barGrouping: 'clustered'  // 'clustered', 'stacked', 'percentStacked'
});
```

### 2. Gráfico de Líneas

```javascript
const lineData = [
  {
    name: 'Tendencia',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    values: [100, 150, 120, 180]
  }
];

slide.addChart(pptx.ChartType.line, lineData, {
  x: 1,
  y: 1,
  w: 8,
  h: 4,
  chartColors: ['FF6384'],
  showTitle: false,
  showLegend: true,
  showValue: true,
  lineDataSymbol: 'circle',  // 'circle', 'dash', 'diamond', 'dot', 'none', 'square', 'triangle'
  lineSize: 2,
  lineSmooth: true
});
```

### 3. Gráfico de Pie (Pastel)

```javascript
const pieData = [
  {
    name: 'Distribución',
    labels: ['Cumple', 'Parcial', 'No Cumple'],
    values: [60, 25, 15]
  }
];

slide.addChart(pptx.ChartType.pie, pieData, {
  x: 2,
  y: 1,
  w: 6,
  h: 4,
  chartColors: ['4CAF50', 'FF9800', 'F44336'],
  showTitle: true,
  title: 'Distribución de Cumplimiento',
  showLegend: true,
  showPercent: true,
  showValue: true,
  holeSize: 0  // 0 = pie normal, >0 = doughnut (ej: 50)
});
```

### 4. Gráfico con Múltiples Series

```javascript
const multiSeriesData = [
  {
    name: 'Administrativos',
    labels: ['Cumple', 'Parcial', 'No Cumple'],
    values: [45, 30, 25]
  },
  {
    name: 'Función Archivística',
    labels: ['Cumple', 'Parcial', 'No Cumple'],
    values: [50, 20, 30]
  },
  {
    name: 'Preservación',
    labels: ['Cumple', 'Parcial', 'No Cumple'],
    values: [40, 35, 25]
  }
];

slide.addChart(pptx.ChartType.bar, multiSeriesData, {
  x: 1,
  y: 1,
  w: 8,
  h: 4,
  chartColors: ['4CAF50', 'FF9800', 'F44336'],
  barGrouping: 'clustered',
  showLegend: true,
  showValue: true
});
```

---

## Tablas

### Tabla Básica

```javascript
const rows = [
  ['Nombre', 'Edad', 'Ciudad'],
  ['Juan', '30', 'Bogotá'],
  ['María', '25', 'Medellín'],
  ['Pedro', '35', 'Cali']
];

slide.addTable(rows, {
  x: 1,
  y: 1,
  w: 8,
  h: 3,
  fontSize: 14,
  color: '333333',
  fill: { color: 'F1F1F1' },
  border: { pt: 1, color: '000000' },
  align: 'center',
  valign: 'middle',
  rowH: 0.5
});
```

### Tabla con Formato Avanzado

```javascript
const tableData = [
  [
    { text: 'Header 1', options: { bold: true, fill: '1976D2', color: 'FFFFFF' } },
    { text: 'Header 2', options: { bold: true, fill: '1976D2', color: 'FFFFFF' } }
  ],
  [
    { text: 'Dato 1', options: { fill: 'E3F2FD' } },
    { text: 'Dato 2', options: { fill: 'E3F2FD' } }
  ],
  [
    { text: 'Dato 3', options: { fill: 'FFFFFF' } },
    { text: 'Dato 4', options: { fill: 'FFFFFF' } }
  ]
];

slide.addTable(tableData, {
  x: 1,
  y: 1,
  w: 8,
  colW: [4, 4],  // Ancho de cada columna
  rowH: [0.5, 0.4, 0.4],  // Alto de cada fila
  border: { pt: 1, color: '1976D2' }
});
```

### Tabla con Celdas Combinadas

```javascript
const mergedTable = [
  [
    { text: 'Título Principal', options: { colspan: 3, bold: true, fontSize: 18, fill: '1976D2', color: 'FFFFFF' } }
  ],
  ['Columna 1', 'Columna 2', 'Columna 3'],
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3']
];

slide.addTable(mergedTable, {
  x: 1,
  y: 1,
  w: 8
});
```

---

## Estilos y Formato

### Colores

Los colores se especifican en formato hexadecimal **sin el símbolo #**:

```javascript
// Correcto
color: 'FF0000'  // Rojo
color: '1976D2'  // Azul
color: '4CAF50'  // Verde

// Incorrecto
color: '#FF0000'  // ❌ No usar #
```

### Fuentes Disponibles

```javascript
fontFace: 'Arial'
fontFace: 'Calibri'
fontFace: 'Times New Roman'
fontFace: 'Courier New'
fontFace: 'Verdana'
fontFace: 'Georgia'
```

### Alineación

```javascript
// Horizontal
align: 'left'
align: 'center'
align: 'right'
align: 'justify'

// Vertical
valign: 'top'
valign: 'middle'
valign: 'bottom'
```

---

## Ejemplos Prácticos

### Ejemplo 1: Slide de Portada

```javascript
const slide = pptx.addSlide();
slide.background = { color: '1976D2' };

slide.addText('Diagnóstico Integral de Archivos', {
  x: 0.5,
  y: 1.5,
  w: 9,
  h: 1,
  fontSize: 44,
  bold: true,
  color: 'FFFFFF',
  align: 'center'
});

slide.addText('Nombre de la Entidad', {
  x: 0.5,
  y: 2.8,
  w: 9,
  h: 0.8,
  fontSize: 32,
  color: 'E3F2FD',
  align: 'center'
});

slide.addText(`Fecha: ${new Date().toLocaleDateString('es-ES')}`, {
  x: 0.5,
  y: 4.5,
  w: 9,
  h: 0.4,
  fontSize: 18,
  color: 'FFFFFF',
  align: 'center'
});
```

### Ejemplo 2: Slide con Datos de Formulario

```javascript
// Función para calcular cumplimiento
function calcularCumplimiento(data, prefix) {
  let cumple = 0, parcial = 0, noCumple = 0, total = 0;
  
  Object.keys(data).forEach(key => {
    if (key.startsWith(prefix) && !key.includes('_detail') && !key.includes('_obs')) {
      total++;
      if (data[key] === 'Cumple') cumple++;
      else if (data[key] === 'Parcial') parcial++;
      else if (data[key] === 'No cumple') noCumple++;
    }
  });
  
  const porcentaje = total > 0 ? ((cumple + parcial * 0.5) / total * 100).toFixed(1) : 0;
  return { cumple, parcial, noCumple, total, porcentaje };
}

// Usar en slide
const slide = pptx.addSlide();
const stats = calcularCumplimiento(surveyData, '1_');

slide.addText(`Cumplimiento: ${stats.porcentaje}%`, {
  x: 1,
  y: 1,
  w: 8,
  h: 0.5,
  fontSize: 24,
  bold: true,
  color: '1976D2'
});

const chartData = [{
  name: 'Resultados',
  labels: ['Cumple', 'Parcial', 'No Cumple'],
  values: [stats.cumple, stats.parcial, stats.noCumple]
}];

slide.addChart(pptx.ChartType.pie, chartData, {
  x: 2,
  y: 2,
  w: 6,
  h: 3,
  chartColors: ['4CAF50', 'FF9800', 'F44336'],
  showPercent: true
});
```

### Ejemplo 3: Slide con Tabla de Información

```javascript
const slide = pptx.addSlide();

slide.addText('Información de la Entidad', {
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
  ['Municipio', data.municipio || '-'],
  ['Departamento', data.departamento || '-']
];

slide.addTable(infoData, {
  x: 1,
  y: 1,
  w: 8,
  fontSize: 14,
  border: { pt: 1, color: '1976D2' },
  fill: { color: 'F5F5F5' },
  color: '333333',
  rowH: 0.4,
  valign: 'middle'
});
```

### Ejemplo 4: Slide con Recomendaciones

```javascript
const slide = pptx.addSlide();

slide.addText('Recomendaciones', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.5,
  fontSize: 28,
  bold: true,
  color: '1976D2'
});

const recomendaciones = [
  '• Fortalecer los aspectos administrativos',
  '• Mejorar la implementación de instrumentos archivísticos',
  '• Optimizar las condiciones de preservación',
  '• Capacitar al personal en gestión documental'
];

let yPos = 1.2;
recomendaciones.forEach(rec => {
  slide.addText(rec, {
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

---

## Mejores Prácticas

### 1. Manejo de Datos

```javascript
// ✅ BUENO: Validar datos antes de usar
const nombreEntidad = data.nombre_entidad || 'Sin nombre';
const nivel = data.nivel || 'No especificado';

// ❌ MALO: Usar datos sin validar
const nombreEntidad = data.nombre_entidad;  // Puede ser undefined
```

### 2. Reutilización de Estilos

```javascript
// ✅ BUENO: Definir estilos como constantes
const TITLE_STYLE = {
  fontSize: 28,
  bold: true,
  color: '1976D2'
};

const BODY_STYLE = {
  fontSize: 16,
  color: '333333'
};

slide.addText('Título', { x: 1, y: 1, w: 8, h: 0.5, ...TITLE_STYLE });
slide.addText('Contenido', { x: 1, y: 2, w: 8, h: 1, ...BODY_STYLE });
```

### 3. Funciones Auxiliares

```javascript
// Función para agregar slide de sección
function addSectionSlide(pptx, title, subtitle) {
  const slide = pptx.addSlide();
  slide.background = { color: '1976D2' };
  
  slide.addText(title, {
    x: 0.5,
    y: 2,
    w: 9,
    h: 1,
    fontSize: 36,
    bold: true,
    color: 'FFFFFF',
    align: 'center'
  });
  
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5,
      y: 3,
      w: 9,
      h: 0.5,
      fontSize: 20,
      color: 'E3F2FD',
      align: 'center'
    });
  }
  
  return slide;
}

// Uso
addSectionSlide(pptx, 'Aspectos Administrativos', 'Análisis Detallado');
```

### 4. Manejo de Errores

```javascript
try {
  const pptx = new PptxGenJS();
  
  // Agregar contenido
  const slide = pptx.addSlide();
  slide.addText('Contenido', { x: 1, y: 1, w: 8, h: 1 });
  
  // Generar archivo
  const buffer = await pptx.write({ outputType: 'nodebuffer' });
  
  // Enviar respuesta
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
  res.setHeader('Content-Disposition', 'attachment; filename=presentacion.pptx');
  res.send(buffer);
  
} catch (error) {
  console.error('Error generando presentación:', error);
  res.status(500).json({
    success: false,
    message: 'Error al generar la presentación'
  });
}
```

---

## Troubleshooting

### Problema 1: Error de Importación

**Error:**
```
SyntaxError: Cannot use import statement outside a module
```

**Solución:**
```javascript
// Usar importación dinámica
const pptxgenModule = await import('pptxgenjs');
const PptxGenJS = pptxgenModule.default;
```

### Problema 2: Colores No Se Muestran

**Error:** Los colores aparecen negros o no se aplican

**Solución:**
```javascript
// ❌ INCORRECTO
color: '#FF0000'

// ✅ CORRECTO
color: 'FF0000'  // Sin el símbolo #
```

### Problema 3: Gráficos No Se Generan

**Error:** Los gráficos no aparecen en la presentación

**Solución:**
```javascript
// Verificar que los datos tengan el formato correcto
const chartData = [
  {
    name: 'Serie 1',           // ✅ Nombre de la serie
    labels: ['A', 'B', 'C'],   // ✅ Etiquetas
    values: [10, 20, 30]       // ✅ Valores numéricos
  }
];

// ❌ INCORRECTO
const chartData = {
  labels: ['A', 'B', 'C'],
  values: [10, 20, 30]
};
```

### Problema 4: Archivo Corrupto

**Error:** PowerPoint no puede abrir el archivo

**Solución:**
```javascript
// Asegurarse de usar el tipo de output correcto
const buffer = await pptx.write({ outputType: 'nodebuffer' });

// Verificar headers HTTP
res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
res.setHeader('Content-Disposition', 'attachment; filename=archivo.pptx');
res.send(buffer);
```

---

## Recursos Adicionales

### Documentación Oficial
- GitHub: https://github.com/gitbrent/PptxGenJS
- Demos: https://gitbrent.github.io/PptxGenJS/

### Ejemplos de Código
Ver los archivos del proyecto:
- `backend/src/controllers/survey.controller.js` - Función `generateIndividualPresentation`
- `backend/src/controllers/survey.controller.js` - Función `generatePresentation`

### Tipos de Gráficos Soportados
```javascript
ChartType.area
ChartType.bar
ChartType.bar3D
ChartType.bubble
ChartType.doughnut
ChartType.line
ChartType.pie
ChartType.radar
ChartType.scatter
```

---

## Conclusión

PptxGenJS es una herramienta poderosa y flexible para generar presentaciones PowerPoint de forma programática. Con esta documentación, deberías poder:

1. ✅ Crear presentaciones básicas y avanzadas
2. ✅ Agregar texto, tablas, gráficos e imágenes
3. ✅ Personalizar estilos y colores
4. ✅ Manejar datos dinámicos del formulario
5. ✅ Resolver problemas comunes

**Recuerda:** Siempre valida los datos antes de usarlos y maneja los errores apropiadamente para garantizar una experiencia de usuario óptima.
