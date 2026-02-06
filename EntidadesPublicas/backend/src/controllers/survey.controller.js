import Survey from '../models/Survey.js';

/**
 * Crear nueva respuesta de formulario
 */
export const createSurvey = async (req, res, next) => {
  try {
    const { surveyData, status, metadata } = req.body;

    const survey = new Survey({
      surveyData,
      status: status || 'draft',
      metadata: {
        ...metadata,
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip || req.connection.remoteAddress
      }
    });

    if (status === 'completed') {
      survey.completedAt = new Date();
    }

    await survey.save();

    res.status(201).json({
      success: true,
      message: 'Survey creado exitosamente',
      data: survey
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener todas las respuestas
 */
export const getAllSurveys = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (status) {
      query.status = status;
    }

    const surveys = await Survey.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Survey.countDocuments(query);

    res.status(200).json({
      success: true,
      data: surveys,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener respuesta por ID
 */
export const getSurveyById = async (req, res, next) => {
  try {
    const survey = await Survey.findById(req.params.id);

    if (!survey) {
      return res.status(404).json({
        success: false,
        message: 'Survey no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: survey
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Actualizar respuesta
 */
export const updateSurvey = async (req, res, next) => {
  try {
    const { surveyData, status } = req.body;

    const survey = await Survey.findById(req.params.id);

    if (!survey) {
      return res.status(404).json({
        success: false,
        message: 'Survey no encontrado'
      });
    }

    if (surveyData) {
      survey.surveyData = surveyData;
    }

    if (status) {
      survey.status = status;
      if (status === 'completed' && !survey.completedAt) {
        survey.completedAt = new Date();
      }
    }

    await survey.save();

    res.status(200).json({
      success: true,
      message: 'Survey actualizado exitosamente',
      data: survey
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Eliminar respuesta
 */
export const deleteSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);

    if (!survey) {
      return res.status(404).json({
        success: false,
        message: 'Survey no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Survey eliminado exitosamente'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener estadísticas
 */
export const getSurveyStats = async (req, res, next) => {
  try {
    const total = await Survey.countDocuments();
    const completed = await Survey.countDocuments({ status: 'completed' });
    const draft = await Survey.countDocuments({ status: 'draft' });

    res.status(200).json({
      success: true,
      data: {
        total,
        completed,
        draft,
        completionRate: total > 0 ? ((completed / total) * 100).toFixed(2) : 0
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Generar presentación PPTX individual para un registro específico
 * Arquitectura modular con diseño institucional
 */
export const generateIndividualPresentation = async (req, res, next) => {
  try {
    const survey = await Survey.findById(req.params.id);
    
    if (!survey) {
      return res.status(404).json({
        success: false,
        message: 'Encuesta no encontrada'
      });
    }

    const pptxgenModule = await import('pptxgenjs');
    const PptxGenJS = pptxgenModule.default;
    const pptx = new PptxGenJS();
    
    // Importar módulos de arquitectura modular
    const { DiagnosticCalculator } = await import('../services/pptx/calculators/diagnosticCalculator.js');
    const staticSlides = await import('../services/pptx/generators/staticSlides.js');
    const dynamicSlides = await import('../services/pptx/generators/dynamicSlides.js');
    const helpers = await import('../services/pptx/generators/helpers.js');
    
    const data = survey.surveyData;
    const calculator = new DiagnosticCalculator(data);
    const entityName = data.nombre_entidad || 'Entidad';
    const date = helpers.formatDateSpanish(survey.createdAt);
    
    // === SLIDES INFORMATIVOS (FIJOS) ===
    staticSlides.createPortada(pptx, entityName, date);
    staticSlides.createTituloSlide(pptx);
    staticSlides.createContextualizacion(pptx);
    staticSlides.createObjetivos(pptx);
    staticSlides.createMetodologia(pptx);
    staticSlides.createQueSeEvaluo(pptx);
    staticSlides.createParaTenerEnCuenta(pptx);
    staticSlides.createSeparator(pptx, 'INFORME DIAGNÓSTICO DOCUMENTAL');
    
    // === SLIDES DINÁMICOS (BASADOS EN DATOS) ===
    
    // Calcular resultados
    const globalResult = calculator.calculateGlobal();
    
    // Resultado global
    dynamicSlides.createResultadoGlobal(pptx, globalResult);
    
    // Estado porcentual general
    dynamicSlides.createEstadoPorcentual(pptx, globalResult);
    
    // Aspectos administrativos - con hallazgos
    const adminFindings = calculator.generateFindingsBySection('1_', 'Aspectos Administrativos');
    adminFindings.push(...calculator.generateFindingsBySection('2_', 'Aspectos Organizacionales'));
    adminFindings.push(...calculator.generateFindingsBySection('3_', 'Aspectos de Financiación'));
    adminFindings.push(...calculator.generateFindingsBySection('4_', 'Aspectos de Formación'));
    
    if (adminFindings.length > 0) {
      dynamicSlides.createInformeSeccion(
        pptx,
        'INFORME DIAGNÓSTICO DOCUMENTAL – ASPECTOS ADMINISTRATIVOS',
        adminFindings,
        globalResult.bySection.admin.porcentaje
      );
    } else {
      dynamicSlides.createInformeConGrafico(
        pptx,
        'INFORME DIAGNÓSTICO DOCUMENTAL – ASPECTOS ADMINISTRATIVOS',
        ['La entidad cumple satisfactoriamente con los aspectos administrativos evaluados.'],
        globalResult.bySection.admin.porcentaje
      );
    }
    
    // Función archivística - con hallazgos
    const funcFindings = calculator.generateFindingsBySection('5_', 'Instrumentos Archivísticos');
    funcFindings.push(...calculator.generateFindingsBySection('6_', 'Organización y Descripción'));
    funcFindings.push(...calculator.generateFindingsBySection('7_', 'Comunicaciones Oficiales'));
    
    if (funcFindings.length > 0) {
      dynamicSlides.createInformeSeccion(
        pptx,
        'INFORME DIAGNÓSTICO DOCUMENTAL – ASPECTOS DE FUNCIÓN ARCHIVÍSTICA',
        funcFindings,
        globalResult.bySection.func.porcentaje
      );
    } else {
      dynamicSlides.createInformeConGrafico(
        pptx,
        'INFORME DIAGNÓSTICO DOCUMENTAL – ASPECTOS DE FUNCIÓN ARCHIVÍSTICA',
        ['La entidad cumple satisfactoriamente con los aspectos de función archivística evaluados.'],
        globalResult.bySection.func.porcentaje
      );
    }
    
    // Preservación - con hallazgos
    const presFindings = calculator.generateFindingsBySection('8_', 'Aspectos de Preservación');
    
    if (presFindings.length > 0) {
      dynamicSlides.createInformeSeccion(
        pptx,
        'INFORME DIAGNÓSTICO DOCUMENTAL – ASPECTOS DE PRESERVACIÓN',
        presFindings,
        globalResult.bySection.pres.porcentaje
      );
    } else {
      dynamicSlides.createInformeConGrafico(
        pptx,
        'INFORME DIAGNÓSTICO DOCUMENTAL – ASPECTOS DE PRESERVACIÓN',
        ['La entidad cumple satisfactoriamente con los aspectos de preservación evaluados.'],
        globalResult.bySection.pres.porcentaje
      );
    }
    
    // Plan de acción
    const recommendations = helpers.generateRecommendations(globalResult);
    dynamicSlides.createPlanAccion(pptx, recommendations);
    
    // Cierre
    dynamicSlides.createCierre(pptx, entityName);
    
    // Generar archivo PPTX
    const buffer = await pptx.write({ outputType: 'nodebuffer' });
    const fileName = `Informe_Diagnostico_${helpers.sanitizeFileName(entityName)}_${Date.now()}.pptx`;

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.send(buffer);

  } catch (error) {
    console.error('Error generating individual presentation:', error);
    next(error);
  }
};

/**
 * Generar presentación PPTX con datos y gráficos
 */
export const generatePresentation = async (req, res, next) => {
  try {
    const surveys = await Survey.find({ status: 'completed' }).sort({ createdAt: -1 });
    
    if (surveys.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No hay encuestas completadas para generar la presentación'
      });
    }

    const pptxgenModule = await import('pptxgenjs');
    const PptxGenJS = pptxgenModule.default;
    const pptx = new PptxGenJS();

    // Función auxiliar para calcular cumplimiento
    const calcularPuntuacion = (data, prefix) => {
      let cumple = 0, parcial = 0, noCumple = 0, total = 0;
      Object.keys(data).forEach(key => {
        if (key.startsWith(prefix) && !key.includes('_detail') && !key.includes('_obs') && !key.includes('_info')) {
          total++;
          if (data[key] === 'Cumple') cumple++;
          else if (data[key] === 'Parcial') parcial++;
          else if (data[key] === 'No cumple') noCumple++;
        }
      });
      const porcentaje = total > 0 ? ((cumple + parcial * 0.5) / total * 100).toFixed(1) : 0;
      return { cumple, parcial, noCumple, total, porcentaje };
    };

    // Slide 1: Portada
    const slide1 = pptx.addSlide();
    slide1.background = { color: '1976D2' };
    slide1.addText('Diagnóstico Integral de Archivos', {
      x: 0.5,
      y: 1.8,
      w: 9,
      h: 1,
      fontSize: 44,
      bold: true,
      color: 'FFFFFF',
      align: 'center'
    });
    slide1.addText('Análisis Consolidado de Entidades', {
      x: 0.5,
      y: 2.9,
      w: 9,
      h: 0.6,
      fontSize: 28,
      color: 'E3F2FD',
      align: 'center'
    });
    slide1.addText(`Total de Entidades Evaluadas: ${surveys.length}`, {
      x: 0.5,
      y: 3.8,
      w: 9,
      h: 0.5,
      fontSize: 24,
      color: 'FFFFFF',
      align: 'center'
    });
    slide1.addText(`Generado: ${new Date().toLocaleDateString('es-ES')}`, {
      x: 0.5,
      y: 4.5,
      w: 9,
      h: 0.3,
      fontSize: 16,
      color: 'E3F2FD',
      align: 'center'
    });

    // Calcular promedios de cumplimiento por sección
    const promedios = {
      admin: { cumple: 0, parcial: 0, noCumple: 0, total: 0 },
      funcion: { cumple: 0, parcial: 0, noCumple: 0, total: 0 },
      preserv: { cumple: 0, parcial: 0, noCumple: 0, total: 0 }
    };

    surveys.forEach(survey => {
      const admin = calcularPuntuacion(survey.surveyData, '1_');
      const funcion = calcularPuntuacion(survey.surveyData, '5_');
      const preserv = calcularPuntuacion(survey.surveyData, '8_');
      
      promedios.admin.cumple += admin.cumple;
      promedios.admin.parcial += admin.parcial;
      promedios.admin.noCumple += admin.noCumple;
      promedios.admin.total += admin.total;
      
      promedios.funcion.cumple += funcion.cumple;
      promedios.funcion.parcial += funcion.parcial;
      promedios.funcion.noCumple += funcion.noCumple;
      promedios.funcion.total += funcion.total;
      
      promedios.preserv.cumple += preserv.cumple;
      promedios.preserv.parcial += preserv.parcial;
      promedios.preserv.noCumple += preserv.noCumple;
      promedios.preserv.total += preserv.total;
    });

    const numSurveys = surveys.length;
    const avgAdmin = ((promedios.admin.cumple + promedios.admin.parcial * 0.5) / promedios.admin.total * 100).toFixed(1);
    const avgFuncion = ((promedios.funcion.cumple + promedios.funcion.parcial * 0.5) / promedios.funcion.total * 100).toFixed(1);
    const avgPreserv = ((promedios.preserv.cumple + promedios.preserv.parcial * 0.5) / promedios.preserv.total * 100).toFixed(1);

    // Slide 2: Resumen Ejecutivo
    const slide2 = pptx.addSlide();
    slide2.addText('Resumen Ejecutivo', {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.5,
      fontSize: 32,
      bold: true,
      color: '1976D2'
    });

    const resumenData = [
      ['Sección', 'Cumple', 'Parcial', 'No Cumple', 'Promedio %'],
      [
        'I. Aspectos Administrativos',
        Math.round(promedios.admin.cumple / numSurveys).toString(),
        Math.round(promedios.admin.parcial / numSurveys).toString(),
        Math.round(promedios.admin.noCumple / numSurveys).toString(),
        avgAdmin + '%'
      ],
      [
        'II. Función Archivística',
        Math.round(promedios.funcion.cumple / numSurveys).toString(),
        Math.round(promedios.funcion.parcial / numSurveys).toString(),
        Math.round(promedios.funcion.noCumple / numSurveys).toString(),
        avgFuncion + '%'
      ],
      [
        'III. Preservación',
        Math.round(promedios.preserv.cumple / numSurveys).toString(),
        Math.round(promedios.preserv.parcial / numSurveys).toString(),
        Math.round(promedios.preserv.noCumple / numSurveys).toString(),
        avgPreserv + '%'
      ]
    ];

    slide2.addTable(resumenData, {
      x: 0.5,
      y: 1.2,
      w: 9,
      fontSize: 14,
      border: { pt: 1, color: '1976D2' },
      fill: { color: 'F5F5F5' },
      color: '333333',
      rowH: 0.5,
      valign: 'middle',
      align: 'center'
    });

    // Slide 3: Gráfico de Cumplimiento Promedio por Sección
    const slide3 = pptx.addSlide();
    slide3.addText('Cumplimiento Promedio por Sección', {
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
        name: 'Cumplimiento Promedio',
        labels: ['Administrativos', 'Función Archivística', 'Preservación'],
        values: [parseFloat(avgAdmin), parseFloat(avgFuncion), parseFloat(avgPreserv)]
      }
    ];

    slide3.addChart(pptx.ChartType.bar, chartData, {
      x: 1.5,
      y: 1.2,
      w: 7,
      h: 4,
      chartColors: ['4CAF50'],
      showTitle: false,
      showLegend: false,
      showValue: true,
      valAxisMaxVal: 100,
      valAxisTitle: 'Porcentaje (%)',
      catAxisTitle: 'Secciones'
    });

    // Slide 4: Distribución por Nivel de Entidad
    const slide4 = pptx.addSlide();
    slide4.addText('Distribución por Nivel de Entidad', {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.5,
      fontSize: 28,
      bold: true,
      color: '1976D2'
    });

    const nivelStats = {};
    surveys.forEach(survey => {
      const nivel = survey.surveyData.nivel || 'No especificado';
      nivelStats[nivel] = (nivelStats[nivel] || 0) + 1;
    });

    const nivelChartData = [
      {
        name: 'Entidades',
        labels: Object.keys(nivelStats),
        values: Object.values(nivelStats)
      }
    ];

    slide4.addChart(pptx.ChartType.pie, nivelChartData, {
      x: 2,
      y: 1.2,
      w: 6,
      h: 4,
      chartColors: ['1976D2', '2196F3', '64B5F6', '90CAF9', 'BBDEFB'],
      showTitle: false,
      showLegend: true,
      showValue: true,
      showPercent: true
    });

    // Slide 5: Comparativa de Entidades
    const slide5 = pptx.addSlide();
    slide5.addText('Ranking de Entidades por Cumplimiento', {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.5,
      fontSize: 28,
      bold: true,
      color: '1976D2'
    });

    const entidadesRanking = surveys.map(survey => {
      const admin = calcularPuntuacion(survey.surveyData, '1_');
      const funcion = calcularPuntuacion(survey.surveyData, '5_');
      const preserv = calcularPuntuacion(survey.surveyData, '8_');
      const promedio = ((parseFloat(admin.porcentaje) + parseFloat(funcion.porcentaje) + parseFloat(preserv.porcentaje)) / 3).toFixed(1);
      
      return {
        nombre: survey.surveyData.nombre_entidad || 'Sin nombre',
        promedio: parseFloat(promedio)
      };
    }).sort((a, b) => b.promedio - a.promedio).slice(0, 10);

    const rankingData = [['Entidad', 'Cumplimiento %']];
    entidadesRanking.forEach(entidad => {
      rankingData.push([entidad.nombre, entidad.promedio + '%']);
    });

    slide5.addTable(rankingData, {
      x: 1,
      y: 1.2,
      w: 8,
      fontSize: 13,
      border: { pt: 1, color: '1976D2' },
      fill: { color: 'F5F5F5' },
      color: '333333',
      rowH: 0.35,
      valign: 'middle'
    });

    // Slide 6: Distribución General de Respuestas
    const slide6 = pptx.addSlide();
    slide6.addText('Distribución General de Respuestas', {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.5,
      fontSize: 28,
      bold: true,
      color: '1976D2'
    });

    const totalCumple = promedios.admin.cumple + promedios.funcion.cumple + promedios.preserv.cumple;
    const totalParcial = promedios.admin.parcial + promedios.funcion.parcial + promedios.preserv.parcial;
    const totalNoCumple = promedios.admin.noCumple + promedios.funcion.noCumple + promedios.preserv.noCumple;

    const pieChartData = [
      {
        name: 'Respuestas',
        labels: ['Cumple', 'Parcial', 'No Cumple'],
        values: [totalCumple, totalParcial, totalNoCumple]
      }
    ];

    slide6.addChart(pptx.ChartType.pie, pieChartData, {
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

    // Slide 7: Listado de Entidades Evaluadas
    const slide7 = pptx.addSlide();
    slide7.addText('Entidades Evaluadas', {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.5,
      fontSize: 28,
      bold: true,
      color: '1976D2'
    });

    const entidadesData = [['Entidad', 'Nivel', 'Sector', 'Fecha']];
    surveys.slice(0, 10).forEach(survey => {
      entidadesData.push([
        (survey.surveyData.nombre_entidad || 'Sin nombre').substring(0, 30),
        survey.surveyData.nivel || '-',
        (survey.surveyData.sector || '-').substring(0, 20),
        new Date(survey.createdAt).toLocaleDateString('es-ES')
      ]);
    });

    slide7.addTable(entidadesData, {
      x: 0.5,
      y: 1.2,
      w: 9,
      fontSize: 12,
      border: { pt: 1, color: '1976D2' },
      fill: { color: 'F5F5F5' },
      color: '333333',
      rowH: 0.5,
      valign: 'middle',
      align: 'center'
    });

    const buffer = await pptx.write({ outputType: 'nodebuffer' });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
    res.setHeader('Content-Disposition', `attachment; filename=Resultados_Formulario_${Date.now()}.pptx`);
    res.send(buffer);

  } catch (error) {
    console.error('Error generating presentation:', error);
    next(error);
  }
};
