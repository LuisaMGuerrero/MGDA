/**
 * Generadores de slides dinámicos (basados en datos del formulario)
 * Incluye gráficos de barras horizontales y hallazgos textuales
 */

import { INSTITUTIONAL_STYLES as STYLES, getComplianceColor, chunkArray } from '../config/institutionalStyles.js';

/**
 * Agregar elementos decorativos diagonales blancos
 */
function addDecorativeElements(slide) {
  slide.addShape('triangle', {
    x: 8.5,
    y: 0,
    w: 1.5,
    h: 1.0,
    fill: { color: STYLES.colors.white, transparency: 90 },
    line: { type: 'none' },
    rotate: 45
  });
  
  slide.addShape('triangle', {
    x: 0,
    y: 5.0,
    w: 1.2,
    h: 0.8,
    fill: { color: STYLES.colors.white, transparency: 90 },
    line: { type: 'none' },
    rotate: 225
  });
}

/**
 * Crear gráfico de barras horizontales con semáforo
 */
function createHorizontalBarChart(slide, data, title, yStart) {
  const maxBarWidth = 6.0;
  const barHeight = 0.4;
  const spacing = 0.6;
  
  data.forEach((item, index) => {
    const yPos = yStart + (index * spacing);
    const percentage = item.value;
    const barWidth = (percentage / 100) * maxBarWidth;
    const color = getComplianceColor(percentage);
    
    // Etiqueta
    slide.addText(item.label, {
      x: 0.8,
      y: yPos,
      w: 2.0,
      h: barHeight,
      fontSize: 10,
      color: STYLES.colors.white,
      valign: 'middle'
    });
    
    // Barra de fondo (gris)
    slide.addShape('rect', {
      x: 3.0,
      y: yPos,
      w: maxBarWidth,
      h: barHeight,
      fill: { color: '2C3E50', transparency: 50 },
      line: { type: 'none' }
    });
    
    // Barra de progreso (color semáforo)
    if (barWidth > 0) {
      slide.addShape('rect', {
        x: 3.0,
        y: yPos,
        w: barWidth,
        h: barHeight,
        fill: { color: color },
        line: { type: 'none' }
      });
    }
    
    // Porcentaje
    slide.addText(`${percentage.toFixed(1)}%`, {
      x: 9.1,
      y: yPos,
      w: 0.8,
      h: barHeight,
      fontSize: 10,
      color: STYLES.colors.white,
      valign: 'middle',
      bold: true
    });
  });
}

/**
 * Slide: Resultado global del diagnóstico
 */
export function createResultadoGlobal(pptx, globalResult) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('INFORME DIAGNÓSTICO DOCUMENTAL', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    ...STYLES.fonts.titleMain,
    align: 'center'
  });
  
  // Subtítulo
  slide.addText('RESULTADOS GENERALES POR ÍTEM', {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: STYLES.colors.textLight,
    align: 'center'
  });
  
  // Gráfico de barras con los tres aspectos
  const chartData = [
    { label: 'ASPECTOS ADMINISTRATIVOS', value: globalResult.bySection.admin.porcentaje },
    { label: 'ASPECTOS FUNCIÓN ARCHIVÍSTICA', value: globalResult.bySection.func.porcentaje },
    { label: 'ASPECTOS DE PRESERVACIÓN', value: globalResult.bySection.pres.porcentaje }
  ];
  
  createHorizontalBarChart(slide, chartData, '', 2.0);
  
  // Resultado total en caja destacada
  const color = getComplianceColor(globalResult.porcentaje);
  
  slide.addShape('rect', {
    x: 3.0,
    y: 4.2,
    w: 4.0,
    h: 1.2,
    fill: { color: color },
    line: { type: 'none' }
  });
  
  slide.addText(`Total cumplimiento\n${globalResult.porcentaje.toFixed(1)}%`, {
    x: 3.0,
    y: 4.3,
    w: 4.0,
    h: 1.0,
    fontSize: 18,
    color: STYLES.colors.white,
    align: 'center',
    valign: 'middle',
    bold: true
  });
}

