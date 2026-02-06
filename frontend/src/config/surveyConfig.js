/**
 * Configuración base del formulario multi-step con SurveyJS
 * Esta configuración puede ser modificada para agregar más pasos y campos
 */

export const surveyJson = {
  title: "Diagnóstico Integral de Archivos Entidades Públicas",
  logoPosition: "right",
  showProgressBar: "top",
  progressBarType: "buttons",
  showQuestionNumbers: "off",
  completedHtml: "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>El formulario ha sido diligenciado correctamente.</div>",

  pages: [
    {
      name: "identificacion",
      title: "Identificación de la Entidad",
      elements: [
        {
          type: "text",
          name: "nombre_entidad",
          title: "Nombre",
          isRequired: true,
          maxLength: 255
        },
        {
          type: "dropdown",
          name: "nivel",
          title: "Nivel",
          isRequired: true,
          choices: [
            { value: "nacional", text: "Nacional" },
            { value: "departamental", text: "Departamental" },
            { value: "municipal", text: "Municipal" },
            { value: "distrital", text: "Distrital" },
            { value: "extranjero", text: "Extranjero" }
          ]
        },
        {
          type: "text",
          name: "sector",
          title: "Sector",
          isRequired: true,
          maxLength: 100
        },
        {
          type: "text",
          name: "organismo",
          title: "Organismo al que pertenece",
          isRequired: false,
          maxLength: 255
        },
        {
          type: "dropdown",
          name: "caracter",
          title: "Carácter de la entidad",
          isRequired: true,
          hasOther: true,
          choices: [
            { value: "publica", text: "Pública" },
            { value: "privada", text: "Privada" },
            { value: "mixta", text: "Mixta" },
            { value: "privada_funciones_publicas", text: "Privada con funciones públicas" },
            { value: "privada_interes_cultural", text: "Privada con interés cultural" },
            { value: "familiar", text: "Familiar" },
            { value: "personal", text: "Personal" }
          ]
        },
        {
          type: "text",
          name: "rama",
          title: "Ubicación en la estructura del Estado (Rama)",
          maxLength: 100,
          isRequired: false
        },
        {
          type: "panel",
          name: "fecha_panel",
          title: "Fecha de creación y acto legal",
          elements: [
            {
              type: "text",
              inputType: "date",
              name: "fecha_creacion",
              title: "Fecha",
              isRequired: true
            },
            {
              type: "text",
              name: "acto_legal",
              title: "Acto legal",
              maxLength: 255,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "contacto",
          title: "Datos de contacto",
          elements: [
            {
              type: "text",
              name: "direccion",
              title: "Dirección",
              maxLength: 255,
              isRequired: true
            },
            {
              type: "text",
              name: "telefono",
              title: "Teléfono",
              inputType: "tel",
              isRequired: true,
              validators: [{
                type: "regex",
                text: "Por favor ingrese un número de teléfono válido",
                regex: "^[0-9\\(\\)\\-\\s+]*$"
              }]
            }
          ]
        },
        {
          type: "text",
          name: "correo",
          title: "Correo electrónico",
          inputType: "email",
          isRequired: true,
          validators: [{
            type: "email",
            text: "Por favor ingrese un correo electrónico válido"
          }]
        },
        {
          type: "text",
          name: "web",
          title: "Página web",
          inputType: "url",
          isRequired: true,
          validators: [{
            type: "regex",
            text: "Por favor ingrese una URL válida (ej: https://ejemplo.com)",
            regex: "^(https?:\\/\\/)?[\\w\\.-]+\\.[a-z]{2,}(\\/.*)?$"
          }]
        },

        {
          type: "panel",
          name: "ubicacion_geo",
          title: "Ubicación",
          elements: [
            {
              type: "text",
              name: "municipio",
              title: "Municipio",
              maxLength: 100,
              isRequired: true
            },
            {
              type: "text",
              name: "categoria",
              title: "Categoría",
              maxLength: 50,
              isRequired: false
            },
            {
              type: "text",
              name: "departamento",
              title: "Departamento",
              maxLength: 100,
              isRequired: true
            }
          ]
        },
        {
          type: "radiogroup",
          name: "tiene_sucursales",
          title: "¿Tiene regiones o sucursales?",
          isRequired: true,
          choices: [
            { value: "si", text: "Sí" },
            { value: "no", text: "No" }
          ]
        },
        {
          type: "comment",
          name: "sucursales_info",
          title: "Especifique las regiones o sucursales",
          visibleIf: "{tiene_sucursales} = 'si'",
          isRequired: true,
          maxLength: 500,
          rows: 3
        },
        {
          type: "text",
          inputType: "number",
          name: "numero_dependencias",
          title: "Número de dependencias",
          isRequired: true,
          min: 0,
          max: 10000,
          validators: [{
            type: "numeric",
            minValue: 0,
            maxValue: 10000,
            text: "Por favor ingrese un número entre 0 y 10000"
          }],
          title: "Número de dependencias"
        },

        {
          type: "comment",
          name: "mision",
          title: "Misión de la entidad",
          isRequired: true
        },

        {
          type: "panel",
          name: "rep_legal",
          title: "Representante legal",
          elements: [
            {
              type: "text",
              name: "rep_nombre",
              title: "Nombre",
              isRequired: true
            },
            {
              type: "text",
              name: "rep_profesion",
              title: "Profesión",
              isRequired: true
            },
            {
              type: "text",
              name: "rep_cargo",
              title: "Cargo",
              isRequired: true
            }
          ]
        },

        {
          type: "panel",
          name: "diligenciante",
          title: "Persona que diligencia",
          elements: [
            {
              type: "text",
              name: "dil_nombre",
              title: "Nombre",
              isRequired: true
            },
            {
              type: "text",
              name: "dil_tiempo",
              title: "Tiempo en el cargo",
              isRequired: true
            },
            { type: "comment", name: "dil_obs", title: "Observaciones" }
          ]
        }
      ]
    },
    {
      "name": "I_aspectos_administrativos",
      "title": "I. ASPECTOS ADMINISTRATIVOS",
      "elements": [

        {
          "type": "html",
          "name": "A_1_1_header",
          "html": "<h3>1.1. INSTANCIAS ASESORAS</h3>"
        },

        {
          "type": "radiogroup",
          "name": "A_1_1_1",
          "title": "1.1.1. ¿La Entidad ha conformado el Comité Interno de Archivo? Si la respuesta es afirmativa indique el Acto Administrativo y su fecha.",
          "choices": [
            { "value": 1.42, "text": "Cumple" },
            { "value": 0.71, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_1_1_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_1_1_2",
          "title": "1.1.2 ¿Los miembros del Comité Interno de Archivo son los enunciados en el artículo 2.8.2.15 del Decreto 1080 de 2015?",
          "choices": [
            { "value": 1.42, "text": "Cumple" },
            { "value": 0.71, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_1_1_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_1_1_3",
          "title": "1.1.3 ¿Las Funciones del Comité Interno de Archivos son las enunciadas en el artículo 2.8.2.16 del Decreto 1080 de 2015?",
          "choices": [
            { "value": 1.42, "text": "Cumple" },
            { "value": 0.71, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_1_1_3_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_1_1_4",
          "title": "1.1.4 ¿En el territorio (Municipio o Departamento) se ha creado el Archivo General Territorial?",
          "choices": [
            { "value": 1.42, "text": "Cumple" },
            { "value": 0.71, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_1_1_4_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_1_1_5",
          "title": "1.1.5 ¿Están las funciones del Archivo General del Territorio acordes con las disposiciones del artículo 2.8.2.1.6 del Decreto 1080 de 2015?",
          "choices": [
            { "value": 1.42, "text": "Cumple" },
            { "value": 0.71, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_1_1_5_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_1_1_6",
          "title": "1.1.6 ¿La Entidad ha formulado una política de gestión Documental?",
          "choices": [
            { "value": 1.42, "text": "Cumple" },
            { "value": 0.71, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_1_1_6_obs", "title": "Observaciones" },

        {
          "type": "html",
          "name": "A_2_header",
          "html": "<h3>2. ASPECTOS ORGANIZACIONALES</h3>"
        },

        {
          "type": "radiogroup",
          "name": "A_2_1_1",
          "title": "2.1.1 ¿Tiene la Entidad el Organigrama por dependencias actualizado?",
          "choices": [
            { "value": 0.84, "text": "Cumple" },
            { "value": 0.42, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_1_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_1_2",
          "title": "2.1.2 ¿Tiene la Entidad un manual de funciones actualizado?",
          "choices": [
            { "value": 0.84, "text": "Cumple" },
            { "value": 0.42, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_1_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_2_1",
          "title": "2.2.1 ¿En el Manual de Funciones y de procedimientos se ha regulado el recibo y la entrega de los documentos de archivo por parte de los servidores públicos?",
          "choices": [
            { "value": 1.67, "text": "Cumple" },
            { "value": 0.84, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_2_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_1",
          "title": "2.3.1 ¿La Entidad cuenta con el Mapa de Procesos actualizado?",
          "choices": [
            { "value": 0.21, "text": "Cumple" },
            { "value": 0.11, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_3_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_2",
          "title": "2.3.2 ¿Ha desarrollado la Entidad un Normograma de acuerdo con su contexto legal?",
          "choices": [
            { "value": 0.21, "text": "Cumple" },
            { "value": 0.11, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_3_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_3",
          "title": "2.3.3 ¿La entidad ha sufrido reestructuraciones, cuántas y cuándo fue la última?",
          "choices": [
            { "value": 0.21, "text": "Cumple" },
            { "value": 0.11, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_3_3_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_4",
          "title": "2.3.4 ¿La entidad ha tenido cambios en la estructura orgánico-funcional de la entidad?",
          "choices": [
            { "value": 0.21, "text": "Cumple" },
            { "value": 0.11, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_3_4_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_5",
          "title": "2.3.5 ¿Existen actos administrativos u otras normas que indiquen la creación de dependencias o grupos con la respectiva asignación de funciones?",
          "choices": [
            { "value": 0.21, "text": "Cumple" },
            { "value": 0.11, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_3_5_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_6",
          "title": "2.3.6 Indique el Acto Administrativo de creación de la Entidad.",
          "choices": [
            { "value": 0.21, "text": "Indica" },
            { "value": 0, "text": "No indica" }
          ]
        },
        { "type": "comment", "name": "A_2_3_6_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_7",
          "title": "2.3.7 Indique el número de dependencias de la Entidad.",
          "choices": [
            { "value": 0.21, "text": "Indica" },
            { "value": 0, "text": "No indica" }
          ]
        },
        { "type": "comment", "name": "A_2_3_7_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_3_8",
          "title": "2.3.8 ¿Se ha designado a una dependencia específica la función archivística de la Entidad o se ha creado la dependencia, sección o grupo de archivo?",
          "choices": [
            { "value": 0.21, "text": "Cumple" },
            { "value": 0.11, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_3_8_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_4_1",
          "title": "2.4.1 ¿La Entidad ha conformado el Archivo Central Institucional?",
          "choices": [
            { "value": 0.84, "text": "Cumple" },
            { "value": 0.42, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_4_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_4_2",
          "title": "2.4.2 ¿La Entidad ha creado el Archivo Histórico?",
          "choices": [
            { "value": 0.84, "text": "Cumple" },
            { "value": 0.42, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_4_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_2_5_1",
          "title": "2.5.1 ¿Tiene la Entidad funciones relacionadas con la garantía, protección y salvaguardia de los Derechos Humanos y el Derecho Internacional Humanitario?",
          "choices": [
            { "value": 0.84, "text": "Cumple" },
            { "value": 0.42, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_2_5_1_obs", "title": "Observaciones" },

        {
          "type": "html",
          "name": "A_3_header",
          "html": "<h3>3. ASPECTOS DE FINANCIACIÓN</h3>"
        },

        {
          "type": "radiogroup",
          "name": "A_3_1_1",
          "title": "3.1.1 ¿Se tiene un presupuesto designado a las funciones de archivo durante la vigencia?",
          "choices": [
            { "value": 1.67, "text": "Cumple" },
            { "value": 0.84, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_3_1_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_3_1_2",
          "title": "3.1.2 ¿Se tiene asignado un presupuesto para gastos de funcionamiento del archivo?",
          "choices": [
            { "value": 1.67, "text": "Cumple" },
            { "value": 0.84, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_3_1_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_3_1_3",
          "title": "3.1.3 ¿Se ha asignado un presupuesto para gastos de inversión para el archivo?",
          "choices": [
            { "value": 1.67, "text": "Cumple" },
            { "value": 0.84, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_3_1_3_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_3_1_4",
          "title": "3.1.4 ¿En vigencias anteriores se han contratado o ejecutado proyectos para el funcionamiento del archivo o en sistemas de información?",
          "choices": [
            { "value": 1.67, "text": "Cumple" },
            { "value": 0.84, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_3_1_4_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_3_1_5",
          "title": "3.1.5 ¿Ha sido suficiente el presupuesto asignado al área de archivo durante la vigencia para cumplir con el PINAR o el PGD?",
          "choices": [
            { "value": 1.67, "text": "Cumple" },
            { "value": 0.84, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_3_1_5_obs", "title": "Observaciones" },

        {
          "type": "html",
          "name": "A_4_header",
          "html": "<h3>4. ASPECTOS DE FORMACIÓN Y CAPACITACIÓN</h3>"
        },

        {
          "type": "radiogroup",
          "name": "A_4_1_1",
          "title": "4.1.1 ¿Los funcionarios encargados de los archivos han sido capacitados en programas o áreas de su labor?",
          "choices": [
            { "value": 2.08, "text": "Cumple" },
            { "value": 1.04, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_4_1_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_4_2_1",
          "title": "4.2.1 ¿Los servidores públicos han sido capacitados en temas relacionados al manejo y organización de los archivos?",
          "choices": [
            { "value": 2.08, "text": "Cumple" },
            { "value": 1.04, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_4_2_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_4_3_1",
          "title": "4.3.1 ¿Los servidores públicos han sido capacitados y entrenados para la atención de emergencias?",
          "choices": [
            { "value": 2.08, "text": "Cumple" },
            { "value": 1.04, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_4_3_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "A_4_4_1",
          "title": "4.4.1 ¿La Unidad de Correspondencia cuenta con el personal suficiente y capacitado para recibir, enviar y controlar oportunamente el trámite de las comunicaciones de carácter oficial?",
          "choices": [
            { "value": 2.08, "text": "Cumple" },
            { "value": 1.04, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "A_4_4_1_obs", "title": "Observaciones" },

        {
          "type": "expression",
          "name": "I_total_aspectos_administrativos",
          "expression": "round({A_1_1_1}+{A_1_1_2}+{A_1_1_3}+{A_1_1_4}+{A_1_1_5}+{A_1_1_6}+{A_2_1_1}+{A_2_1_2}+{A_2_2_1}+{A_2_3_1}+{A_2_3_2}+{A_2_3_3}+{A_2_3_4}+{A_2_3_5}+{A_2_3_6}+{A_2_3_7}+{A_2_3_8}+{A_2_4_1}+{A_2_4_2}+{A_2_5_1}+{A_3_1_1}+{A_3_1_2}+{A_3_1_3}+{A_3_1_4}+{A_3_1_5}+{A_4_1_1}+{A_4_2_1}+{A_4_3_1}+{A_4_4_1}, 2)",
          "visible": false
        }

      ]
    },
    {
      "name": "B_aspectos_funcion_archivistica",
      "title": "II. ASPECTOS DE FUNCIÓN ARCHIVÍSTICA",
      "elements": [
        {
          "type": "html",
          "name": "B_5_1_header",
          "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>5.1. INSTRUMENTOS ARCHIVÍSTICOS</div>"
        },
        {
          "type": "radiogroup",
          "name": "C_5_1_1",
          "title": "5.1.1 ¿La Entidad ha elaborado el Cuadro de Clasificación Documental?",
          "choices": [
            { "value": 2.78, "text": "Cumple" },
            { "value": 1.39, "text": "Cumple parcial" },
            { "value": 0, "text": "No cumple" }
          ]
        },
        { "type": "comment", "name": "C_5_1_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_1",
          "title": "5.2.1 ¿La Entidad ha elaborado las Tablas de Retención Documental?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_2",
          "title": "5.2.2 ¿Las Tablas de Retención Documental fueron aprobadas por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_3",
          "title": "5.2.3 ¿Las Tablas de Retención Documental fueron convalidadas por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_3_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_4",
          "title": "5.2.4 ¿Las Tablas de Retención Documental fueron implementadas por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_4_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_5",
          "title": "5.2.5 ¿Las Tablas de Retención Documental fueron publicadas en la página web de la Entidad?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_5_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_6",
          "title": "5.2.6 ¿Han sido actualizadas las Tablas de Retención Documental?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_6_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_8",
          "title": "5.2.8 ¿La Entidad ha elaborado las Tablas de Valoración Documental?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_8_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_9",
          "title": "5.2.9 ¿Las Tablas de Valoración Documental fueron aprobadas por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_9_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_10",
          "title": "5.2.10 ¿Las Tablas de Valoración Documental fueron convalidadas por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_10_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_2_11",
          "title": "5.2.11 ¿Las Tablas de Valoración Documental fueron implementadas por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_2_11_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_3_1",
          "title": "5.3.1 ¿La Entidad ha elaborado el Programa de Gestión Documental?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_3_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_3_2",
          "title": "5.3.2 ¿El Programa de Gestión Documental fue aprobado por la instancia competente?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_3_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_3_3",
          "title": "5.3.3 ¿Se ha realizado la implementación del Programa de Gestión Documental?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_3_3_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_3_4",
          "title": "5.3.4 ¿Se ha realizado el seguimiento al Programa de Gestión Documental?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_3_4_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_3_5",
          "title": "5.3.5 ¿Se ha publicado el Programa de Gestión Documental en la página web de la Entidad?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_3_5_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_5_3_7",
          "title": "5.3.7 ¿Ha implementado la Entidad la elaboración de los inventarios documentales en los archivos de gestión?",
          "choices": [{ "value": 0.25, "text": "Cumple" }, { "value": 0.125, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_5_3_7_obs", "title": "Observaciones" },

        {
          "type": "expression",
          "name": "II_total",
          "expression": "round({C_5_1_1} + {C_5_2_1} + {C_5_2_2} + {C_5_2_3} + {C_5_2_4} + {C_5_2_5} + {C_5_2_6} + {C_5_2_8} + {C_5_2_9} + {C_5_2_10} + {C_5_2_11} + {C_5_3_1} + {C_5_3_2} + {C_5_3_3} + {C_5_3_4} + {C_5_3_5} + {C_5_3_7}, 2)",
          "visible": false
        }
      ]
    },
    {
      "name": "C_aspectos_preservacion",
      "title": "III. ASPECTOS DE PRESERVACIÓN",
      "elements": [
        {
          "type": "html",
          "name": "VIII_CONDICIONES_EDIFICIOS",
          "html": "<h4>8.1. CONDICIONES DE EDIFICIOS Y LOCALES DESTINADOS A ARCHIVOS</h4>"
        },
        {
          "type": "radiogroup",
          "name": "C_8_1_1",
          "title": "8.1.1 ¿Cuenta la entidad con los tres depósitos para almacenamiento?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_1_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_2",
          "title": "8.1.2 ¿El terreno se presenta sin riesgos de Humedad subterránea o problemas de inundación y ofrece estabilidad?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_2_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_3",
          "title": "8.1.3 ¿El terreno se encuentra situado lejos de industrias contaminantes o que presenten riesgos de un posible peligro por atentados u objetivos bélicos?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_3_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_4",
          "title": "8.1.4 ¿El espacio ofrece suficiente espacio para albergar la documentación acumulada y su natural incremento?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_4_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_5",
          "title": "8.1.5 ¿Los pisos, muros, techos y puertas están construidos con materiales resistentes?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_5_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_6",
          "title": "8.1.6 ¿Las pinturas empleadas presentan propiedades ignífugas?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_6_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_7",
          "title": "8.1.7 ¿La resistencia de las placas es igual o mayor a 1200 Kg/m2?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_7_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_8",
          "title": "8.1.8 ¿El depósito fue diseñado y dimensionado teniendo en cuenta la manipulación, transporte y seguridad de los documentos?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_8_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_9",
          "title": "8.1.9 ¿Fue adecuado el depósito climáticamente?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_9_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_10",
          "title": "8.1.10 ¿Las áreas destinadas a custodia cuentan con elementos de control y aislamiento?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_10_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_11",
          "title": "8.1.11 ¿Las zonas técnicas o de trabajo archivístico, consulta, limpieza, entre otras actividades se encuentran fuera del área de almacenamiento?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_11_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_12",
          "title": "8.1.12 ¿La estantería está diseñada para almacenar las unidades de conservación usadas por la Entidad?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_12_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_13",
          "title": "8.1.13 ¿La estantería está elaborada en láminas metálicas, tratadas con tratamiento anticorrosivo y pintura horneada?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_13_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_14",
          "title": "8.1.14 ¿Las bandejas soportan al menos 100 Kg?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_14_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_15",
          "title": "8.1.15 ¿Se encuentran los parales de la estantería fijados al piso?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_15_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_16",
          "title": "8.1.16 ¿La balda inferior se encuentra al menos a 10 cm del piso?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_16_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_17",
          "title": "8.1.17 ¿Los acabados del mobiliario son redondeados?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_17_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_18",
          "title": "8.1.18 ¿Se utiliza el cerramiento superior para almacenar documentos u otro material?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_18_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_19",
          "title": "8.1.19 ¿Se encuentra la estantería recostada sobre los muros?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_19_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_20",
          "title": "8.1.20 ¿Tiene la estantería un sistema de identificación visual?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_20_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_21",
          "title": "8.1.21 ¿Presentan oxidación los elementos de la estantería?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_21_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_22",
          "title": "8.1.22 ¿Las bandejas o parales de la estantería se encuentran deformados?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_22_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_23",
          "title": "8.1.23 ¿La Entidad usa planotecas?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_23_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_24",
          "title": "8.1.24 ¿Se encuentran las planotecas en buen estado?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_24_obs", "title": "Observaciones" },

        {
          "type": "radiogroup",
          "name": "C_8_1_25",
          "title": "8.1.25 ¿Se realiza mantenimiento periódico a los sistemas de rodaje de las bandejas de las planotecas?",
          "choices": [{ "value": 0.27, "text": "Cumple" }, { "value": 0.135, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        { "type": "comment", "name": "C_8_1_25_obs", "title": "Observaciones" },
        {
          "type": "panel",
          "name": "8_2_UNIDADES_DE_CONSERVACION",
          "title": "8.2. UNIDADES DE CONSERVACIÓN",
          "elements": [
            {
              "type": "radiogroup",
              "name": "C_8_2_1",
              "title": "8.2.1 ¿Las unidades de conservación están elaboradas en cartón neutro?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_1_obs", "title": "Observaciones" },

            {
              "type": "radiogroup",
              "name": "C_8_2_2",
              "title": "8.2.2 ¿Las unidades de conservación presentan un recubrimiento interno?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_2_obs", "title": "Observaciones" },

            {
              "type": "radiogroup",
              "name": "C_8_2_3",
              "title": "8.2.3 ¿Las Unidades de conservación presentan orificios?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_3_obs", "title": "Observaciones" },

            {
              "type": "radiogroup",
              "name": "C_8_2_4",
              "title": "8.2.4 ¿Las carpetas ofrecen protección a los documentos?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_4_obs", "title": "Observaciones" },

            {
              "type": "radiogroup",
              "name": "C_8_2_5",
              "title": "8.2.5 ¿Es necesario perforar los documentos?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_5_obs", "title": "Observaciones" },

            {
              "type": "radiogroup",
              "name": "C_8_2_6",
              "title": "8.2.6 ¿Se desgastan o se deforman fácilmente las unidades de conservación como cajas y carpetas?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_6_obs", "title": "Observaciones" },

            {
              "type": "radiogroup",
              "name": "C_8_2_7",
              "title": "8.2.7 ¿Los diseños y tamaños son acordes al tipo de documentación que se almacena en ellas?",
              "choices": [
                { "value": 0.95, "text": "Cumple" },
                { "value": 0.475, "text": "Cumple parcial" },
                { "value": 0, "text": "No cumple" }
              ]
            },
            { "type": "comment", "name": "C_8_2_7_obs", "title": "Observaciones" }
          ]
        },
        {
          "type": "html",
          "name": "VIII_CONDICIONES_AMBIENTALES",
          "html": "<h4>8.3. CONDICIONES AMBIENTALES</h4>"
        },
        {
          "type": "radiogroup",
          "name": "C_8_3_1",
          "title": "8.3.1 ¿Se han realizado mediciones de condiciones ambientales en los depósitos de archivo?",
          "choices": [{ "value": 1.11, "text": "Cumple" }, { "value": 0.555, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_3_1_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_3_2",
          "title": "8.3.2 ¿Se han instalado materiales o equipos de modificación de condiciones ambientales en los depósitos de archivo?",
          "choices": [{ "value": 1.11, "text": "Cumple" }, { "value": 0.555, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_3_2_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_3_3",
          "title": "8.3.3 ¿Las ventanas, puertas o celosías permiten el intercambio de aire?",
          "choices": [{ "value": 1.11, "text": "Cumple" }, { "value": 0.555, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_3_3_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_3_4",
          "title": "8.3.4 ¿Estos vanos están acondicionados con filtros que impidan la entrada de partículas o contaminantes al depósito de archivo?",
          "choices": [{ "value": 1.11, "text": "Cumple" }, { "value": 0.555, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_3_4_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_3_5",
          "title": "8.3.5 ¿Se utilizan luminarias fluorescentes de baja intensidad?",
          "choices": [{ "value": 1.11, "text": "Cumple" }, { "value": 0.555, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_3_5_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_3_6",
          "title": "8.3.6 ¿Tiene ventanas que permiten la entrada de luz solar al depósito de archivo?",
          "choices": [{ "value": 1.11, "text": "Cumple" }, { "value": 0.555, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_3_6_obs", "title": "Observaciones"
        },

        {
          "type": "html",
          "name": "VIII_MANTENIMIENTO",
          "html": "<h4>8.4. MANTENIMIENTO</h4>"
        },
        {
          "type": "radiogroup",
          "name": "C_8_4_1",
          "title": "8.4.1 ¿Se realiza la limpieza de las instalaciones? Indique cada cuanto y describa el cómo y los materiales que se utilizan.",
          "choices": [{ "value": 2.22, "text": "Cumple" }, { "value": 1.11, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_4_1_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_4_2",
          "title": "8.4.2 ¿Se realiza la limpieza de la estantería? Indique cada cuanto y describa el cómo y los materiales que se utilizan.",
          "choices": [{ "value": 2.22, "text": "Cumple" }, { "value": 1.11, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_4_2_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_4_3",
          "title": "8.4.3 ¿Se realiza la limpieza de las unidades de conservación? Indique cada cuanto y describa el cómo y los materiales que se utilizan.",
          "choices": [{ "value": 2.22, "text": "Cumple" }, { "value": 1.11, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_4_3_obs", "title": "Observaciones"
        },

        {
          "type": "html",
          "name": "VIII_SEGURIDAD_Y_EMERGENCIAS",
          "html": "<h4>8.5. SEGURIDAD Y EMERGENCIAS</h4>"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_1",
          "title": "8.5.1 ¿Ha dispuesto la Entidad extintores en el área de archivo?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_1_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_2",
          "title": "8.5.2 ¿Los extintores son de agentes limpios?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_2_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_3",
          "title": "8.5.3 ¿Los extintores son recargados anualmente?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_3_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_4",
          "title": "8.5.4 ¿Se han instalado sistemas de alarma contra intrusiones?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_4_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_5",
          "title": "8.5.5 ¿Se han instalado sistemas de alarma para la detección de incendios?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_5_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_6",
          "title": "8.5.6 ¿Se han instalado sistemas de alarma para la detección de inundaciones?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_6_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_7",
          "title": "8.5.7 ¿Se ha proveído la señalización para la identificación de los equipos de atención de desastres y rutas de evacuación?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_7_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_8",
          "title": "8.5.8 ¿Se ha elaborado un Plan de prevención de desastres y situaciones de riesgo?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_8_obs", "title": "Observaciones"
        },
        {
          "type": "radiogroup",
          "name": "C_8_5_9",
          "title": "8.5.9 ¿Se ha realizado el levantamiento y valoración del panorama de riesgo en la Entidad?",
          "choices": [{ "value": 0.74, "text": "Cumple" }, { "value": 0.37, "text": "Cumple parcial" }, { "value": 0, "text": "No cumple" }]
        },
        {
          "type": "comment", "name": "C_8_5_9_obs", "title": "Observaciones"
        }
      ]
    },
    {
      "name": "resultados_finales",
      "title": "RESULTADOS FINALES",
      "elements": [
        { "type": "expression", "name": "total_general", "expression": "round({A_total} + {B_total} + {C_total}, 2)", "visible": false },
        { "type": "expression", "name": "porcentaje_general", "expression": "round({total_general},2)", "visible": false },
        {
          "type": "html",
          "name": "resultado_display",
          "html": "<h3>Resultado General</h3><div>Porcentaje: {porcentaje_general}%</div><div>Categoría: {categoria_general}</div>"
        },
        {
          "type": "expression",
          "name": "categoria_general",
          "expression": "iif({total_general} < 40, 'Crítico', iif({total_general} < 70, 'Moderado', 'Aceptable'))",
          "visible": false
        },
        {
          "type": "signaturepad",
          "name": "firma_responsable",
          "title": "Firma Responsable GDI",
          "width": 600,
          "height": 200
        }
      ]
    }
  ],
  showPrevButton: true,
  firstPageIsStarted: true,
  startSurveyText: "Iniciar Diagnóstico",
  pagePrevText: "Anterior",
  pageNextText: "Siguiente",
  completeText: "Finalizar"
};

const stripDetailElements = (elements) => {
  if (!Array.isArray(elements)) return elements;

  return elements
    .filter((el) => {
      if (!el || typeof el !== 'object') return true;
      if (el.type === 'html' && typeof el.name === 'string' && el.name.toLowerCase().endsWith('_header')) return false;
      if (typeof el.name === 'string' && el.name.endsWith('_detail')) return false;
      return true;
    })
    .map((el) => {
      if (!el || typeof el !== 'object') return el;
      const next = { ...el };
      if (Array.isArray(next.elements)) next.elements = stripDetailElements(next.elements);
      if (Array.isArray(next.templateElements)) next.templateElements = stripDetailElements(next.templateElements);
      if (Array.isArray(next.questions)) next.questions = stripDetailElements(next.questions);
      if (Array.isArray(next.panels)) next.panels = stripDetailElements(next.panels);
      return next;
    });
};

const sanitizedSurveyJson = (() => {
  if (!Array.isArray(surveyJson.pages) || surveyJson.pages.length <= 1) return surveyJson;

  const pages = surveyJson.pages.map((page, idx) => {
    if (idx === 0) return page;
    if (!page || typeof page !== 'object') return page;
    if (page.name === 'resultados_finales') return page;
    return {
      ...page,
      elements: stripDetailElements(page.elements),
    };
  });

  return {
    ...surveyJson,
    pages,
  };
})();

export default sanitizedSurveyJson;