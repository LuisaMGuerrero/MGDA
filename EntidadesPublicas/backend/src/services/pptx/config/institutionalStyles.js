/**
 * Configuración centralizada de estilos institucionales para PPTX
 * Basado en el diseño oficial de GDI Docu
 */

export const INSTITUTIONAL_STYLES = {
  // Colores institucionales
  colors: {
    primary: '0D3C61',        // Azul institucional oscuro (fondo)
    secondary: '1E5A8E',      // Azul medio
    accent: '2E7AB8',         // Azul claro para acentos
    white: 'FFFFFF',
    textWhite: 'FFFFFF',      // Texto blanco sobre azul
    textLight: 'E8F4F8',      // Texto claro
    
    // Semáforo de cumplimiento
    optimal: '4CAF50',        // Verde
    acceptable: 'FFEB3B',     // Amarillo
    critical: 'F44336',       // Rojo
    
    // Colores para gráficos
    chartGreen: '4CAF50',
    chartYellow: 'FFEB3B',
    chartRed: 'F44336',
    chartBlue: '2196F3',
    
    // Fondos
    bgBlue: '0D3C61',
    bgDarkBlue: '082A45'
  },
  
  // Tipografías institucionales
  fonts: {
    titleMain: {
      size: 28,
      bold: true,
      color: 'FFFFFF',
      fontFace: 'Arial'
    },
    titleSection: {
      size: 22,
      bold: true,
      color: 'FFFFFF',
      fontFace: 'Arial'
    },
    subtitle: {
      size: 16,
      bold: true,
      color: 'FFFFFF',
      fontFace: 'Arial'
    },
    bodyText: {
      size: 11,
      color: 'FFFFFF',
      fontFace: 'Arial'
    },
    bodySmall: {
      size: 10,
      color: 'E8F4F8',
      fontFace: 'Arial'
    },
    bullet: {
      size: 11,
      color: 'FFFFFF',
      fontFace: 'Arial'
    },
    chartLabel: {
      size: 10,
      color: 'FFFFFF',
      fontFace: 'Arial'
    }
  },
  
  // Layout estándar
  layout: {
    margin: {
      top: 0.4,
      left: 0.5,
      right: 0.5,
      bottom: 0.4
    },
    titleArea: {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.7
    },
    contentArea: {
      x: 0.6,
      y: 1.2,
      w: 8.8,
      h: 4.3
    }
  }
};

/**
 * Obtener color según porcentaje de cumplimiento
 */
export function getComplianceColor(percentage) {
  if (percentage >= 80) return INSTITUTIONAL_STYLES.colors.optimal;
  if (percentage >= 60) return INSTITUTIONAL_STYLES.colors.acceptable;
  return INSTITUTIONAL_STYLES.colors.critical;
}

/**
 * Obtener nivel de cumplimiento en texto
 */
export function getComplianceLevel(percentage) {
  if (percentage >= 80) return 'ÓPTIMO';
  if (percentage >= 60) return 'ACEPTABLE';
  return 'CRÍTICO';
}

/**
 * Dividir array en chunks para múltiples slides
 */
export function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks.length > 0 ? chunks : [[]];
}
