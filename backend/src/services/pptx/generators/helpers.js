/**
 * Funciones helper para generación de PPTX
 */

/**
 * Generar recomendaciones basadas en resultados del diagnóstico
 */
export function generateRecommendations(globalResult) {
  const recommendations = [];
  
  // Recomendaciones por aspectos administrativos
  if (globalResult.bySection.admin.porcentaje < 60) {
    recommendations.push('Elaborar un plan de acción documental que contemple los aspectos administrativos.');
    recommendations.push('Crear o formalizar el Comité Interno de Archivo mediante acto administrativo.');
    recommendations.push('Asignar recursos presupuestales específicos para la función archivística.');
  } else if (globalResult.bySection.admin.porcentaje < 80) {
    recommendations.push('Fortalecer la estructura administrativa del área de archivo.');
    recommendations.push('Actualizar el manual de funciones incluyendo responsabilidades archivísticas.');
  }
  
  // Recomendaciones por función archivística
  if (globalResult.bySection.func.porcentaje < 60) {
    recommendations.push('Elaborar el Programa de Gestión Documental (PGD) de la entidad.');
    recommendations.push('Conformar el Cuadro de Clasificación Documental (CCD).');
    recommendations.push('Elaborar y aprobar las Tablas de Retención Documental (TRD).');
    recommendations.push('Implementar procesos de organización documental en archivos de gestión.');
  } else if (globalResult.bySection.func.porcentaje < 80) {
    recommendations.push('Actualizar los instrumentos archivísticos existentes.');
    recommendations.push('Implementar el Formato Único de Inventario Documental (FUID).');
    recommendations.push('Realizar transferencias documentales primarias de forma regular.');
  }
  
  // Recomendaciones por preservación
  if (globalResult.bySection.pres.porcentaje < 60) {
    recommendations.push('Adecuar los espacios físicos destinados al almacenamiento de documentos.');
    recommendations.push('Adquirir mobiliario especializado (estantería metálica) para archivo.');
    recommendations.push('Implementar unidades de conservación en cartón neutro.');
    recommendations.push('Elaborar el Plan de Prevención de Desastres y Situaciones de Riesgo.');
    recommendations.push('Instalar sistemas de detección y extinción de incendios.');
  } else if (globalResult.bySection.pres.porcentaje < 80) {
    recommendations.push('Realizar mediciones periódicas de condiciones ambientales.');
    recommendations.push('Implementar protocolos de limpieza y mantenimiento preventivo.');
    recommendations.push('Mejorar los sistemas de seguridad en depósitos de archivo.');
  }
  
  // Recomendaciones generales
  if (globalResult.porcentaje < 60) {
    recommendations.push('Capacitar al personal en gestión documental y normatividad archivística.');
    recommendations.push('Solicitar acompañamiento técnico del Archivo General de la Nación.');
  }
  
  // Si el cumplimiento es óptimo
  if (recommendations.length === 0) {
    recommendations.push('Mantener el nivel de cumplimiento alcanzado.');
    recommendations.push('Continuar con las buenas prácticas implementadas.');
    recommendations.push('Realizar seguimiento periódico al Programa de Gestión Documental.');
  }
  
  return recommendations;
}

/**
 * Formatear fecha en español
 */
export function formatDateSpanish(date) {
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  
  const d = new Date(date);
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  
  return `${day} de ${month} de ${year}`;
}

/**
 * Limpiar nombre de entidad para nombre de archivo
 */
export function sanitizeFileName(name) {
  return name
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 50);
}
