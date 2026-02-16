export const surveyJson = {
  title: "Modelo de Gestión Documental y Administración de Archivos (MGDA)",
  logoPosition: "right",
  showProgressBar: "top",
  progressBarType: "buttons",
  showQuestionNumbers: "off",

  showPrevButton: true,
  startSurveyText: "Siguiente",
  pagePrevText: "Anterior",
  pageNextText: "Siguiente",
  completeText: "Finalizar",

  pages: [

    {
      name: "DATOS_ENTIDAD",
      title: "ENTIDAD",
      elements: [
        {
          type: "text",
          name: "NOMBRE_ENTIDAD",
          title: "Nombre de la entidad",
          isRequired: true,
          placeholder: "Ingrese el nombre completo de la entidad"
        }
      ]
    },

    {
      name: "COMP_GD_ESTRATEGICO",
      title: "ESTRATÉGICO",
      elements: [

        {
          type: "html",
          name: "TITULO_CATEGORIA",
          html: "<h5>Categoría: Estratégico</h5>"
        },

        {
          type: "html",
          name: "TITULO_SUBCATEGORIA",
          html: "<h4>Subcategoría: Planeación de la Función Archivística</h4><br/>"
        },

        {
          type: "panel",
          name: "COMP_ESTRATEGICO_SUBCATEGORIAS",
          title: "Subcategorías de la Función Archivística",
          elements: [

            {
              type: "dropdown",
              name: "DIAGNOSTICO_SEL",
              title: "Producto: Diagnóstico de Archivos\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de diagnóstico integral de archivos." },
                { value: 65, text: "La entidad se encuentra elaborando el diagnóstico integral de archivos conforme a los lineamientos establecidos por el Archivo General de la Nación." },
                { value: 79, text: "La entidad cuenta con diagnóstico integral de archivos que incluye los aspectos archivísticos, de administración, conservación, infraestructura y tecnología." },
                { value: 94, text: "La entidad realiza seguimiento y control al diagnóstico integral de archivos de acuerdo con las herramientas de medición y evaluación previstas." },
                { value: 100, text: "La entidad realiza procesos de mejora continua al diagnóstico integral de archivos." }
              ]
            },
            { type: "html", visibleIf: "{DIAGNOSTICO_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{DIAGNOSTICO_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{DIAGNOSTICO_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{DIAGNOSTICO_SEL} = 94", html: "<b>Nivel:</b> Avanzado &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{DIAGNOSTICO_SEL} = 100", html: "<b>Nivel:</b> Optimizado &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "DIAGNOSTICO_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "POLITICA_GD_SEL",
              title: "Producto: Política de Gestión Documental\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de la política de gestión documental." },
                { value: 65, text: "La entidad se encuentra elaborando la política de gestión documental de acuerdo con los lineamientos establecidos por el Archivo General de la Nación." },
                { value: 79, text: "La entidad implementa la Política de Gestión Documental y en ella se evidencia el compromiso de la alta dirección frente a la gestión documental." },
                { value: 94, text: "La entidad realiza seguimiento y control a la Política de Gestión Documental de acuerdo con las herramientas de medición y evaluación previstas por la alta dirección, en articulación con otras políticas para la gestión integral de la información y la documentación." },
                { value: 100, text: "La entidad adelanta acciones de mejora continua que pueden derivarse en la actualización de la Política de Gestión Documental." }
              ]
            },
            { type: "html", visibleIf: "{POLITICA_GD_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{POLITICA_GD_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{POLITICA_GD_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{POLITICA_GD_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{POLITICA_GD_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "POLITICA_GD_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "PGD_SEL",
              title: "Producto: Programa de Gestión Documental - PGD\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece del Programa de Gestión Documental- PGD." },
                { value: 65, text: "La entidad se encuentra elaborando el programa de gestión Documental de acuerdo con los lineamientos y metodología definidos por el Archivo General de la Nación." },
                { value: 79, text: "La entidad implementa y aprueba el Programa de Gestión Documental e incorpora los lineamientos de los procesos archivísticos y programas específicos según necesidades de la entidad." },
                { value: 94, text: "La entidad realiza monitoreo y análisis permanente al Programa de Gestión Documental, con acciones de revisión y evaluación al desarrollo del PGD." },
                { value: 100, text: "La entidad realiza mejora continua al Programa de Gestión Documental, manteniendo los procesos y actividades en innovación, desarrollo y actualización." }
              ]
            },
            { type: "html", visibleIf: "{PGD_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{PGD_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{PGD_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{PGD_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{PGD_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "PGD_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "PINAR_SEL",
              title: "Producto: Plan Institucional de Archivos - PINAR\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece del Plan Institucional de Archivos - PINAR." },
                { value: 65, text: "La entidad se encuentra elaborando el instrumento archivístico PINAR de acuerdo con los lineamientos y metodología establecida por el Archivo General de la Nación." },
                { value: 79, text: "La entidad implementa el Plan Institucional de Archivos - PINAR y orienta el desarrollo de los planes, programas y proyectos de la función archivística a corto, mediano y largo plazo, además se encuentra articulado al plan de acción de la entidad." },
                { value: 94, text: "La entidad realiza seguimiento y control al Plan Institucional de Archivos, a través de instrumentos de medición, para garantizar el cumplimiento de los planes y proyectos." },
                { value: 100, text: "La entidad realiza procesos de mejora continua al Plan Institucional de Archivos - PINAR, para generar recomendaciones sobre su desarrollo y actualización." }
              ]
            },
            { type: "html", visibleIf: "{PINAR_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{PINAR_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{PINAR_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{PINAR_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{PINAR_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "PINAR_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "SIC_SEL",
              title: "Producto: Sistema Integrado de Conservación - SIC\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece del Sistema Integrado de Conservación- SIC." },
                { value: 65, text: "La entidad elabora el sistema integrado de conservación -SIC, teniendo en cuenta los lineamientos dados por el Archivo General de la Nación." },
                { value: 79, text: "La entidad implementa el sistema integrado de conservación y en él se establecen los planes de conservación de documentos físicos y el plan de preservación digital." },
                { value: 94, text: "La entidad realiza seguimiento y control al Sistema Integrado de Conservación, a través de sus instrumentos de evaluación." },
                { value: 100, text: "La entidad realiza los procesos de mejora al sistema integrado de acuerdo con los hallazgos realizados durante el proceso de control y seguimiento." }
              ]
            },
            { type: "html", visibleIf: "{SIC_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{SIC_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{SIC_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{SIC_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{SIC_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "SIC_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "PLAN_ANALISIS_SEL",
              title: "Producto: Plan de análisis de procesos y procedimientos de la producción documental\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de un plan de análisis de procesos y procedimientos de la producción documental." },
                { value: 65, text: "La entidad a través de la oficina de planeación está desarrollando el análisis a los procesos y procedimientos de la producción documental, para identificar y eliminar duplicidad de funciones y barreras que impidan la oportuna, eficiente y eficaz prestación del servicio en la gestión de la entidad." },
                { value: 79, text: "La entidad genera estrategias para dar a conocer los procesos y procedimientos de la producción documental, para hacerlos más ágiles y oportunos." },
                { value: 94, text: "La entidad realiza seguimiento y control a los procesos y procedimientos de la producción documental con el fin de medir el avance de su implementación." },
                { value: 100, text: "La entidad realiza procesos de mejora continua a los procesos y procedimientos de la producción documental, con el fin de generar mecanismos de actualización." }
              ]
            },
            { type: "html", visibleIf: "{PLAN_ANALISIS_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{PLAN_ANALISIS_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{PLAN_ANALISIS_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{PLAN_ANALISIS_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{PLAN_ANALISIS_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "PLAN_ANALISIS_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "MATRIZ_RIESGOS_SEL",
              title: "Producto: Matriz de Riesgos en Gestión Documental\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de una matriz de riesgos en gestión documental." },
                { value: 65, text: "La entidad está desarrollando y articula la matriz de riesgos en gestión documental, con la dependencia responsable de su gestión." },
                { value: 79, text: "La entidad implementa la matriz de riesgo en gestión documental, para mejorar el control de riesgos y la seguridad de la información." },
                { value: 94, text: "La entidad realiza seguimiento y control a la matriz de riesgos en gestión documental." },
                { value: 100, text: "La entidad realiza procesos de mejora continua a la matriz de riesgos en gestión documental, con el fin de garantizar su eficacia y efectividad." }
              ]
            },
            { type: "html", visibleIf: "{MATRIZ_RIESGOS_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{MATRIZ_RIESGOS_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{MATRIZ_RIESGOS_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{MATRIZ_RIESGOS_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{MATRIZ_RIESGOS_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "MATRIZ_RIESGOS_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" }

          ]
        },

        {
          type: "panel",
          name: "COMP_ESTRATEGICO_SUBCATEGORIAS_PE",
          title: "Subcategoría: Planeación Estratégica",
          elements: [

            {
              type: "dropdown",
              name: "ARTICULACION_PE_SEL",
              title: "Producto: Articulación de la Gestión Documental con el Plan Estratégico Institucional\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de lineamientos para la articulación de la gestión documental con el plan estratégico institucional." },
                { value: 65, text: "La entidad está desarrollando estrategias y planes para lograr la articulación de la gestión documental con el plan estratégico institucional." },
                { value: 79, text: "La entidad articula la gestión documental al plan estratégico institucional." },
                { value: 94, text: "La entidad realiza seguimiento y control a la implementación de los lineamientos de la función archivística en los planes y estrategias de la institución." },
                { value: 100, text: "La entidad realiza procesos de mejora continua a las estrategias y planes de la institución para garantizar que la gestión documental se encuentra articulada y garantizar su desarrollo en la institución." }
              ]
            },
            { type: "html", visibleIf: "{ARTICULACION_PE_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{ARTICULACION_PE_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{ARTICULACION_PE_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{ARTICULACION_PE_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{ARTICULACION_PE_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "ARTICULACION_PE_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "ARTICULACION_MIPG_SEL",
              title: "Producto: Articulación de la Gestión Documental con Políticas del Modelo Integrado de Planeación y Gestión - MIPG\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de la articulación de la política de gestión documental con las políticas de MIPG." },
                { value: 65, text: "La entidad está desarrollando la articulación de la política de gestión documental, con el apoyo del autodiagnóstico de MIPG." },
                { value: 79, text: "La entidad articula la política de gestión documental definida por la alta dirección en el MIPG, con otras políticas y dimensiones del modelo." },
                { value: 94, text: "La entidad realiza seguimiento y control a la articulación de la política de gestión documental, teniendo en cuenta los planes y programas de las políticas que incluye MIPG." },
                { value: 100, text: "La entidad realiza medidas de acción encaminadas a la mejora continua para alcanzar la excelencia, en la correcta articulación de la gestión documental con el MIPG." }
              ]
            },
            { type: "html", visibleIf: "{ARTICULACION_MIPG_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{ARTICULACION_MIPG_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{ARTICULACION_MIPG_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{ARTICULACION_MIPG_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{ARTICULACION_MIPG_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "ARTICULACION_MIPG_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" }

          ]
        },

        {
          type: "panel",
          name: "COMP_ESTRATEGICO_SUBCATEGORIAS_CES",
          title: "Subcategoría: Control, Evaluación y Seguimiento",
          elements: [
            {
              type: "dropdown",
              name: "INDICADORES_GESTION_SEL",
              title: "Producto: Indicadores de Gestión\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece indicadores de gestión." },
                { value: 65, text: "La entidad está elaborando los indicadores de gestión para observar el grado de avance de los planes y proyectos, que se establecieron en el PINAR." },
                { value: 79, text: "La entidad aplica los indicadores de gestión con el propósito de garantizar el cumplimiento de los planes y proyectos establecidos en el PINAR." },
                { value: 94, text: "La entidad realiza seguimiento y control a los planes de mejoramiento a través del instrumento de medición, con el fin de garantizar el cumplimiento y desarrollo de los planes y proyectos propuestos en el PINAR." },
                { value: 100, text: "La entidad realiza procesos de mejora continua al cumplimiento de los planes y proyectos establecidos en el PINAR." }
              ]
            },
            { type: "html", visibleIf: "{INDICADORES_GESTION_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{INDICADORES_GESTION_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{INDICADORES_GESTION_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{INDICADORES_GESTION_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{INDICADORES_GESTION_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "INDICADORES_GESTION_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "INFORMES_GESTION_SEL",
              title: "Producto: Informes de Gestión\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de controles para el desarrollo de la función archivística." },
                { value: 65, text: "La entidad desarrolla estrategias para que se elaboren los informes de gestión frente al cumplimiento de los indicadores de gestión que se plantearon para el cumplimiento de actividades de la función archivística." },
                { value: 79, text: "La entidad a través de la oficina de planeación, o quien haga sus veces, recepciona los informes de gestión del avance a las actividades de la función archivística." },
                { value: 94, text: "La entidad a través de la oficina de planeación o quien haga sus veces realiza seguimiento y control a los informes de gestión para verificar el estado actual del desarrollo de las actividades de la función archivística." },
                { value: 100, text: "La entidad a través de los informes de gestión genera procesos de mejora continua al desarrollo de la función archivística." }
              ]
            },
            { type: "html", visibleIf: "{INFORMES_GESTION_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{INFORMES_GESTION_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{INFORMES_GESTION_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{INFORMES_GESTION_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{INFORMES_GESTION_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "INFORMES_GESTION_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" },

            {
              type: "dropdown",
              name: "PROGRAMA_AUDITORIA_SEL",
              title: "Producto: Programa de Auditoría y Control\nSeleccione la opción que describa la situación actual de la entidad",
              isRequired: true,
              choices: [
                { value: 0, text: "La entidad carece de programas de auditoría y control." },
                { value: 65, text: "La entidad se encuentra elaborando el programa de auditoría y control." },
                { value: 79, text: "La entidad implementa el programa de auditoría y control e incluye la función archivística y los procesos de la gestión documental." },
                { value: 94, text: "La entidad realiza seguimiento y control a la función archivística a través del Programa de auditoría y control, con el fin de garantizar el cumplimiento y desarrollo de los planes y proyectos propuestos en el PINAR y PGD." },
                { value: 100, text: "La entidad realiza procesos de mejora continua, como resultado de las observaciones y hallazgos encontrados a los procesos de la gestión documental y la función archivística." }
              ]
            },
            { type: "html", visibleIf: "{PROGRAMA_AUDITORIA_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{PROGRAMA_AUDITORIA_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{PROGRAMA_AUDITORIA_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{PROGRAMA_AUDITORIA_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{PROGRAMA_AUDITORIA_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { type: "comment", name: "PROGRAMA_AUDITORIA_OBS", title: "Observaciones", isRequired: false, placeholder: "Registre las observaciones correspondientes a este producto" }

          ]
        }
      ]
    },
    {
      name: "COMP_ADM_ARCHIVOS",
      title: "ADMINISTRACIÓN DE ARCHIVOS",
      elements: [
        {
          type: "html",
          name: "TITULO_CATEGORIA_ADM",
          html: "<h5>Categoría: Administración de Archivos</h5>"
        },
        {
          type: "html",
          name: "TITULO_SUBCATEGORIA_ADM",
          html: "<h4>Subcategoría: Administración</h4><br/>"
        },
        {
          type: "dropdown",
          name: "PLANEACION_ADMIN_SEL",
          title: "Producto: Planeación de la Administración\nSeleccione la opción que describa la situación actual de la entidad",
          isRequired: true,
          choices: [
            { value: 0, text: "La entidad carece de estrategias para la administración de los archivos." },
            { value: 65, text: "La entidad se encuentra desarrollando estrategias que garanticen la administración, la regulación normativa, la adecuación de instalaciones, la conformación y estructura del equipo de trabajo y los modelos de capacitaciones al interior de la entidad." },
            { value: 79, text: "La entidad implementa las estrategias para la administración de archivos definida en su plan de archivos, logrando objetivos y metas en menor tiempo (evalúa, flexibilidad, coordinación, continuidad, proactividad dominio conceptual del grupo de trabajo)." },
            { value: 94, text: "La entidad realiza seguimiento y control a la implementación de las estrategias gerenciales para la administración de los fondos documentales y adelanta cambios estratégicos." },
            { value: 100, text: "La entidad desarrolla estrategias de innovación, empoderamiento, autogestión, con el fin de cumplir de manera más eficaz la política archivística y administración de los fondos documentales." }
          ]
        },
        { type: "html", visibleIf: "{PLANEACION_ADMIN_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
        { type: "html", visibleIf: "{PLANEACION_ADMIN_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
        { type: "html", visibleIf: "{PLANEACION_ADMIN_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
        { type: "html", visibleIf: "{PLANEACION_ADMIN_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
        { type: "html", visibleIf: "{PLANEACION_ADMIN_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
        {
          type: "comment",
          name: "PLANEACION_ADMIN_OBS",
          title: "Observaciones",
          isRequired: false,
          placeholder: "Registre las observaciones correspondientes a este producto"
        },
        {
          type: "panel",
          name: "ADM_RECURSOS_FISICOS",
          title: "Subcategoría: Recursos Físicos",
          elements: [
            {
              type: "dropdown",
              name: "INFRAESTRUCTURA_LOCATIVA_SEL",
              isRequired: true,
              title: "Producto: Infraestructura Locativa\nSeleccione la opción que describa la situación actual de la entidad",
              choices: [
                { value: 0, text: "La entidad carece de una infraestructura locativa adecuada para la custodia de sus archivos." },
                { value: 65, text: "La entidad está desarrollando acciones para la adecuación de las instalaciones o espacios destinados para custodia de documentos en sus diferentes formatos, en concordancia con la normatividad existente." },
                { value: 79, text: "La entidad adecua la infraestructura física, para asegurar la conservación y preservación de sus archivos." },
                { value: 94, text: "La entidad realiza seguimiento y control a la adecuación de la infraestructura, con el fin de cumplir con las especificaciones técnicas y normativas." },
                { value: 100, text: "La entidad conforme a las mediciones y monitoreo aplicado adelanta acciones de mejora e innova con el fin de garantizar la adecuada conservación y preservación del fondo documental." }
              ]
            },
            { type: "html", visibleIf: "{INFRAESTRUCTURA_LOCATIVA_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{INFRAESTRUCTURA_LOCATIVA_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{INFRAESTRUCTURA_LOCATIVA_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{INFRAESTRUCTURA_LOCATIVA_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{INFRAESTRUCTURA_LOCATIVA_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            {
              type: "comment",
              name: "INFRAESTRUCTURA_LOCATIVA_OBS",
              title: "Observaciones",
              placeholder: "Registre las observaciones correspondientes a este producto"
            }
          ]
        },
        {
          type: "panel",
          name: "ADM_TALENTO_HUMANO",
          title: "Subcategoría: Talento Humano",
          elements: [
            {
              type: "dropdown",
              name: "GESTION_HUMANA_SEL",
              isRequired: true,
              title: "Producto: Gestión Humana\nSeleccione la opción que describa la situación actual de la entidad",
              choices: [
                { value: 0, text: "La entidad carece de personal idóneo para cumplir las actividades de la función archivística y administración de archivos." },
                { value: 65, text: "La entidad está desarrollando estrategias para definir perfiles y competencias laborales para el personal relacionado con el cumplimiento de la función archivística y administración de archivos." },
                { value: 79, text: "La entidad cuenta con personal idóneo, que facilita la implementación de la política archivística y la aplicación de los instrumentos archivísticos." },
                { value: 94, text: "La entidad realiza seguimiento y control al personal que desarrolla las actividades de la función archivística y administración de archivos." },
                { value: 100, text: "La entidad realiza acciones de mejoramiento continuo para promover el liderazgo, trabajo en equipo y autonomía." }
              ]
            },
            { type: "html", visibleIf: "{GESTION_HUMANA_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{GESTION_HUMANA_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{GESTION_HUMANA_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{GESTION_HUMANA_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{GESTION_HUMANA_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            {
              type: "comment",
              name: "GESTION_HUMANA_OBS",
              title: "Observaciones",
              placeholder: "Registre las observaciones correspondientes a este producto"
            },

            {
              type: "dropdown",
              name: "CAPACITACION_GD_SEL",
              isRequired: true,
              title: "Producto: Capacitación en Gestión Documental\nSeleccione la opción que describa la situación actual de la entidad",
              choices: [
                { value: 0, text: "La entidad carece de la inclusión de temas de gestión documental en el Plan Institucional de Capacitación." },
                { value: 65, text: "La entidad articula con el Plan Institucional de Capacitación los temas priorizados por el área de gestión documental." },
                { value: 79, text: "La entidad implementa el plan de capacitación con los temas propuestos por el área de gestión documental." },
                { value: 94, text: "La entidad realiza seguimiento y control al Plan Institucional de Capacitación." },
                { value: 100, text: "La entidad realiza procesos de mejora continua al Plan Institucional de Capacitación." }
              ]
            },
            { type: "html", visibleIf: "{CAPACITACION_GD_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{CAPACITACION_GD_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{CAPACITACION_GD_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{CAPACITACION_GD_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{CAPACITACION_GD_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            {
              type: "comment",
              name: "CAPACITACION_GD_OBS",
              title: "Observaciones",
              placeholder: "Registre las observaciones correspondientes a este producto"
            }
          ]
        },
        {
          type: "panel",
          name: "ADM_SST",
          title: "Subcategoría: Gestión en Seguridad y Salud Ocupacional",
          elements: [
            {
              type: "dropdown",
              name: "CONDICIONES_TRABAJO_SEL",
              isRequired: true,
              title: "Producto: Aseguramiento de las Condiciones de Trabajo\nSeleccione la opción que describa la situación actual de la entidad",
              choices: [
                { value: 0, text: "La entidad carece de lineamientos para el aseguramiento de las condiciones de trabajo para el área de Gestión Documental." },
                { value: 65, text: "La entidad desarrolla un protocolo de identificación de riesgos laborales y se articula con el Plan de Trabajo Anual en Seguridad y Salud en el Trabajo." },
                { value: 79, text: "La entidad implementa su sistema de gestión de seguridad y salud en el trabajo garantizando condiciones laborales adecuadas." },
                { value: 94, text: "La entidad realiza seguimiento y control a su sistema de gestión de seguridad y salud en el trabajo." },
                { value: 100, text: "La entidad realiza ajustes y acciones de mejora a su sistema de seguridad y salud en el trabajo." }
              ]
            },
            { type: "html", visibleIf: "{CONDICIONES_TRABAJO_SEL} = 0", html: "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { type: "html", visibleIf: "{CONDICIONES_TRABAJO_SEL} = 65", html: "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { type: "html", visibleIf: "{CONDICIONES_TRABAJO_SEL} = 79", html: "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { type: "html", visibleIf: "{CONDICIONES_TRABAJO_SEL} = 94", html: "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { type: "html", visibleIf: "{CONDICIONES_TRABAJO_SEL} = 100", html: "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            {
              type: "comment",
              name: "CONDICIONES_TRABAJO_OBS",
              title: "Observaciones",
              placeholder: "Registre las observaciones correspondientes a este producto"
            }
          ]
        }
      ]
    },
    {
      name: "COMP_PRO_GE_DO",
      title: "PROCESOS DE LA GESTIÓN DOCUMENTAL",
      elements: [
        {
          type: "html",
          name: "TITULO_CATEGORIA_ADM",
          html: "<h5>Categoría: Procesos de la Gestión Documental</h5>"
        },
        {
          "type": "panel",
          "name": "PLANEACION_TECNICA",
          "title": "Subcategoría: Planeación (Técnica)",
          "elements": [
            {
              "type": "dropdown",
              "name": "DISENO_CREACION_DOC_SEL",
              "isRequired": true,
              "title": "Producto: Diseño y Creación de Documentos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de procedimientos para el diseño y creación de documentos en atención a los requisitos legales, funcionales propios y la incorporación de aspectos de autenticidad e identificación acorde a los instrumentos archivísticos y de transparencia." },
                { "value": 65, "text": "La entidad se encuentra desarrollando los criterios o aspectos previstos en el proceso de planeación del Programa de Gestión Documental, observa el mapa de procesos y flujos documentales para la posterior producción de los documentos en sus diferentes medios." },
                { "value": 79, "text": "La entidad implementa lineamientos previstos en el Programa de Gestión Documental, entendidos como la integración de los instrumentos CCD, TRD, para la identificación de las áreas competentes, el SIC para vincular las acciones de conservación y preservación digital. Las Tablas de control de acceso e índice de información clasificada y reservada para garantizar aspectos de reserva y clasificación en su acceso y consulta. Finalmente, a partir del ingreso de los metadatos propiciar su interacción con el SGDEA." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a los lineamientos para el diseño y creación de documentos con el fin de validar la aplicación por parte de las dependencias, así mismo, observar que los documentos que vayan a ser producidos se encuentren acordes con los requisitos mínimos legales, funcionales y administrativos." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a los lineamientos para el diseño y creación de documentos a partir de las validaciones en las dependencias, incorporando ajustes en los casos necesarios bajo la garantía del cumplimiento del contexto administrativo, legal, funcional y técnico y en especial, para la optimización de la gestión de la información y la documentación" }
              ]
            },
            { "type": "html", "visibleIf": "{DISENO_CREACION_DOC_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{DISENO_CREACION_DOC_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{DISENO_CREACION_DOC_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{DISENO_CREACION_DOC_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{DISENO_CREACION_DOC_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "DISENO_CREACION_DOC_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "DOC_ESPECIALES_SEL",
              "isRequired": true,
              "title": "Producto: Documentos Especiales\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de medidas que orienten la producción de los documentos en medios especiales, garantizando aspectos legales, funcionales y administrativos, así como acciones particulares para su conservación o preservación de acuerdo con el medio empleado." },
                { "value": 65, "text": "La entidad define en articulación con los instrumentos archivísticos, los medios habilitados para la producción de documentos especiales, garantizando aspectos legales, funcionales y administrativos, así como acciones particulares para su conservación o preservación." },
                { "value": 79, "text": "La entidad implementa la identificación de soportes documentales especiales mediante la TRD, TVD e inventarios documentales." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a sus documentos especiales y realiza procesos de descripción de acuerdo con normas internacionales y los reproduce en nuevas tecnologías." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a sus procesos de identificación, producción de documentos especiales y descripción, con el fin de generar mecanismos de tratamiento específico para su conservación." }
              ]
            },
            { "type": "html", "visibleIf": "{DOC_ESPECIALES_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{DOC_ESPECIALES_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{DOC_ESPECIALES_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{DOC_ESPECIALES_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{DOC_ESPECIALES_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "DOC_ESPECIALES_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "CUADRO_CLASIFICACION_SEL",
              "isRequired": true,
              "title": "Producto: Cuadro de Clasificación Documental\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece del Cuadro de Clasificación Documental." },
                { "value": 65, "text": "La entidad se encuentra elaborando el Cuadro de Clasificación Documental - CCD, de acuerdo con los lineamientos establecidos por el Archivo General de la Nación." },
                { "value": 79, "text": "La entidad implementa el Cuadro de Clasificación Documental - CCD, teniendo en cuenta el esquema orgánico funcional, que refleja las secciones, subsecciones, series y subseries documentales; basadas en las funciones, actividades, procesos, procedimientos." },
                { "value": 94, "text": "La entidad realiza seguimiento y control al Cuadro de Clasificación Documental - CCD, de acuerdo con los instrumentos de medición establecidos por la entidad y conforme a lo establecido en el marco normativo." },
                { "value": 100, "text": "La entidad realiza evaluación y monitoreo al Cuadro de Clasificación Documental - CCD, para generar recomendaciones sobre su actualización y orientar las acciones de mejoramiento continuo." }
              ]
            },
            { "type": "html", "visibleIf": "{CUADRO_CLASIFICACION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{CUADRO_CLASIFICACION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{CUADRO_CLASIFICACION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{CUADRO_CLASIFICACION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{CUADRO_CLASIFICACION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "CUADRO_CLASIFICACION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "TABLAS_RETENCION_SEL",
              "isRequired": true,
              "title": "Producto: Tablas de Retención Documental (TRD)\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de Tablas de Retención Documental." },
                { "value": 65, "text": "La entidad realiza el proceso de elaboración, aprobación, evaluación y convalidación de las TRD de acuerdo con las etapas establecidas en la normatividad aplicable." },
                { "value": 79, "text": "La entidad convalida, registra y adopta en cada una de las dependencias las TRD donde se evidencia que las dependencias inician el proceso de creación y conformación de expedientes para cada una de las series y subseries documentales descritas en ella." },
                { "value": 94, "text": "La entidad realiza seguimiento y control al proceso de implementación y disposiciones finales de las TRD y controla las series documentales mediante gestor documental." },
                { "value": 100, "text": "La entidad realiza mejora mediante el proceso de actualización de las TRD de acuerdo con los momentos establecidos en la normatividad archivística ya que esto le permite mantener la organización documental." }
              ]
            },
            { "type": "html", "visibleIf": "{TABLAS_RETENCION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{TABLAS_RETENCION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{TABLAS_RETENCION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{TABLAS_RETENCION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{TABLAS_RETENCION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "TABLAS_RETENCION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "TABLAS_VALORACION_SEL",
              "isRequired": true,
              "title": "Producto: Tablas de Valoración Documental (TVD)\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad cuenta con fondo documental acumulado y carece de TVD." },
                { "value": 65, "text": "La entidad cuenta con un diagnóstico integral de archivo y plan archivístico integral para la elaboración de la TVD." },
                { "value": 79, "text": "La entidad elabora, aprueba, convalida y registra las TVD." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a la aplicación de las TVD, realiza proceso de digitalización de las series a las que les haya dejado establecido dicho proceso especialmente a las de conservación total." },
                { "value": 100, "text": "La entidad realiza procesos de transferencia secundarias y pone a disposición de la investigación sus acervos documentales históricos e innova con procesos culturales." }
              ]
            },
            { "type": "html", "visibleIf": "{TABLAS_VALORACION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{TABLAS_VALORACION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{TABLAS_VALORACION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{TABLAS_VALORACION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{TABLAS_VALORACION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "TABLAS_VALORACION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "PRODUCCION",
          "title": "Subcategoría: Producción",
          "elements": [
            {
              "type": "dropdown",
              "name": "MEDIOS_TECNICAS_PRODUCCION_SEL",
              "isRequired": true,
              "title": "Producto: Medios y Técnicas de Producción\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un manual de estilo de comunicaciones escritas y un protocolo para las condiciones diplomáticas del documento (características internas y externas del documento)." },
                { "value": 65, "text": "La entidad desarrolla un manual de estilo que tiene en cuenta las características internas y externas de los documentos y se rigen por las normas que regulan la producción de documentos que garanticen la conservación y preservación de la información contenida en ellos a lo largo del tiempo." },
                { "value": 79, "text": "La entidad implementa el manual de estilo donde se tiene en cuenta el tipo de papel, tintas y medios de reproducción que garantizan, en condiciones adecuadas, la conservación de la información descrita en los documentos, adicionalmente se establecen los requisitos mínimos para los documentos en soporte electrónico que mantenga su autenticidad, integridad, fiabilidad y disponibilidad a lo largo del tiempo." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a los medios y técnicas de producción para todos los soportes documentales, con el fin de establecer falencias a lo establecido en el manual de estilo y aplicar los correctivos necesarios." },
                { "value": 100, "text": "La entidad realiza procesos de mejora al manual de estilo de acuerdo con el surgimiento de nuevas necesidades detectadas durante el seguimiento y la autorregulación de las diferentes dependencias." }
              ]
            },
            { "type": "html", "visibleIf": "{MEDIOS_TECNICAS_PRODUCCION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{MEDIOS_TECNICAS_PRODUCCION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{MEDIOS_TECNICAS_PRODUCCION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{MEDIOS_TECNICAS_PRODUCCION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{MEDIOS_TECNICAS_PRODUCCION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "MEDIOS_TECNICAS_PRODUCCION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "REPROGRAFIA_SEL",
              "isRequired": true,
              "title": "Producto: Reprografía\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un programa de reprografía de los documentos que garantice su conservación y consulta." },
                { "value": 65, "text": "La entidad da inicio al proceso de elaboración de un programa de reprografía previamente aprobado y avalado por la instancia correspondiente que prioriza y garantiza que la documentación cuenta con un respaldo que permite su recuperación a lo largo del tiempo mediante procesos adecuados de preservación." },
                { "value": 79, "text": "La entidad implementa el programa de reprografía el cual contiene las condiciones tecnológicas y técnicas mínimas de reproducción, que garanticen que se realiza con un fin específico y que este proceso debe ser acorde con lo establecido en los instrumentos archivísticos." },
                { "value": 94, "text": "La entidad realiza seguimiento y control al programa de reprografía con el fin de poder establecer las acciones que permitan mantener actualizado y de acuerdo con las necesidades reales para cada una de las dependencias." },
                { "value": 100, "text": "La entidad ha ejecutado proyectos de reproducción de documentos orientados a garantizar la seguridad de la información manteniendo los valores probatorios de los documentos originales en físico." }
              ]
            },
            { "type": "html", "visibleIf": "{REPROGRAFIA_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{REPROGRAFIA_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{REPROGRAFIA_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{REPROGRAFIA_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{REPROGRAFIA_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "REPROGRAFIA_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "GESTION_TRAMITE",
          "title": "Subcategoría: Gestión y Trámite",
          "elements": [
            {
              "type": "dropdown",
              "name": "REGISTRO_DISTRIBUCION_SEL",
              "isRequired": true,
              "title": "Producto: Registro y Distribución de Documentos (trámite)\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un procedimiento que tenga control de las comunicaciones oficiales enviadas y recibidas además de no contar con un responsable." },
                { "value": 65, "text": "La entidad desarrolla manual de procedimientos que establezca el control, seguimiento y consulta de las comunicaciones oficiales enviadas y recibidas y establece los diferentes canales para ello, además de que se cuente con un responsable de la oficina de correspondencia." },
                { "value": 79, "text": "La entidad implementa el manual de procedimientos y cuenta con una herramienta física o tecnológica que controla las comunicaciones oficiales enviadas y recibidas y permite tener seguimiento sobre los tiempos de respuesta del responsable del trámite y establece canales de consulta." },
                { "value": 94, "text": "La entidad cuenta con un gestor documental que controla todas las comunicaciones oficiales recibidas por todos los canales establecidos y notifica electrónicamente a los usuarios internos y externos además controla los tiempos del trámite generando alertas." },
                { "value": 100, "text": "La entidad cuenta con un SGDEA que controla toda la distribución documental y el trámite." }
              ]
            },
            { "type": "html", "visibleIf": "{REGISTRO_DISTRIBUCION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{REGISTRO_DISTRIBUCION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{REGISTRO_DISTRIBUCION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{REGISTRO_DISTRIBUCION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{REGISTRO_DISTRIBUCION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "REGISTRO_DISTRIBUCION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "ORGANIZACION",
          "title": "Subcategoría: Organización",
          "elements": [
            {
              "type": "dropdown",
              "name": "DESCRIPCION_DOCUMENTAL_SEL",
              "isRequired": true,
              "title": "Producto: Descripción Documental\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un procedimiento de descripción documental." },
                { "value": 65, "text": "La entidad está desarrollando el procedimiento de descripción documental que incluye la estandarización de formatos para iniciar sistemas de descripción como inventarios, hoja de control desde las oficinas de gestión." },
                { "value": 79, "text": "La entidad implementa el procedimiento de descripción documental que facilita el desarrollo de instrumentos de descripción como censos, guía, manuales." },
                { "value": 94, "text": "La entidad realiza seguimiento al procedimiento de descripción documental e incluye herramientas tecnológicas que permiten realizar la descripción a los productores." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a los procedimientos de descripción documental orientados a disponer la consulta de la documentación en línea." }
              ]
            },
            { "type": "html", "visibleIf": "{DESCRIPCION_DOCUMENTAL_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{DESCRIPCION_DOCUMENTAL_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{DESCRIPCION_DOCUMENTAL_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{DESCRIPCION_DOCUMENTAL_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{DESCRIPCION_DOCUMENTAL_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "DESCRIPCION_DOCUMENTAL_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "TRANSFERENCIAS",
          "title": "Subcategoría: Transferencias",
          "elements": [
            {
              "type": "dropdown",
              "name": "PLAN_TRANSFERENCIAS_SEL",
              "isRequired": true,
              "title": "Producto: Plan de Transferencias Documentales\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de plan y cronograma de transferencias documentales tanto físicas como electrónicas." },
                { "value": 65, "text": "La entidad inicia la elaboración de un Plan y cronograma de transferencias documentales, primarias y secundarias, donde se tienen en cuenta los tiempos de retención, los diferentes soportes para cada una de las series y subseries establecidos en los instrumentos archivísticos que se encuentran debidamente convalidados." },
                { "value": 79, "text": "La entidad implementa el plan y cronograma de transferencias documentales lo articula con otros planes como el de capacitación y documentos especiales entre otros y garantiza las transferencias físicas y electrónicas teniendo en cuenta la política de metadatos." },
                { "value": 94, "text": "La entidad realiza control y seguimiento a los cronogramas de transferencias documentales con el fin de identificar que se esté realizando en los tiempos y metodologías definidas en el plan, igualmente garantiza que los documentos producidos o reproducidos en herramientas tecnológicas cuenten con la infraestructura suficiente que garantice los procesos de transferencias primarias o secundarias. La entidad identifica los requisitos necesarios que debe cumplir para realizar las trasferencias electrónicas secundarias a la entidad territorial o nacional según corresponda." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua al plan y cronograma de transferencias documentales donde se garanticen los recursos y espacios suficientes para su constante crecimiento. y realiza proceso de interoperabilidad con otras instituciones de archivo y culturales. La entidad realiza transferencias electrónicas secundarias, en cumplimiento de los requisitos del archivo histórico que recibe." }
              ]
            },
            { "type": "html", "visibleIf": "{PLAN_TRANSFERENCIAS_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{PLAN_TRANSFERENCIAS_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{PLAN_TRANSFERENCIAS_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{PLAN_TRANSFERENCIAS_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{PLAN_TRANSFERENCIAS_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "PLAN_TRANSFERENCIAS_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "DISPOSICION_DOCUMENTOS",
          "title": "Subcategoría: Disposición de Documentos",
          "elements": [
            {
              "type": "dropdown",
              "name": "ELIMINACION_DOCUMENTOS_SEL",
              "isRequired": true,
              "title": "Producto: Eliminación de Documentos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un proceso de eliminación de los diferentes soportes documentales ya sea destrucción física o electrónica." },
                { "value": 65, "text": "La entidad desarrolla el proceso de eliminación documental o destrucción física o electrónica el cual debe contar con metodologías y criterios para tener en cuenta durante este proceso." },
                { "value": 79, "text": "La entidad implementa el proceso de eliminación documental de los diferentes soportes inmersos en las series y subseries teniendo en cuenta la eliminación de información personal, reservada y las disposiciones descritas en los instrumentos archivísticos que previamente fueron convalidados para no incurrir en procesos de destrucción del patrimonio documental y da cumplimiento a la metodología descrita en la norma." },
                { "value": 94, "text": "La entidad realiza seguimiento y control al proceso de eliminación documental y realiza los ajustes necesarios de acuerdo con la normatividad que se vaya a ir generando, además la herramienta tecnológica facilitara la eliminación de los soportes producidos en ese medio." },
                { "value": 100, "text": "La entidad realiza mejoras al procedimiento de eliminación documental teniendo en cuenta las actualizaciones de los instrumentos archivísticos que rigen este proceso." }
              ]
            },
            { "type": "html", "visibleIf": "{ELIMINACION_DOCUMENTOS_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{ELIMINACION_DOCUMENTOS_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{ELIMINACION_DOCUMENTOS_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{ELIMINACION_DOCUMENTOS_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{ELIMINACION_DOCUMENTOS_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "ELIMINACION_DOCUMENTOS_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "PLANEACION_TECNICA",
          "title": "Subcategoría: Planeación (Técnica)",
          "elements": [
            {
              "type": "dropdown",
              "name": "PLAN_CONSERVACION_SEL",
              "isRequired": true,
              "title": "Producto: Plan de Conservación Documental\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un plan de conservación documental." },
                { "value": 65, "text": "La entidad inicia el proceso de elaboración del plan de conservación documental, respondiendo a lo establecido la Política de Gestión documental respecto al tema. Sin embargo, no desarrolla el componente de preservación digital." },
                { "value": 79, "text": "La entidad diseña y formula el Sistema Integrado de Conservación, que tiene dos componentes: Plan Conservación Documental para documentos físicos y analógicos y Plan de Preservación Digital a Largo Plazo para documentos electrónicos." },
                { "value": 94, "text": "La entidad implementa y realiza seguimiento y control al Plan Conservación Documental y Preservación Digital a Largo Plazo, descrito en su sistema integrado de conservación." },
                { "value": 100, "text": "La entidad realiza procesos de mejora al Sistema Integrado de Conservación de acuerdo con los hallazgos realizados durante el proceso de control y seguimiento." }
              ]
            },
            { "type": "html", "visibleIf": "{PLAN_CONSERVACION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{PLAN_CONSERVACION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{PLAN_CONSERVACION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{PLAN_CONSERVACION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{PLAN_CONSERVACION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "PLAN_CONSERVACION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "PLAN_PRESERVACION_DIGITAL_SEL",
              "isRequired": true,
              "title": "Producto: Plan de Preservación Digital\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad carece del Plan de preservación digital a largo plazo." },
                { "value": 65, "text": "La Entidad se encuentra estructurando y documentando actividades para la construcción del Plan de preservación digital a largo plazo siguiendo la normativa de AGN y lo establecido en la Política de Gestión Documental." },
                { "value": 79, "text": "La entidad diseña y formula el plan de preservación digital a largo plazo, que incorpora programas, estrategias, procesos y procedimientos para asegurar la preservación a largo plazo de los documentos electrónicos." },
                { "value": 94, "text": "La Entidad implementa y realiza seguimiento y control de las estrategias de preservación con el fin de garantizar que se encuentran vigentes de acuerdo con los cambios tecnológicos, revisa las asignaciones de roles y responsabilidades." },
                { "value": 100, "text": "La Entidad asegura la actualización del plan manteniendo su vigencia de acuerdo con los cambios tecnológicos y los riesgos de obsolescencia que surjan." }
              ]
            },
            { "type": "html", "visibleIf": "{PLAN_PRESERVACION_DIGITAL_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{PLAN_PRESERVACION_DIGITAL_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{PLAN_PRESERVACION_DIGITAL_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{PLAN_PRESERVACION_DIGITAL_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{PLAN_PRESERVACION_DIGITAL_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "PLAN_PRESERVACION_DIGITAL_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "VALORACION",
          "title": "Subcategoría: Valoración",
          "elements": [
            {
              "type": "dropdown",
              "name": "VALORES_PRIMARIOS_SECUNDARIOS_SEL",
              "isRequired": true,
              "title": "Producto: Valores Primarios y Secundarios\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de un proceso de valoración Documental que esté integrado con las TRD y TVD." },
                { "value": 65, "text": "La entidad elabora el proceso de valoración documental teniendo en cuenta los valores primarios y secundarios para todas las series y subseries documentales en cualquier soporte identificadas en los instrumentos archivísticos." },
                { "value": 79, "text": "La entidad implementa el proceso de valoración documental y garantiza el análisis de las características administrativas, jurídicas, fiscales, contables, informativas e históricas de los documentos que forman parte de una serie o subserie documental adicionalmente tiene en cuenta e identifica los documentos vitales." },
                { "value": 94, "text": "La entidad realiza seguimiento y control al proceso de valoración documental con el fin de establecer el cumplimiento de los valores documentales." },
                { "value": 100, "text": "La entidad realiza mejora continua a los procesos de valoración mediante la revisión constante de la normatividad asociada a cada serie o subserie, los cambios y comportamientos culturales ya que estos pueden influir en la valoración documental, así como la actualización de los instrumentos archivísticos." }
              ]
            },
            { "type": "html", "visibleIf": "{VALORES_PRIMARIOS_SECUNDARIOS_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{VALORES_PRIMARIOS_SECUNDARIOS_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{VALORES_PRIMARIOS_SECUNDARIOS_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{VALORES_PRIMARIOS_SECUNDARIOS_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{VALORES_PRIMARIOS_SECUNDARIOS_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "VALORES_PRIMARIOS_SECUNDARIOS_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        }
      ]
    },
    {
      name: "COMP_TEC_GICO",
      title: "TECNOLÓGICO",
      elements: [
        {
          "type": "panel",
          "name": "ARTICULACION_DOC_ELECTRONICOS",
          "title": "Subcategoría: Articulación de la Gestión de Documentos Electrónicos",
          "elements": [
            {
              "type": "dropdown",
              "name": "GESTION_DOC_PROC_SEL",
              "isRequired": true,
              "title": "Producto: Gestión de documentos electrónicos en los procesos, procedimientos, trámites o servicios internos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad no ha automatizado procesos o no ha integrado la administración de documentos electrónicos a procesos, procedimientos, trámites o servicios." },
                { "value": 65, "text": "La Entidad se encuentra automatizando procesos, procedimientos, trámites o servicios, e involucra los siguientes aspectos:\n- Identifica los documentos electrónicos (internos y externos) que hacen parte del flujo documental\n- Define los elementos básicos de los documentos electrónicos (tipo de documentos, formatos electrónicos, estructura de metadatos, etc.)." },
                { "value": 79, "text": "Para los procesos, procedimientos, trámites o servicios automatizados, la Entidad involucra los siguientes aspectos:\n- Los documentos electrónicos cuentan con esquemas de validación y metadatos\n- Los documentos electrónicos hacen parte de un expediente electrónico\n- Los expedientes electrónicos cuentan con el índice electrónico y metadatos" },
                { "value": 94, "text": "Los procesos, procedimientos, trámites o servicios automatizados se encuentran articulados con el SGDEA de la Entidad" },
                { "value": 100, "text": "La Entidad evalúa periódicamente la articulación de los procesos, procedimientos, trámites o servicios con el SGDEA. Cada vez que se genera un nuevo procedimiento y/o trámite electrónico, este se integra con el SGDEA." }
              ]
            },
            { "type": "html", "visibleIf": "{GESTION_DOC_PROC_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{GESTION_DOC_PROC_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{GESTION_DOC_PROC_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{GESTION_DOC_PROC_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{GESTION_DOC_PROC_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "GESTION_DOC_PROC_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "GESTION_DOC_CANAL_SEL",
              "isRequired": true,
              "title": "Producto: Gestión de documentos electrónicos en los canales virtuales de atención externos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad no ha implementado canales virtuales de atención externa o no ha integrado lineamientos de gestión documental electrónica para el control y almacenamiento de los documentos electrónicos que se gestionan a través de ellos." },
                { "value": 65, "text": "La Entidad se encuentra en proceso de desarrollo de canales virtuales (ventanilla única, portales transversales y sede electrónica) e involucra los siguientes aspectos:\n- Identifica los documentos electrónicos (internos y externos) que se tramitan a través de estos canales.\n- Define los elementos básicos de los documentos electrónicos (tipo de documentos, formatos electrónicos) que se tramitan a través de estos canales." },
                { "value": 79, "text": "La Entidad cuenta con canales virtuales (ventanilla única, portales transversales y sede electrónica) e involucra los siguientes aspectos:\n- Los documentos electrónicos cuentan con esquemas de validación y metadatos\n- Los documentos electrónicos hacen parte de un expediente electrónico\n- Los expedientes electrónicos cuentan con el índice electrónico y metadatos\n- Definición de formatos y formularios electrónicos" },
                { "value": 94, "text": "Los canales virtuales (ventanilla única, portales transversales y sede electrónica) se encuentran articulados con el SGDEA de la entidad." },
                { "value": 100, "text": "La Entidad evalúa periódicamente la articulación de los canales virtuales con el SGDEA." }
              ]
            },
            { "type": "html", "visibleIf": "{GESTION_DOC_CANAL_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{GESTION_DOC_CANAL_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{GESTION_DOC_CANAL_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{GESTION_DOC_CANAL_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{GESTION_DOC_CANAL_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "GESTION_DOC_CANAL_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "SISTEMA_INFO_CORP_SEL",
              "isRequired": true,
              "title": "Producto: Sistemas de información corporativos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad no ha articulado los sistemas de gestión empresarial, las plataformas de gestión de contenidos o sistemas de información transaccional u operacional con los requerimientos de gestión documental existentes." },
                { "value": 65, "text": "La entidad incorpora lineamientos básicos de los sistemas de gestión empresarial, las plataformas de gestión de contenidos o sistemas de información transaccional u operacional, los cuales involucran:\n- Identificación y tratamiento de la información estructurada y la no estructurada\n- Normalización de formularios electrónicos\n- Identificación de metadatos aplicables a la Gestión Documental\n- Clasificación documental\n- Controles de acceso a la información" },
                { "value": 79, "text": "La entidad incorpora lineamientos básicos de gestión documental electrónica para más del 51% de los sistemas de gestión empresarial, las plataformas de gestión de contenidos o sistemas de información transaccional u operacional, los cuales involucran:\n- Identificación y tratamiento de la información estructurada y la no estructurada\n- Normalización de formularios electrónicos\n- Identificación de metadatos aplicables a la Gestión Documental\n- Clasificación documental\n- Controles de acceso a la información" },
                { "value": 94, "text": "La entidad incorpora lineamientos avanzados de gestión documental electrónica menor o igual al 50% de los sistemas de gestión empresarial, las plataformas de gestión de contenidos o sistemas de información transaccional u operacional, los cuales involucran:\n- Incorporación de firmas digitales\n- Conformación de expedientes electrónicos\n- Articulación con el SGDEA\n- Esquemas de metadatos" },
                { "value": 100, "text": "La entidad incorpora lineamientos avanzados de gestión documental electrónica para más del 51% de los sistemas de gestión empresarial, las plataformas de gestión de contenidos o sistemas de información transaccional u operacional, los cuales involucran:\n- Incorporación de firmas digitales\n- Conformación de expedientes electrónicos\n- Articulación con el SGDEA\n- Esquemas de metadatos" }
              ]
            },
            { "type": "html", "visibleIf": "{SISTEMA_INFO_CORP_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{SISTEMA_INFO_CORP_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{SISTEMA_INFO_CORP_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{SISTEMA_INFO_CORP_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{SISTEMA_INFO_CORP_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "SISTEMA_INFO_CORP_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "TECNOLOGIAS_DOC_ELECTRONICOS",
          "title": "Subcategoría: Tecnologías para la Gestión de Documentos Electrónicos",
          "elements": [
            {
              "type": "dropdown",
              "name": "MODELO_REQ_SEL",
              "isRequired": true,
              "title": "Producto: Modelo de Requisitos para la gestión de documentos electrónicos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad carece de un documento de Modelo de requisitos para la gestión de documentos electrónicos." },
                { "value": 65, "text": "La Entidad se encuentra en elaboración del Modelo de requisitos para la gestión de documentos electrónicos conforme a las políticas, procedimientos y prácticas de gestión de documentos electrónicos atendiendo la normativa y las necesidades propias de la Entidad." },
                { "value": 79, "text": "La Entidad cuenta con la lista de requerimientos funcionales y no funcionales a través de un modelo de requisitos que exprese las necesidades de cada uno de los flujos de procesos y procedimientos que se van a implementar de forma electrónica a través de la implementación o la integración con el SGDEA." },
                { "value": 94, "text": "La Entidad implementa y realiza seguimiento y control del Modelo de Requisitos para la gestión de documentos electrónicos revisando que las funcionalidades actuales respondan a las necesidades específicas de la entidad." },
                { "value": 100, "text": "La Entidad revisa el Modelo de requisitos y genera actualizaciones con el fin de mantener la autenticidad, fiabilidad, integridad y la accesibilidad a largo plazo de los documentos, el contexto de producción de estos y de los metadatos necesarios asociados a éstos, evalúa nuevas funcionalidades que surgen a través de la evolución de los flujos, procesos, procedimientos y requerimientos de innovación tecnológica." }
              ]
            },
            { "type": "html", "visibleIf": "{MODELO_REQ_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{MODELO_REQ_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{MODELO_REQ_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{MODELO_REQ_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{MODELO_REQ_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "MODELO_REQ_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "SISTEMA_GDEA_SEL",
              "isRequired": true,
              "title": "Producto: Sistema de Gestión de Documentos Electrónicos de Archivo\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad carece de un Sistema de Gestión de documentos electrónicos de archivo que refleje la implementación del modelo de requisitos." },
                { "value": 65, "text": "La Entidad se encuentra en proceso de implementación de un Sistema de Gestión de documentos electrónicos de archivo de acuerdo con el análisis organizacional, normativo, tecnológico y documental y el modelo de requisitos." },
                { "value": 79, "text": "La Entidad cuenta con un sistema de gestión de documentos electrónicos de archivo para la administración, trámite y preservación de sus expedientes y documentos electrónicos que responde a las necesidades de la Entidad y sus instrumentos archivísticos." },
                { "value": 94, "text": "La Entidad realiza seguimiento y control del funcionamiento del Sistema, recibe documentos de otros sistemas de información, canales virtuales y otros repositorios documentales internos de la entidad." },
                { "value": 100, "text": "La Entidad actualiza el Sistema de gestión de documentos electrónicos de archivo, se integra con otros sistemas de información externos a través de servicios de interoperabilidad e incorpora procesos de mejora continua con base a los indicadores obtenidos que permitan generar resultados con optimización de los recursos empleados." }
              ]
            },
            { "type": "html", "visibleIf": "{SISTEMA_GDEA_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{SISTEMA_GDEA_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{SISTEMA_GDEA_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{SISTEMA_GDEA_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{SISTEMA_GDEA_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "SISTEMA_GDEA_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "DIGITALIZACION_SEL",
              "isRequired": true,
              "title": "Producto: Digitalización\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad no cuenta con procedimientos documentados para el desarrollo de actividades de digitalización." },
                { "value": 65, "text": "La Entidad cuenta con procedimientos básicos como alistamiento, escaneo y control de calidad, documentados para el desarrollo de actividades de digitalización." },
                { "value": 79, "text": "La Entidad cuenta con procedimientos básicos como alistamiento, escaneo y control de calidad, documentados según estándares técnicos, para el desarrollo de actividades de digitalización." },
                { "value": 94, "text": "La Entidad cuenta con procedimientos técnicos definidos para cada tipo de digitalización existente." },
                { "value": 100, "text": "La entidad adelanta mejora continua en los procedimientos técnicos establecidos, garantizando su actualización permanente." }
              ]
            },
            { "type": "html", "visibleIf": "{DIGITALIZACION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{DIGITALIZACION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{DIGITALIZACION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{DIGITALIZACION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{DIGITALIZACION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "DIGITALIZACION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "ESQUEMA_METADATOS_SEL",
              "isRequired": true,
              "title": "Producto: Esquema de Metadatos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad no ha identificado metadatos dentro de los documentos electrónicos." },
                { "value": 65, "text": "La Entidad cuenta con metadatos que no están normalizados." },
                { "value": 79, "text": "La Entidad ha normalizado los metadatos de contenido, estructura y contexto de documentos electrónicos." },
                { "value": 94, "text": "La Entidad ha establecido el esquema de metadatos para la gestión de documentos electrónicos." },
                { "value": 100, "text": "La Entidad mejora y actualiza el esquema de metadatos para la gestión de documentos electrónicos de acuerdo con las necesidades." }
              ]
            },
            { "type": "html", "visibleIf": "{ESQUEMA_METADATOS_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{ESQUEMA_METADATOS_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{ESQUEMA_METADATOS_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{ESQUEMA_METADATOS_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{ESQUEMA_METADATOS_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "ESQUEMA_METADATOS_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "SISTEMA_PRESERVACION_SEL",
              "isRequired": true,
              "title": "Producto: Sistema de Preservación Digital\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad carece de un repositorio digital, depósito digital o similar para organizar un archivo digital, y no se ha definido un modelo de requisitos de un Sistema de Preservación Digital." },
                { "value": 65, "text": "La Entidad se encuentra en proceso de implementación de un repositorio digital, depósito digital o similar para organizar un archivo digital y recursos disponibles, y definición del modelo de requisitos de un Sistema de Preservación Digital." },
                { "value": 79, "text": "La Entidad cuenta con un Sistema de Preservación Digital que responde a las necesidades de la Entidad, la estructura organizacional, el modelo de gestión documental, el modelo de requisitos y la capacidad financiera y tecnológica para su mantenimiento." },
                { "value": 94, "text": "La Entidad realiza seguimiento y control del Sistema de Preservación Digital y hace monitoreo del proceso de obsolescencia del sistema(s) de almacenamiento y de sus soportes." },
                { "value": 100, "text": "La Entidad dispone de un plan integral preparado para mantener los archivos y los metadatos accesibles en los actuales soportes y dentro del Sistema de Preservación Digital." }
              ]
            },
            { "type": "html", "visibleIf": "{SISTEMA_PRESERVACION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{SISTEMA_PRESERVACION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{SISTEMA_PRESERVACION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{SISTEMA_PRESERVACION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{SISTEMA_PRESERVACION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "SISTEMA_PRESERVACION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "ALMACENAMIENTO_NUBE_SEL",
              "isRequired": true,
              "title": "Producto: Almacenamiento en la nube\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad no hace uso de servicios de almacenamiento en la nube para el almacenamiento de documentos." },
                { "value": 65, "text": "La entidad hace uso de servicios de almacenamiento en la nube, pero sin aplicar los lineamientos de gestión documental." },
                { "value": 79, "text": "Para el almacenamiento de documentación en la nube se aplican lineamientos de gestión documental como clasificación, ordenación y descripción de documentos y expedientes." },
                { "value": 94, "text": "La entidad ha iniciado la integración de los documentos y expedientes electrónicos almacenados en la nube al SGDEA para garantizar la conformación del fondo documental." },
                { "value": 100, "text": "Todos los documentos que fueron almacenados temporalmente en la nube han sido integrados al SGDEA, se ha dejado de almacenar en la nube los documentos de archivo de gestión y/o central." }
              ]
            },
            { "type": "html", "visibleIf": "{ALMACENAMIENTO_NUBE_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{ALMACENAMIENTO_NUBE_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{ALMACENAMIENTO_NUBE_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{ALMACENAMIENTO_NUBE_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{ALMACENAMIENTO_NUBE_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "ALMACENAMIENTO_NUBE_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "REPOSITORIOS_DIGITALES_SEL",
              "isRequired": true,
              "title": "Producto: Repositorios digitales\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad no cuenta con un repositorio digital oficial o medios de almacenamiento definidos." },
                { "value": 65, "text": "La entidad cuenta con medios de almacenamiento definidos, tales como servidores, discos duros, CD, DVD, entre otros." },
                { "value": 79, "text": "La entidad cuenta con repositorios digitales que hacen parte de los sistemas de información institucionales y son usados para el almacenamiento de documentos en la etapa de gestión." },
                { "value": 94, "text": "La entidad cuenta con repositorios digitales que hacen parte de sistemas de información institucionales y se encuentran articulados con SGDEA." },
                { "value": 100, "text": "La entidad evalúa periódicamente la articulación de los repositorios digitales con el SGDEA, garantizando el funcionamiento de los actuales y promoviendo la integración con los nuevos repositorios." }
              ]
            },
            { "type": "html", "visibleIf": "{REPOSITORIOS_DIGITALES_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{REPOSITORIOS_DIGITALES_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{REPOSITORIOS_DIGITALES_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{REPOSITORIOS_DIGITALES_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{REPOSITORIOS_DIGITALES_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "REPOSITORIOS_DIGITALES_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "SEGURIDAD_PRIVACIDAD",
          "title": "Subcategoría: Seguridad y Privacidad",
          "elements": [
            {
              "type": "dropdown",
              "name": "ARTICULACION_POLITICAS_SEG_INFO_SEL",
              "isRequired": true,
              "title": "Producto: Articulación con Políticas de Seguridad de Información\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de una articulación entre áreas de sistemas y gestión documental, respecto a la seguridad de información contenida en documentos electrónicos de archivo." },
                { "value": 65, "text": "La entidad se encuentra integrando aspectos relacionados con la seguridad de información contenida en documentos electrónicos de archivo, dentro de las políticas del Sistema de Gestión Seguridad de Información." },
                { "value": 79, "text": "La entidad integra aspectos de seguridad de información contenida en documentos electrónicos de archivo, dentro de las políticas del Sistema de Gestión Seguridad de Información." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a las acciones relacionadas con la seguridad de información para documentos electrónicos de archivo, validando lo estipulado en las políticas del Sistema de Gestión Seguridad de Información." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua actualizando los aspectos que sean necesarios para la seguridad de información contenida en documentos electrónicos de archivo, dentro de las políticas del Sistema de Gestión de Seguridad de Información." }
              ]
            },
            { "type": "html", "visibleIf": "{ARTICULACION_POLITICAS_SEG_INFO_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{ARTICULACION_POLITICAS_SEG_INFO_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{ARTICULACION_POLITICAS_SEG_INFO_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{ARTICULACION_POLITICAS_SEG_INFO_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{ARTICULACION_POLITICAS_SEG_INFO_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "ARTICULACION_POLITICAS_SEG_INFO_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "COPIA_SEGURIDAD_ARCHIVO_DIG_SEL",
              "isRequired": true,
              "title": "Producto: Copia de seguridad archivo digital\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad no realiza copias de su archivo digital." },
                { "value": 65, "text": "La Entidad dispone de dos copias completas de su archivo digital que no están unidas en un mismo centro de datos." },
                { "value": 79, "text": "La Entidad cuenta con estrategias de migración para datos en soportes heterogéneos (discos ópticos, discos duros, etc.) y realiza migración del contenido a otro soporte dentro del sistema de almacenamiento." },
                { "value": 94, "text": "La Entidad realiza copia completa de su archivo digital en una localización geográfica distinta." },
                { "value": 100, "text": "La Entidad realiza copias de su archivo digital en localizaciones geográficas diferentes con el fin de mitigar los posibles riesgos de pérdida de información y documentar los protocolos necesarios para su administración, control y acceso requeridos." }
              ]
            },
            { "type": "html", "visibleIf": "{COPIA_SEGURIDAD_ARCHIVO_DIG_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{COPIA_SEGURIDAD_ARCHIVO_DIG_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{COPIA_SEGURIDAD_ARCHIVO_DIG_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{COPIA_SEGURIDAD_ARCHIVO_DIG_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{COPIA_SEGURIDAD_ARCHIVO_DIG_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "COPIA_SEGURIDAD_ARCHIVO_DIG_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "INTEROPERABILIDAD",
          "title": "Subcategoría: Interoperabilidad",
          "elements": [
            {
              "type": "dropdown",
              "name": "INTEROPERABILIDAD_POLITICO_LEGAL_SEL",
              "isRequired": true,
              "title": "Producto: Político-Legal\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad carece de normatividad y acuerdos asociados a los servicios de intercambio de documentos electrónicos." },
                { "value": 65, "text": "La Entidad está en desarrollo de acuerdos para el intercambio de documentos electrónicos y la asociación de normatividad vigente." },
                { "value": 79, "text": "La entidad cuenta con todos los acuerdos para el intercambio de documentos electrónicos con otras entidades y existe normatividad para todos los servicios de intercambio." },
                { "value": 94, "text": "La Entidad realiza seguimiento y control de sus acuerdos de intercambio de documentos electrónicos, verifica que los acuerdos cumplan la normatividad vigente." },
                { "value": 100, "text": "La Entidad actualiza los acuerdos de intercambio de documentos electrónicos con el fin de garantizar que responden a los cambios de normatividad." }
              ]
            },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_POLITICO_LEGAL_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_POLITICO_LEGAL_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_POLITICO_LEGAL_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_POLITICO_LEGAL_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_POLITICO_LEGAL_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "INTEROPERABILIDAD_POLITICO_LEGAL_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "INTEROPERABILIDAD_SEMANTICO_SEL",
              "isRequired": true,
              "title": "Producto: Semántico\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad no aplica un lenguaje común de intercambio de información para la construcción de expedientes electrónicos." },
                { "value": 65, "text": "La entidad se encuentra en proceso de aplicación de un lenguaje común de intercambio de información documentado para definir las estructuras de los expedientes electrónicos." },
                { "value": 79, "text": "La entidad aplica un lenguaje común de intercambio y lo utiliza en todos los servicios de intercambio de información para la construcción de expedientes electrónicos, adicional cuenta con la documentación completa de los servicios de intercambio." },
                { "value": 94, "text": "La Entidad realiza seguimiento y control de sus lenguajes de intercambio para la construcción de expedientes electrónicos." },
                { "value": 100, "text": "La Entidad actualiza la aplicación de los lenguajes comunes de intercambio de acuerdo con las necesidades propias de la Entidad y a los requerimientos de los documentos electrónicos a través del tiempo con el fin de garantizar su vigencia." }
              ]
            },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_SEMANTICO_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_SEMANTICO_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_SEMANTICO_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_SEMANTICO_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_SEMANTICO_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "INTEROPERABILIDAD_SEMANTICO_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "INTEROPERABILIDAD_TECNICO_SEL",
              "isRequired": true,
              "title": "Producto: Técnico\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La Entidad carece de infraestructura tecnológica para intercambiar información." },
                { "value": 65, "text": "La Entidad se encuentra en proceso de implementación de la infraestructura tecnológica para el intercambio de información." },
                { "value": 79, "text": "La arquitectura de la infraestructura tecnológica de la entidad se adapta a las necesidades específicas de intercambio de información y esta arquitectura está documentada y actualizada en un documento." },
                { "value": 94, "text": "La Entidad realiza seguimiento y control a la infraestructura tecnológica para la intercambio de información a través de la revisión de la documentación asociada y al cumplimiento de los servicios de intercambio." },
                { "value": 100, "text": "La Entidad realiza procesos de mejora continua a través de la actualización de la infraestructura tecnológica en concordancia con los requisitos de los servicios de intercambio de información." }
              ]
            },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_TECNICO_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_TECNICO_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_TECNICO_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_TECNICO_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{INTEROPERABILIDAD_TECNICO_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "INTEROPERABILIDAD_TECNICO_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }

          ]
        }
      ]
    },
    {
      name: "COMP_CULTURAL",
      title: "CULTURAL",
      elements: [
        {
          "type": "panel",
          "name": "GESTION_CONOCIMIENTO",
          "title": "Subcategoría: Gestión del Conocimiento",
          "elements": [
            {
              "type": "dropdown",
              "name": "PROGRAMA_GESTION_CONOCIMIENTO_SEL",
              "isRequired": true,
              "title": "Producto: Programa de Gestión del Conocimiento\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de instrumentos de un programa de gestión del conocimiento." },
                { "value": 65, "text": "La entidad está desarrollando el Programa de Gestión del Conocimiento en articulación con la información disponible en el archivo." },
                { "value": 79, "text": "La entidad implementa el Programa de Gestión del Conocimiento teniendo cuenta las estrategias de producción, apropiación y circulación del conocimiento con base en los documentos y la información contenida en los archivos." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a su Programa de Gestión del Conocimiento a través de los procesos de auditoría para la identificación, capitalización, aprovechamiento de la información y documentación en todos los ámbitos de su proceso evolutivo." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua en su Programa de Gestión del Conocimiento orientado a la sistematización de la información, de su patrimonio documental y de su memoria institucional para su propio uso y el de la comunidad generando crecimiento y valor." }
              ]
            },
            { "type": "html", "visibleIf": "{PROGRAMA_GESTION_CONOCIMIENTO_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{PROGRAMA_GESTION_CONOCIMIENTO_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{PROGRAMA_GESTION_CONOCIMIENTO_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{PROGRAMA_GESTION_CONOCIMIENTO_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{PROGRAMA_GESTION_CONOCIMIENTO_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "PROGRAMA_GESTION_CONOCIMIENTO_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "MEMORIA_INSTITUCIONAL_SEL",
              "isRequired": true,
              "title": "Producto: Memoria Institucional\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de la memoria institucional." },
                { "value": 65, "text": "La entidad está recopilando información para construir la memoria institucional con los documentos que posee el archivo, las experiencias del personal y conocimientos acumulados en el tiempo." },
                { "value": 79, "text": "La entidad elabora la memoria institucional con datos la estructura orgánica de la entidad, localización física, responsables, organización y servicios en las diferentes etapas del ciclo vital de los documentos." },
                { "value": 94, "text": "La entidad realiza seguimiento y control de la memoria institucional, a partir de los procesos de auditoría, con el fin de fortalecer la información del contexto y contenido de los archivos." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua para la actualización de la memoria institucional que contribuyan a la generación de nuevo conocimiento en la entidad." }
              ]
            },
            { "type": "html", "visibleIf": "{MEMORIA_INSTITUCIONAL_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{MEMORIA_INSTITUCIONAL_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{MEMORIA_INSTITUCIONAL_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{MEMORIA_INSTITUCIONAL_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{MEMORIA_INSTITUCIONAL_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "MEMORIA_INSTITUCIONAL_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "ARCHIVOS_HISTORICOS_SEL",
              "isRequired": true,
              "title": "Producto: Archivos Históricos\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de la identificación de documentos con carácter histórico." },
                { "value": 65, "text": "La entidad está desarrollando acciones para identificar documentos de carácter histórico a partir de los instrumentos archivísticos." },
                { "value": 79, "text": "La entidad realiza la identificación de documentos de carácter histórico para promover y lograr la apropiación y aprovechamiento de la información con fines culturales." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a las acciones de identificación, conservación y promoción de la documentación con significación histórica." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a los documentos identificados de carácter histórico con el fin de desarrollar acciones que conlleven a la declaratoria de Bien de Interés Cultural de Carácter documental." }
              ]
            },
            { "type": "html", "visibleIf": "{ARCHIVOS_HISTORICOS_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{ARCHIVOS_HISTORICOS_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{ARCHIVOS_HISTORICOS_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{ARCHIVOS_HISTORICOS_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{ARCHIVOS_HISTORICOS_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "ARCHIVOS_HISTORICOS_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "REDES_CULTURALES",
          "title": "Subcategoría: Redes Culturales",
          "elements": [
            {
              "type": "dropdown",
              "name": "REDES_CULTURALES_SEL",
              "isRequired": true,
              "title": "Producto: Redes culturales\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de participación en redes culturales." },
                { "value": 65, "text": "La entidad está consolidando estrategias que le permitan tener disponibilidad la información contenida en sus archivos para fomentar el desarrollo de los procesos culturales." },
                { "value": 79, "text": "La entidad implementa redes de servicios culturales teniendo en cuenta el principio de cooperación interinstitucional entre las diferentes instancias y espacios de concertación que integran el Sistema Nacional de Cultura." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a las actividades desarrolladas en el marco de las redes culturales que fortalezcan las tareas conjuntas y espacios de concertación interinstitucional e intersectorial tendientes al fomento de la diversidad cultural, la promoción y la defensa de los derechos culturales." },
                { "value": 100, "text": "La entidad efectúa procesos de mejora continua a las actividades que se realizan en el marco de las redes culturales que permitan ampliar horizontes para generar aportes significativos en el desarrollo y fomento de los procesos culturales." }
              ]
            },
            { "type": "html", "visibleIf": "{REDES_CULTURALES_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{REDES_CULTURALES_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{REDES_CULTURALES_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{REDES_CULTURALES_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{REDES_CULTURALES_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "REDES_CULTURALES_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "RENDICION_CUENTAS_SEL",
              "isRequired": true,
              "title": "Producto: Rendición de cuentas\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de mecanismos de rendición de cuentas." },
                { "value": 65, "text": "La entidad desarrolla mecanismos para realizar rendición de cuentas que permiten informar y explicar a la ciudadanía los avances y los resultados de su gestión." },
                { "value": 79, "text": "La entidad implementa mecanismos que dan cuenta del cumplimiento en gestión documental y administración de archivos haciendo uso de los medios institucionales de comunicación establecidos para tal fin." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a los mecanismos de rendición de cuentas para dar respuesta a las inquietudes de la ciudadanía." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a los mecanismos de rendición de cuentas para fortalecer los medios que permitan hacer más fluida la interacción con la comunidad." }
              ]
            },
            { "type": "html", "visibleIf": "{RENDICION_CUENTAS_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{RENDICION_CUENTAS_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{RENDICION_CUENTAS_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{RENDICION_CUENTAS_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{RENDICION_CUENTAS_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "RENDICION_CUENTAS_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "MECANISMOS_DIFUSION_SEL",
              "isRequired": true,
              "title": "Producto: Mecanismos de Difusión\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de mecanismos para la difusión de información contenida en sus documentos de archivo." },
                { "value": 65, "text": "La entidad está desarrollando mecanismos de difusión de información a través de la promoción de productos y servicios que dispone el archivo." },
                { "value": 79, "text": "La entidad implementa mecanismos para divulgar los asuntos y temáticas contenidos en sus documentos y archivos en aras de persuadir a los usuarios y a la comunidad a hacer uso de ello." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a los mecanismos de difusión de la información contenida en sus documentos de archivo orientados a visibilizar su memoria institucional." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a los mecanismos de difusión que conlleven al conocimiento y reconocimiento del patrimonio documental en los diferentes niveles local, nacional, regional e internacional, como bienes de interés cultural, memoria del país y del mundo." }
              ]
            },
            { "type": "html", "visibleIf": "{MECANISMOS_DIFUSION_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{MECANISMOS_DIFUSION_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{MECANISMOS_DIFUSION_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{MECANISMOS_DIFUSION_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{MECANISMOS_DIFUSION_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "MECANISMOS_DIFUSION_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" },

            {
              "type": "dropdown",
              "name": "ACCESO_CONSULTA_INFO_SEL",
              "isRequired": true,
              "title": "Producto: Acceso y Consulta de la Información\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de estrategias de acceso y consulta a la información contenida en sus documentos de archivo." },
                { "value": 65, "text": "La entidad está desarrollando estrategias de acceso y consulta de la información contenida respetando la protección de los datos personales, derecho a la intimidad, así como las restricciones por razones de conservación de los documentos." },
                { "value": 79, "text": "La entidad implementa estrategias de acceso y consulta de la información contenida en sus documentos de archivo por medio de los diferentes instrumentos archivísticos y de acceso." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a las estrategias de acceso y consulta de la información contenida en sus documentos de archivo de tal forma que se logre la optimización de sus canales de atención." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a las estrategias de acceso y consulta de la información contenida en sus documentos de archivo orientadas a la actualización de los instrumentos y a los procesos de innovación que faciliten el acercamiento con el usuario." }
              ]
            },
            { "type": "html", "visibleIf": "{ACCESO_CONSULTA_INFO_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{ACCESO_CONSULTA_INFO_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{ACCESO_CONSULTA_INFO_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{ACCESO_CONSULTA_INFO_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{ACCESO_CONSULTA_INFO_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "ACCESO_CONSULTA_INFO_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        },
        {
          "type": "panel",
          "name": "PROTECCION_AMBIENTE",
          "title": "Subcategoría: Protección del Ambiente",
          "elements": [
            {
              "type": "dropdown",
              "name": "PLAN_AMBIENTAL_SEL",
              "isRequired": true,
              "title": "Producto: Plan Institucional de Gestión Ambiental\nSeleccione la opción que describa la situación actual de la entidad",
              "choices": [
                { "value": 0, "text": "La entidad carece de Plan Institucional de Gestión Ambiental." },
                { "value": 65, "text": "La entidad está desarrollando estrategias para incorporar lineamientos de la gestión ambiental en articulación con la gestión documental y en la administración de archivos que generan una cultura ambiental." },
                { "value": 79, "text": "La entidad implementa estrategias para generar una cultura ambiental a través de procedimientos y medidas relacionadas con el medio ambiente en los diferentes procesos y actividades de la gestión documental y la administración de archivos." },
                { "value": 94, "text": "La entidad realiza seguimiento y control a las estrategias que buscan generar la construcción una cultura ambiental, a través de los procesos de auditoría, que fortalezcan la importancia de la protección del entorno y la naturaleza en los procesos de la gestión documental en la entidad." },
                { "value": 100, "text": "La entidad realiza procesos de mejora continua a las estrategias que generan una cultura en favor de la conservación y preservación del medio ambiente en su relación con la gestión documental." }
              ]
            },
            { "type": "html", "visibleIf": "{PLAN_AMBIENTAL_SEL} = 0", "html": "<b>Nivel:</b> Inicial &nbsp;&nbsp; <b>Valor:</b> 0" },
            { "type": "html", "visibleIf": "{PLAN_AMBIENTAL_SEL} = 65", "html": "<b>Nivel:</b> Básico &nbsp;&nbsp; <b>Valor:</b> 65" },
            { "type": "html", "visibleIf": "{PLAN_AMBIENTAL_SEL} = 79", "html": "<b>Nivel:</b> Intermedio &nbsp;&nbsp; <b>Valor:</b> 79" },
            { "type": "html", "visibleIf": "{PLAN_AMBIENTAL_SEL} = 94", "html": "<b>Nivel:</b> Avanzado 1 &nbsp;&nbsp; <b>Valor:</b> 94" },
            { "type": "html", "visibleIf": "{PLAN_AMBIENTAL_SEL} = 100", "html": "<b>Nivel:</b> Avanzado 2 &nbsp;&nbsp; <b>Valor:</b> 100" },
            { "type": "comment", "name": "PLAN_AMBIENTAL_OBS", "title": "Observaciones", "placeholder": "Registre las observaciones correspondientes a este producto" }
          ]
        }
      ]
    }
  ]
};

export default surveyJson;