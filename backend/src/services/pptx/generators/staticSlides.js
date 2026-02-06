/**
 * Generadores de slides estáticos (informativos)
 * Diseño institucional con fondo azul oscuro
 */

import { INSTITUTIONAL_STYLES as STYLES } from '../config/institutionalStyles.js';
import { STATIC_CONTENT } from '../content/staticContent.js';

/**
 * Agregar elementos decorativos diagonales blancos
 */
function addDecorativeElements(slide) {
  // Elemento diagonal superior derecha
  slide.addShape('triangle', {
    x: 8.5,
    y: 0,
    w: 1.5,
    h: 1.0,
    fill: { color: STYLES.colors.white, transparency: 90 },
    line: { type: 'none' },
    rotate: 45
  });
  
  // Elemento diagonal inferior izquierda
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
 * Slide 1: Portada institucional
 */
export function createPortada(pptx, entityName, date) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Logo superior izquierdo (placeholder - se puede reemplazar con imagen real)
  slide.addText('GDI', {
    x: 0.5,
    y: 0.3,
    w: 1.5,
    h: 0.5,
    fontSize: 24,
    bold: true,
    color: STYLES.colors.white,
    fontFace: 'Arial'
  });
  
  // Título principal
  slide.addText('Contextualización\nDiagnóstico Documental\nCooprocal', {
    x: 1.0,
    y: 2.0,
    w: 8.0,
    h: 2.0,
    fontSize: 36,
    bold: true,
    color: STYLES.colors.white,
    align: 'center',
    valign: 'middle'
  });
  
  // Nombre de la entidad
  slide.addText(entityName.toUpperCase(), {
    x: 1.0,
    y: 4.2,
    w: 8.0,
    h: 0.6,
    fontSize: 18,
    color: STYLES.colors.textLight,
    align: 'center'
  });
  
  // Fecha
  slide.addText(date, {
    x: 1.0,
    y: 5.0,
    w: 8.0,
    h: 0.3,
    fontSize: 12,
    color: STYLES.colors.textLight,
    align: 'center'
  });
}

/**
 * Slide 2: Título (índice)
 */
export function createTituloSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('TÍTULO', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    ...STYLES.fonts.titleMain,
    align: 'center'
  });
  
  // Lista numerada
  const items = [
    '1. Diligenciamiento registro de asistencia.',
    '2. Contextualización diagnóstico documental.',
    '3. Objetivos.',
    '4. ¿Qué se evaluó en el diagnóstico documental.',
    '5. Para tener en cuenta.',
    '6. Informe diagnóstico documental.',
    '7. Plan de acción.'
  ];
  
  slide.addText(items.join('\n'), {
    x: 1.5,
    y: 1.5,
    w: 7,
    h: 3.5,
    fontSize: 14,
    color: STYLES.colors.white,
    valign: 'top'
  });
}

/**
 * Slide 3: Contextualización
 */
export function createContextualizacion(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  const content = STATIC_CONTENT.contextualizacion;
  
  // Título
  slide.addText(content.title, {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    ...STYLES.fonts.titleMain,
    align: 'center'
  });
  
  // Contenido numerado
  slide.addText('1. Es una revisión de toda la producción documental de una empresa, con miras a organizar y establecer el archivo.', {
    x: 0.8,
    y: 1.3,
    w: 8.4,
    h: 0.8,
    ...STYLES.fonts.bodyText
  });
  
  slide.addText('2. Permite ver el grado de madurez de una entidad en cuanto a procesos archivísticos se refiere.', {
    x: 0.8,
    y: 2.2,
    w: 8.4,
    h: 0.8,
    ...STYLES.fonts.bodyText
  });
}

/**
 * Slide 4: Objetivos
 */
export function createObjetivos(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  const content = STATIC_CONTENT.objetivos;
  
  // Título
  slide.addText('CONTEXTUALIZACIÓN DIAGNÓSTICO\nDOCUMENTAL - OBJETIVOS', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.8,
    ...STYLES.fonts.titleSection,
    align: 'center'
  });
  
  // Cajas con objetivos (simulando el diseño visual)
  const objectives = [
    'Evaluar el cumplimiento normativo',
    'Identificar el estado de procesos documentales',
    'Determinar nivel de implementación de instrumentos',
    'Establecer recomendaciones para mejoramiento'
  ];
  
  let xPos = 0.8;
  objectives.forEach((obj, index) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: xPos,
      y: 2.0,
      w: 1.8,
      h: 1.2,
      fill: { color: index === 0 ? '8BC34A' : (index === 1 ? '64B5F6' : (index === 2 ? 'A1887F' : 'CE93D8')) },
      line: { type: 'none' }
    });
    
    slide.addText(obj, {
      x: xPos,
      y: 2.1,
      w: 1.8,
      h: 1.0,
      fontSize: 10,
      color: STYLES.colors.white,
      align: 'center',
      valign: 'middle',
      bold: true
    });
    
    xPos += 2.0;
  });
}