/**
 * Slide: Estado porcentual de cada aspecto (con gráfico de barras)
 */
export function createEstadoPorcentual(pptx, globalResult) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('INFORME DIAGNÓSTICO DOCUMENTAL\nESTADO PORCENTUAL DE CADA ASPECTO', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.8,
    fontSize: 20,
    bold: true,
    color: STYLES.colors.white,
    align: 'center'
  });
  
  // Gráfico de barras verticales (simulado con rectángulos)
  const data = [
    { label: 'Cumple', value: globalResult.cumple, color: STYLES.colors.optimal, x: 2.0 },
    { label: 'No cumple', value: globalResult.noCumple, color: STYLES.colors.critical, x: 4.0 },
    { label: 'Cumple Parcialmente', value: globalResult.parcial, color: STYLES.colors.acceptable, x: 6.0 }
  ];
  
  const maxHeight = 2.5;
  const maxValue = Math.max(globalResult.cumple, globalResult.noCumple, globalResult.parcial);
  
  data.forEach(item => {
    const barHeight = maxValue > 0 ? (item.value / maxValue) * maxHeight : 0;
    const yPos = 4.5 - barHeight;
    
    // Barra
    slide.addShape('rect', {
      x: item.x,
      y: yPos,
      w: 1.2,
      h: barHeight,
      fill: { color: item.color },
      line: { type: 'none' }
    });
    
    // Valor
    slide.addText(item.value.toString(), {
      x: item.x,
      y: yPos - 0.3,
      w: 1.2,
      h: 0.3,
      fontSize: 14,
      color: STYLES.colors.white,
      align: 'center',
      bold: true
    });
    
    // Etiqueta
    slide.addText(item.label, {
      x: item.x - 0.3,
      y: 4.6,
      w: 1.8,
      h: 0.4,
      fontSize: 10,
      color: STYLES.colors.white,
      align: 'center'
    });
  });
  
  // Línea base
  slide.addShape('line', {
    x: 1.5,
    y: 4.5,
    w: 6.5,
    h: 0,
    line: { color: STYLES.colors.white, width: 2 }
  });
}

/**
 * Slide: Informe por sección con hallazgos textuales
 */
export function createInformeSeccion(pptx, title, findings, percentage) {
  const color = getComplianceColor(percentage);
  
  // Si hay muchos hallazgos, dividir en múltiples slides
  const maxFindingsPerSlide = 8;
  const chunks = findings.length > 0 ? chunkArray(findings, maxFindingsPerSlide) : [['No se registraron observaciones para esta sección.']];
  
  chunks.forEach((chunk, index) => {
    const slide = pptx.addSlide();
    slide.background = { color: STYLES.colors.bgBlue };
    
    addDecorativeElements(slide);
    
    // Título
    slide.addText(title.toUpperCase(), {
      x: 0.5,
      y: 0.3,
      w: 8.5,
      h: 0.6,
      fontSize: 18,
      bold: true,
      color: STYLES.colors.white
    });
    
    // Indicador de cumplimiento (barra de color)
    slide.addShape('rect', {
      x: 9.2,
      y: 0.3,
      w: 0.3,
      h: 0.6,
      fill: { color: color },
      line: { type: 'none' }
    });
    
    // Porcentaje
    slide.addText(`${percentage.toFixed(1)}%`, {
      x: 8.8,
      y: 0.35,
      w: 0.8,
      h: 0.5,
      fontSize: 12,
      color: STYLES.colors.white,
      align: 'right',
      bold: true
    });
    
    // Hallazgos como viñetas
    let yPos = 1.3;
    chunk.forEach(finding => {
      slide.addText(`• ${finding}`, {
        x: 0.8,
        y: yPos,
        w: 8.4,
        h: 'auto',
        fontSize: 11,
        color: STYLES.colors.white,
        valign: 'top'
      });
      yPos += 0.5;
    });
    
    // Indicador de página si hay múltiples
    if (chunks.length > 1) {
      slide.addText(`${index + 1} / ${chunks.length}`, {
        x: 9.0,
        y: 5.2,
        w: 0.5,
        h: 0.3,
        fontSize: 9,
        color: STYLES.colors.textLight,
        align: 'right'
      });
    }
  });
}

