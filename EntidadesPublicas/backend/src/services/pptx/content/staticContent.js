/**
 * Contenido informativo fijo para slides estáticos
 * Todo el contenido técnico y normativo embebido
 */

export const STATIC_CONTENT = {
  
  // Slide 2: Contextualización
  contextualizacion: {
    title: 'CONTEXTUALIZACIÓN DEL DIAGNÓSTICO DOCUMENTAL',
    content: [
      'El diagnóstico documental es un instrumento técnico que permite identificar y evaluar el estado actual de la gestión documental en las entidades públicas y privadas.',
      '',
      'Este proceso se fundamenta en la normatividad archivística colombiana, particularmente en la Ley 594 de 2000 (Ley General de Archivos), el Acuerdo 001 de 2024 del Archivo General de la Nación y demás decretos reglamentarios.',
      '',
      'El diagnóstico permite establecer una línea base sobre el cumplimiento de los requisitos normativos en materia de gestión documental, identificar brechas y formular recomendaciones para el mejoramiento continuo de la función archivística institucional.'
    ]
  },
  
  // Slide 3: Objetivos
  objetivos: {
    title: 'OBJETIVOS DEL DIAGNÓSTICO DOCUMENTAL',
    items: [
      'Evaluar el cumplimiento de la normatividad archivística vigente en Colombia.',
      'Identificar el estado actual de los procesos de gestión documental en la entidad.',
      'Determinar el nivel de implementación de los instrumentos archivísticos obligatorios.',
      'Evaluar las condiciones de conservación y preservación de los documentos.',
      'Identificar riesgos asociados a la gestión documental y la preservación del patrimonio documental.',
      'Establecer recomendaciones técnicas para el fortalecimiento de la función archivística.',
      'Proporcionar insumos para la formulación del Plan de Mejoramiento Archivístico institucional.'
    ]
  },
  
  // Slide 4: Metodología
  metodologia: {
    title: 'METODOLOGÍA DEL DIAGNÓSTICO DOCUMENTAL',
    content: [
      'ENFOQUE: Evaluación técnica basada en normatividad archivística colombiana.',
      '',
      'INSTRUMENTOS UTILIZADOS:',
      '• Cuestionario estructurado de diagnóstico documental',
      '• Verificación de cumplimiento normativo',
      '• Análisis de instrumentos archivísticos',
      '• Inspección de condiciones de almacenamiento y preservación',
      '',
      'CRITERIOS DE EVALUACIÓN:',
      '• Cumple: Requisito implementado completamente según normativa',
      '• Cumple parcialmente: Requisito implementado de forma incompleta',
      '• No cumple: Requisito no implementado',
      '',
      'PONDERACIÓN: Cada aspecto evaluado tiene igual peso en el cálculo del cumplimiento general. Los cumplimientos parciales se valoran con el 50% del puntaje total.'
    ]
  },
  
  // Slide 5: Aspectos evaluados
  aspectosEvaluados: {
    title: '¿QUÉ SE EVALUÓ EN EL DIAGNÓSTICO DOCUMENTAL?',
    sections: [
      {
        subtitle: 'I. ASPECTOS ADMINISTRATIVOS',
        items: [
          'Conformación del Comité Interno de Archivo',
          'Existencia y designación del área responsable de archivo',
          'Infraestructura y espacios físicos adecuados',
          'Recursos presupuestales asignados a la función archivística',
          'Capacitación del personal en gestión documental'
        ]
      },
      {
        subtitle: 'II. FUNCIÓN ARCHIVÍSTICA',
        items: [
          'Programa de Gestión Documental (PGD)',
          'Cuadro de Clasificación Documental (CCD)',
          'Tablas de Retención Documental (TRD)',
          'Tablas de Valoración Documental (TVD)',
          'Organización y descripción de expedientes',
          'Procesos de transferencia documental',
          'Gestión de comunicaciones oficiales'
        ]
      },
      {
        subtitle: 'III. PRESERVACIÓN DOCUMENTAL',
        items: [
          'Condiciones de edificios y locales destinados a archivos',
          'Mobiliario y estantería especializada',
          'Unidades de conservación adecuadas',
          'Condiciones ambientales (temperatura, humedad relativa)',
          'Sistemas de seguridad y prevención de desastres',
          'Mantenimiento preventivo de instalaciones'
        ]
      }
    ]
  },
  
  // Slide 6: Para tener en cuenta
  paraTenerEnCuenta: {
    title: 'PARA TENER EN CUENTA',
    semaforo: {
      subtitle: 'INTERPRETACIÓN DE COLORES (SEMÁFORO DE CUMPLIMIENTO):',
      items: [
        'VERDE - CUMPLIMIENTO ÓPTIMO (80% - 100%): La entidad cumple satisfactoriamente con los requisitos normativos evaluados. Se recomienda mantener el nivel alcanzado.',
        '',
        'AMARILLO - CUMPLIMIENTO ACEPTABLE (60% - 79%): La entidad cumple parcialmente con los requisitos. Se requieren acciones de mejoramiento para alcanzar el nivel óptimo.',
        '',
        'ROJO - CUMPLIMIENTO CRÍTICO (0% - 59%): La entidad presenta deficiencias significativas que requieren atención prioritaria e inmediata.'
      ]
    },
    ponderacion: {
      subtitle: 'PONDERACIÓN DE ASPECTOS:',
      text: 'El porcentaje de cumplimiento general se calcula considerando el promedio ponderado de los tres aspectos evaluados: administrativos, función archivística y preservación documental. Los cumplimientos parciales se valoran con el 50% del puntaje total asignado a cada ítem.'
    }
  }
};