/**
 * Slide 5: Metodología
 */
export function createMetodologia(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('METODOLOGÍA DIAGNÓSTICO DOCUMENTAL', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    ...STYLES.fonts.titleMain,
    align: 'center'
  });
  
  // Diagrama circular con elementos
  const elements = [
    { text: 'Instrumentos', color: '2196F3', x: 2.0, y: 2.0 },
    { text: 'Criterios', color: '4CAF50', x: 5.5, y: 2.0 },
    { text: 'Enfoque', color: 'F44336', x: 3.75, y: 1.2 },
    { text: 'Ponderación', color: 'AB47BC', x: 3.75, y: 3.5 }
  ];
  
  elements.forEach(elem => {
    slide.addShape(pptx.ShapeType.ellipse, {
      x: elem.x,
      y: elem.y,
      w: 1.5,
      h: 1.0,
      fill: { color: elem.color },
      line: { type: 'none' }
    });
    
    slide.addText(elem.text, {
      x: elem.x,
      y: elem.y + 0.3,
      w: 1.5,
      h: 0.4,
      fontSize: 12,
      color: STYLES.colors.white,
      align: 'center',
      bold: true
    });
  });
}

/**
 * Slide 6: ¿Qué se evaluó?
 */
export function createQueSeEvaluo(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('¿QUÉ SE EVALUÓ EN EL DIAGNÓSTICO\nDOCUMENTAL?', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.8,
    ...STYLES.fonts.titleSection,
    align: 'center'
  });
  
  // Tres cajas principales
  const sections = [
    { title: 'Aspectos\nAdministrativos', color: 'AB47BC', x: 1.0 },
    { title: 'Diagnóstico\nDocumental', color: '2196F3', x: 4.0 },
    { title: 'Función\nArchivística', color: '4CAF50', x: 7.0 }
  ];
  
  sections.forEach(section => {
    slide.addShape(pptx.ShapeType.rect, {
      x: section.x,
      y: 2.5,
      w: 2.0,
      h: 1.5,
      fill: { color: section.color },
      line: { type: 'none' }
    });
    
    slide.addText(section.title, {
      x: section.x,
      y: 2.7,
      w: 2.0,
      h: 1.1,
      fontSize: 12,
      color: STYLES.colors.white,
      align: 'center',
      valign: 'middle',
      bold: true
    });
  });
  
  // Caja inferior
  slide.addShape(pptx.ShapeType.rect, {
    x: 3.5,
    y: 4.2,
    w: 3.0,
    h: 1.0,
    fill: { color: '00BCD4' },
    line: { type: 'none' }
  });
  
  slide.addText('Preservación', {
    x: 3.5,
    y: 4.4,
    w: 3.0,
    h: 0.6,
    fontSize: 14,
    color: STYLES.colors.white,
    align: 'center',
    valign: 'middle',
    bold: true
  });
}

/**
 * Slide 7: Para tener en cuenta (Semáforo)
 */
export function createParaTenerEnCuenta(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgBlue };
  
  addDecorativeElements(slide);
  
  // Título
  slide.addText('PARA TENER EN CUENTA...', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    ...STYLES.fonts.titleMain,
    align: 'center'
  });
  
  // Subtítulo
  slide.addText('Colores:', {
    x: 1.0,
    y: 1.2,
    w: 8.0,
    h: 0.4,
    fontSize: 14,
    color: STYLES.colors.white,
    bold: true
  });
  
  // Semáforo con barras
  const semaforo = [
    { color: STYLES.colors.critical, text: '= Cumplimiento bajo de requisitos', y: 1.8 },
    { color: STYLES.colors.acceptable, text: '= Cumplimiento aceptable de los', y: 2.4 },
    { color: STYLES.colors.optimal, text: '= Cumplimiento óptimo de los requisitos', y: 3.0 }
  ];
  
  semaforo.forEach(item => {
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.5,
      y: item.y,
      w: 1.5,
      h: 0.4,
      fill: { color: item.color },
      line: { type: 'none' }
    });
    
    slide.addText(item.text, {
      x: 3.2,
      y: item.y,
      w: 5.0,
      h: 0.4,
      fontSize: 11,
      color: STYLES.colors.white
    });
  });
  
  // Nota de ponderación
  slide.addText('Ponderación: cada aspecto y subcomponentes derivados de los mismos tiene un ponderado diferente.', {
    x: 1.0,
    y: 4.0,
    w: 8.0,
    h: 0.8,
    fontSize: 10,
    color: STYLES.colors.textLight,
    italic: true
  });
}

/**
 * Slide separador
 */
export function createSeparator(pptx, text) {
  const slide = pptx.addSlide();
  slide.background = { color: STYLES.colors.bgDarkBlue };
  
  slide.addText(text.toUpperCase(), {
    x: 0.5,
    y: 2.5,
    w: 9,
    h: 1.0,
    fontSize: 40,
    bold: true,
    color: STYLES.colors.white,
    align: 'center',
    valign: 'middle'
  });
}