/**
 * Slide: Informe con gráfico de barras horizontales
 */
export function createInformeConGrafico(pptx, title, items, percentage) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  const color = getComplianceColor(percentage);
  
  // Título
  slide.addText(title.toUpperCase(), {
    x: 0.5,
    y: 0.3,
    w: 8.5,
    h: 0.6,
    fontSize: 18,
    bold: true,
    color: STYLES.colors.white
  });
  
  // Indicador de cumplimiento
  slide.addShape('rect', {
    x: 9.2,
    y: 0.3,
    w: 0.3,
    h: 0.6,
    fill: { color: color },
    line: { type: 'none' }
  });
  
  // Hallazgos en la parte izquierda
  let yPos = 1.3;
  items.slice(0, 5).forEach(item => {
    slide.addText(`• ${item}`, {
      x: 0.8,
      y: yPos,
      w: 4.5,
      h: 0.5,
      fontSize: 10,
      color: STYLES.colors.white
    });
    yPos += 0.6;
  });
  
  // Gráfico de barras en la parte derecha
  slide.addText('CUMPLIMIENTO', {
    x: 5.5,
    y: 1.3,
    w: 4.0,
    h: 0.4,
    fontSize: 11,
    color: STYLES.colors.white,
    bold: true,
    align: 'center'
  });
  
  const barData = [{ label: '', value: percentage }];
  
  // Barra horizontal grande
  const maxBarWidth = 3.5;
  const barWidth = (percentage / 100) * maxBarWidth;
  
  slide.addShape('rect', {
    x: 5.8,
    y: 2.0,
    w: maxBarWidth,
    h: 0.6,
    fill: { color: '2C3E50', transparency: 50 },
    line: { type: 'none' }
  });
  
  if (barWidth > 0) {
    slide.addShape('rect', {
      x: 5.8,
      y: 2.0,
      w: barWidth,
      h: 0.6,
      fill: { color: color },
      line: { type: 'none' }
    });
  }
  
  slide.addText(`${percentage.toFixed(1)}%`, {
    x: 6.5,
    y: 2.1,
    w: 2.0,
    h: 0.4,
    fontSize: 16,
    color: STYLES.colors.white,
    align: 'center',
    bold: true
  });
}

/**
 * Slide: Plan de acción
 */
export function createPlanAccion(pptx, recommendations) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('PLAN DE ACCIÓN', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    ...STYLES.fonts.titleMain,
    align: 'center'
  });
  
  // Subtítulo
  slide.addText('ACCIONES A REALIZAR', {
    x: 0.5,
    y: 0.95,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: STYLES.colors.textLight,
    align: 'center'
  });
  
  // Tabla de recomendaciones
  const tableData = [
    ['ÍTEM', 'ACCIÓN']
  ];
  
  recommendations.forEach((rec, index) => {
    tableData.push([`${index + 1}`, rec]);
  });
  
  slide.addTable(tableData, {
    x: 0.8,
    y: 1.6,
    w: 8.4,
    colW: [0.8, 7.6],
    fontSize: 10,
    color: STYLES.colors.white,
    fill: { color: STYLES.colors.secondary },
    border: { pt: 1, color: STYLES.colors.white },
    rowH: 0.4,
    valign: 'middle'
  });
}

/**
 * Slide: Cierre con agradecimiento
 */
export function createCierre(pptx, entityName) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  slide.addText('¡Gracias!', {
    x: 0.5,
    y: 2.5,
    w: 9,
    h: 1.0,
    fontSize: 48,
    bold: true,
    color: STYLES.colors.white,
    align: 'center',
    valign: 'middle'
  });
  
  slide.addText(entityName.toUpperCase(), {
    x: 0.5,
    y: 3.8,
    w: 9,
    h: 0.5,
    fontSize: 16,
    color: STYLES.colors.textLight,
    align: 'center'
  });
}
