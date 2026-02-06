/**
 * Configuración base del formulario multi-step con SurveyJS
 * Esta configuración puede ser modificada para agregar más pasos y campos
 */

export const surveyJson = {
  title: "Diagnóstico Integral de Archivos Entidades Privadas",
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
      "name": "A_aspectos_administrativos",
      "title": "I. ASPECTOS ADMINISTRATIVOS",
      "elements": [
        {
          "type": "html",
          "name": "A_instancias_asesoras_header",
          "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Instancias asesoras (8.52%)</div><div style='font-size:14px; margin-bottom:10px;'>Resolución 8934 de 2014, Art. 5<br>Decreto 1080 de 2015</div>"
        },

        { "type": "radiogroup", "name": "1_1_1", "title": "1.1.1 ¿La Entidad ha conformado el Comité Interno de Archivo? Si la respuesta es afirmativa indique el Acto Administrativo o documento de constitución y su fecha.", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "1_1_1_detail", "visibleIf": "{1_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "1_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_1_1_1", "expression": "iif({1_1_1} = 'Cumple', 2.13, iif({1_1_1} = 'Parcial', 1.065, 0))", "visible": false },

        { "type": "radiogroup", "name": "1_1_2", "title": "1.1.2 ¿Lo integran los coordinadores de áreas? Especificar quienes conforman el Comité.", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "1_1_2_detail", "visibleIf": "{1_1_2} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "1_1_2_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_1_1_2", "expression": "iif({1_1_2} = 'Cumple', 2.13, iif({1_1_2} = 'Parcial', 1.065, 0))", "visible": false },

        { "type": "radiogroup", "name": "1_1_3", "title": "1.1.3 ¿Las Funciones del Comité Interno de Archivos son las enunciadas en el artículo 2.8.2.16 del Decreto 1080 de 2015?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "1_1_3_detail", "visibleIf": "{1_1_3} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "1_1_3_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_1_1_3", "expression": "iif({1_1_3} = 'Cumple', 2.13, iif({1_1_3} = 'Parcial', 1.065, 0))", "visible": false },

        { "type": "radiogroup", "name": "1_1_4", "title": "1.1.4 ¿La Entidad ha formulado una política de gestión Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "1_1_4_detail", "visibleIf": "{1_1_4} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "1_1_4_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_1_1_4", "expression": "iif({1_1_4} = 'Cumple', 2.13, iif({1_1_4} = 'Parcial', 1.065, 0))", "visible": false },

        { "type": "html", "name": "A_estructura_organizacional_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>ASPECTOS ORGANIZACIONALES (8.35%)-Estructura organizacional (1.28%)</div>" },

        { "type": "radiogroup", "name": "2_1_1", "title": "2.1.1 ¿Tiene la Entidad el Organigrama por dependencias actualizado?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_1_1_detail", "visibleIf": "{2_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_1_1", "expression": "iif({2_1_1} = 'Cumple', 0.64, iif({2_1_1} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_1_2", "title": "2.1.2 ¿Tiene la Entidad un manual de funciones actualizado?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_1_2_detail", "visibleIf": "{2_1_2} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_1_2_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_1_2", "expression": "iif({2_1_2} = 'Cumple', 0.64, iif({2_1_2} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "html", "name": "A_acuerdo_00nm_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Acuerdo 001 de 2024, art. 1.3.2 (0.64%)</div>" },

        { "type": "radiogroup", "name": "2_2_1", "title": "2.2.1 ¿En el Manual de Funciones y de procedimientos se ha regulado el recibo y la entrega de los documentos de archivo por parte de los colaboradores?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_2_1_detail", "visibleIf": "{2_2_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_2_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_2_1", "expression": "iif({2_2_1} = 'Cumple', 0.64, iif({2_2_1} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "html", "name": "A_procesos_procedimientos_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Procesos y Procedimientos (4.48%)</div>" },

        { "type": "radiogroup", "name": "2_3_1", "title": "2.3.1 ¿La Entidad cuenta con el Mapa de Procesos actualizado?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_1_detail", "visibleIf": "{2_3_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_3_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_1", "expression": "iif({2_3_1} = 'Cumple', 0.64, iif({2_3_1} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_3_2", "title": "2.3.2 ¿Ha desarrollado la Entidad un Normograma de acuerdo a su contexto legal?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_2_detail", "visibleIf": "{2_3_2} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_3_2_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_2", "expression": "iif({2_3_2} = 'Cumple', 0.64, iif({2_3_2} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_3_3", "title": "2.3.3 ¿La entidad ha sufrido reestructuraciones, cuántas y cuándo fue la última?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_3_detail", "visibleIf": "{2_3_3} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_3_3_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_3", "expression": "iif({2_3_3} = 'Cumple', 0.64, iif({2_3_3} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_3_4", "title": "2.3.4 ¿La entidad ha tenido cambios en la estructura orgánico-funcional de la entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_4_detail", "visibleIf": "{2_3_4} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_3_4_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_4", "expression": "iif({2_3_4} = 'Cumple', 0.64, iif({2_3_4} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_3_5", "title": "2.3.5 Indique el Acto Administrativo de creación de la Entidad.", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_5_info", "visibleIf": "{2_3_5} != 'No cumple'", "title": "Acto administrativo (si aplica)" },
        { "type": "comment", "name": "2_3_5_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_5", "expression": "iif({2_3_5} = 'Cumple', 0.64, iif({2_3_5} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_3_6", "title": "2.3.6 Indique el número de dependencias de la Entidad", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_6_info", "visibleIf": "{2_3_6} != 'No cumple'", "title": "Número de dependencias (si aplica)" },
        { "type": "comment", "name": "2_3_6_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_6", "expression": "iif({2_3_6} = 'Cumple', 0.64, iif({2_3_6} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_3_7", "title": "2.3.7 Se ha designado a una dependencia específica la función archivística de la Entidad o se ha creado la dependencia, sección o grupo de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_3_7_detail", "visibleIf": "{2_3_7} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_3_7_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_3_7", "expression": "iif({2_3_7} = 'Cumple', 0.64, iif({2_3_7} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "html", "name": "A_acuerdo_001_442_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Acuerdo 001 de 2024, art. 4.4.2 (1.28%)</div>" },

        { "type": "radiogroup", "name": "2_4_1", "title": "2.4.1 ¿La Entidad ha conformado el Archivo Central Institucional?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_4_1_detail", "visibleIf": "{2_4_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_4_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_4_1", "expression": "iif({2_4_1} = 'Cumple', 0.64, iif({2_4_1} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "radiogroup", "name": "2_4_2", "title": "2.4.2 ¿La Entidad ha creado el Archivo Histórico?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_4_2_detail", "visibleIf": "{2_4_2} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_4_2_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_4_2", "expression": "iif({2_4_2} = 'Cumple', 0.64, iif({2_4_2} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "html", "name": "A_acuo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934 de 2014, art. 3 (2.77%)</div>" },

        { "type": "radiogroup", "name": "2_5_1", "title": "2.5.1 ¿Tiene la Entidad funciones relacionadas con la garantía, protección y salvaguardia de los Derechos Humanos y el Derecho Internacional Humanitario?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "2_5_1_detail", "visibleIf": "{2_5_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "2_5_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_2_5_1", "expression": "iif({2_5_1} = 'Cumple', 0.64, iif({2_5_1} = 'Parcial', 0.32, 0))", "visible": false },

        { "type": "html", "name": "A_financiacion_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>3. ASPECTOS DE FINANCIACIÓN (8.33%) - Presupuesto Institucional</div>" },

        { "type": "radiogroup", "name": "3_1_1", "title": "3.1.1 ¿Se tiene un presupuesto designado a las funciones de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "3_1_1_detail", "visibleIf": "{3_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "3_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_3_1_1", "expression": "iif({3_1_1} = 'Cumple', 2.79, iif({3_1_1} = 'Parcial', 1.395, 0))", "visible": false },

        { "type": "radiogroup", "name": "3_1_2", "title": "3.1.2 ¿Se tiene asignado un presupuesto para gastos de funcionamiento del archivo?", "choices": ["Cumple","Parcial","No cumple"], "visibleIf": "{3_1_1} != 'No cumple'" },
        { "type": "text", "name": "3_1_2_detail", "visibleIf": "{3_1_2} != 'No cumple' and {3_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "3_1_2_obs", "visibleIf": "{3_1_1} != 'No cumple'", "title": "Observaciones" },
        { "type": "expression", "name": "c_3_1_2", "expression": "iif({3_1_2} = 'Cumple', 2.79, iif({3_1_2} = 'Parcial', 1.395, 0))", "visible": false },

        { "type": "radiogroup", "name": "3_1_3", "title": "3.1.3 ¿Se ha asignado un presupuesto para gastos de inversión para el archivo?", "choices": ["Cumple","Parcial","No cumple"], "visibleIf": "{3_1_1} != 'No cumple'" },
        { "type": "text", "name": "3_1_3_detail", "visibleIf": "{3_1_3} != 'No cumple' and {3_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "3_1_3_obs", "visibleIf": "{3_1_1} != 'No cumple'", "title": "Observaciones" },
        { "type": "expression", "name": "c_3_1_3", "expression": "iif({3_1_3} = 'Cumple', 2.79, iif({3_1_3} = 'Parcial', 1.395, 0))", "visible": false },

        { "type": "html", "name": "A_formacion_capacitacion_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>4. ASPECTOS DE FORMACIÓN Y CAPACITACIÓN (8.33%) - Ley 594 de 2000 (2.08%)</div>" },

        { "type": "radiogroup", "name": "4_1_1", "title": "4.1.1 ¿Los funcionarios encargados de los archivos han sido capacitados en programas o áreas de su labor?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "4_1_1_detail", "visibleIf": "{4_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "4_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_4_1_1", "expression": "iif({4_1_1} = 'Cumple', 2.08, iif({4_1_1} = 'Parcial', 1.04, 0))", "visible": false },

        { "type": "html", "name": "A_acuerdo_00r_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'> Acuerdo 001 de 2024, art. 1.3.1 (2.08%)</div>" },

        { "type": "radiogroup", "name": "4_2_1", "title": "4.2.1 ¿Los funcionarios han sido capacitados en temas relacionados al manejo y organización de los archivos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "4_2_1_detail", "visibleIf": "{4_2_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "4_2_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_4_2_1", "expression": "iif({4_2_1} = 'Cumple', 2.08, iif({4_2_1} = 'Parcial', 1.04, 0))", "visible": false },

        { "type": "html", "name": "A_acuerdo_0y1_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Acuerdo 001 de 2024, Título 1, Cap. 3 (2.08%)</div>" },

        { "type": "radiogroup", "name": "4_3_1", "title": "4.3.1 ¿Los servidores funcionarios han sido capacitados y entrenados para la atención de emergencias?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "4_3_1_detail", "visibleIf": "{4_3_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "4_3_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_4_3_1", "expression": "iif({4_3_1} = 'Cumple', 2.08, iif({4_3_1} = 'Parcial', 1.04, 0))", "visible": false },

        { "type": "html", "name": "A_acuerdo_00i_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Acuerdo 001 de 2024, art. 4.2.2 (2.08%)</div>" },

        { "type": "radiogroup", "name": "4_4_1", "title": "4.4.1 ¿La Unidad de Correspondencia cuenta con el personal suficiente y capacitado para recibir, enviar y controlar oportunamente el trámite de las comunicaciones de carácter oficial?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "4_4_1_detail", "visibleIf": "{4_4_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "4_4_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_4_4_1", "expression": "iif({4_4_1} = 'Cumple', 2.08, iif({4_4_1} = 'Parcial', 1.04, 0))", "visible": false },

        { "type": "expression", "name": "A_total", "expression": "round({c_1_1_1} + {c_1_1_2} + {c_1_1_3} + {c_1_1_4} + {c_2_1_1} + {c_2_1_2} + {c_2_2_1} + {c_2_3_1} + {c_2_3_2} + {c_2_3_3} + {c_2_3_4} + {c_2_3_5} + {c_2_3_6} + {c_2_3_7} + {c_2_4_1} + {c_2_4_2} + {c_2_5_1} + {c_3_1_1} + {c_3_1_2} + {c_3_1_3} + {c_4_1_1} + {c_4_2_1} + {c_4_3_1} + {c_4_4_1}, 2)", "visible": false }
      ]
    },

    {
      "name": "B_funcion_archivistica",
      "title": "II. ASPECTOS DE FUNCIÓN ARCHIVÍSTICA",
      "elements": [
        { "type": "html", "name": "B_instrumentos_archivisticos_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Instrumentos archivísticos (10.57%)</div><div style='font-size:14px; margin-bottom:10px;'>Resolución 8934 de 2014, art. 3</div>" },

        { "type": "radiogroup", "name": "5_1_1", "title": "5.1.1 ¿La Entidad ha elaborado el Cuadro de Clasificación Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "5_1_1_detail", "visibleIf": "{5_1_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "5_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_1_1", "expression": "iif({5_1_1} = 'Cumple', 2.78, iif({5_1_1} = 'Parcial', 1.39, 0))", "visible": false },

        { "type": "html", "name": "A_acuerdo_00u_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934 de 2014, art. 3 (2.77%)</div>" },

        { "type": "radiogroup", "name": "5_2_1", "title": "5.2.1 ¿La Entidad ha elaborado las Tablas de Retención Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "5_2_1_detail", "visibleIf": "{5_2_1} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "5_2_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_1", "expression": "iif({5_2_1} = 'Cumple', 0.4, iif({5_2_1} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_2_2", "title": "5.2.2 ¿Las Tablas de Retención Documental fueron aprobadas por la instancia competente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "text", "name": "5_2_2_detail", "visibleIf": "{5_2_2} != 'No cumple'", "title": "Detalle" },
        { "type": "comment", "name": "5_2_2_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_2", "expression": "iif({5_2_2} = 'Cumple', 0.4, iif({5_2_2} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_2_3", "title": "5.2.3 ¿Las Tablas de Retención Documental fueron implementadas por la instancia competente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_2_3_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_3", "expression": "iif({5_2_3} = 'Cumple', 0.4, iif({5_2_3} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_2_4", "title": "5.2.4 ¿Han sido actualizadas las Tablas de Retención Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_2_4_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_4", "expression": "iif({5_2_4} = 'Cumple', 0.4, iif({5_2_4} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_2_5", "title": "5.2.5 ¿La Entidad ha elaborado las Tablas de Valoración Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_2_5_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_5", "expression": "iif({5_2_5} = 'Cumple', 0.4, iif({5_2_5} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_2_6", "title": "5.2.6 ¿Las Tablas de Valoración Documental fueron aprobadas por la instancia competente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_2_6_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_6", "expression": "iif({5_2_6} = 'Cumple', 0.4, iif({5_2_6} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_2_7", "title": "5.2.7 ¿Las Tablas de Valoración Documental fueron implementadas por la instancia competente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_2_7_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_2_7", "expression": "iif({5_2_7} = 'Cumple', 0.4, iif({5_2_7} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "html", "name": "A_acuo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934 de 2014, art. 3 (2.77%)</div>" },

        { "type": "radiogroup", "name": "5_3_1", "title": "5.3.1 ¿La Entidad ha elaborado el Programa de Gestión Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_1", "expression": "iif({5_3_1} = 'Cumple', 0.4, iif({5_3_1} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_3_2", "title": "5.3.2 ¿El Programa de Gestión Documental fue aprobado por la instancia competente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_2_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_2", "expression": "iif({5_3_2} = 'Cumple', 0.4, iif({5_3_2} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_3_3", "title": "5.3.3 ¿Se ha realizado la implementación del Programa de Gestión Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_3_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_3", "expression": "iif({5_3_3} = 'Cumple', 0.4, iif({5_3_3} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_3_4", "title": "5.3.4 ¿Se ha realizado el seguimiento al Programa de Gestión Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_4_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_4", "expression": "iif({5_3_4} = 'Cumple', 0.4, iif({5_3_4} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_3_5", "title": "5.3.5 ¿Se ha publicado el Programa de Gestión Documental en la página intranet de la Entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_5_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_5", "expression": "iif({5_3_5} = 'Cumple', 0.4, iif({5_3_5} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_3_6", "title": "5.3.6 ¿Ha implementado la Entidad la elaboración de los inventarios documentales en los archivos de gestión?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_6_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_6", "expression": "iif({5_3_6} = 'Cumple', 0.4, iif({5_3_6} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "radiogroup", "name": "5_3_7", "title": "5.3.7 ¿Ha desarrollado la Entidad los mapas de procesos, flujos documentales, y la descripción de funciones de las unidades administrativas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "5_3_7_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_5_3_7", "expression": "iif({5_3_7} = 'Cumple', 0.4, iif({5_3_7} = 'Parcial', 0.2, 0))", "visible": false },

        { "type": "html", "name": "B_organizacion_descripcion_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Organización y descripción (11.1%)</div><div style='font-size:14px; margin-bottom:10px;'>Resolución 8934 de 2014, art. 4</div>" },

        { "type": "radiogroup", "name": "6_1_1", "title": "6.1.1 ¿Se están conformando los expedientes (físicos y digitales) de acuerdo a los Cuadros de Clasificación adoptados por la Entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "6_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_6_1_1", "expression": "iif({6_1_1} = 'Cumple', 0.17, iif({6_1_1} = 'Parcial', 0.085, 0))", "visible": false },

        { "type": "html", "name": "A_aytrdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934 de 2014, art. 4 (1.39%)</div>" },

        { "type": "radiogroup", "name": "6_1_2", "title": "6.1.2 ¿Se realiza la foliación de los expedientes (físicos y digitales) en su etapa de gestión?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_2", "expression": "iif({6_1_2} = 'Cumple', 0.17, iif({6_1_2} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_1_3", "title": "6.1.3 ¿Los expedientes (físicos y digitales) son identificados de acuerdo al sistema de descripción adoptado por la Entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_3", "expression": "iif({6_1_3} = 'Cumple', 0.17, iif({6_1_3} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_1_4", "title": "6.1.4 ¿Se realiza y mantiene actualizado el inventario de los expedientes (físicos y digitales) en los archivos de gestión?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_4", "expression": "iif({6_1_4} = 'Cumple', 0.17, iif({6_1_4} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_4_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_1_5", "title": "6.1.5 ¿La Entidad realiza o ha realizado procesos de digitalización de los expedientes?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_5", "expression": "iif({6_1_5} = 'Cumple', 0.17, iif({6_1_5} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_5_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_1_6", "title": "6.1.6 ¿Se han realizado las transferencias primarias (físicas o digitales)?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_6", "expression": "iif({6_1_6} = 'Cumple', 0.17, iif({6_1_6} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_6_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_1_7", "title": "6.1.7 ¿Tiene la entidad documentos dispuestos sin ningún criterio de organización archivística (Fondos Acumulados)?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_7", "expression": "iif({6_1_7} = 'Cumple', 0.17, iif({6_1_7} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_7_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_1_8", "title": "6.1.8 ¿En los archivos de gestión se utilizan unidades como AZ o carpetas argolladas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_1_8", "expression": "iif({6_1_8} = 'Cumple', 0.17, iif({6_1_8} = 'Parcial', 0.085, 0))", "visible": false },
        { "type": "comment", "name": "6_1_8_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_2_1", "title": "6.2.1 ¿Las carpetas reflejan las series y subseries documentales correspondientes a la Unidad administrativa?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_2_1", "expression": "iif({6_2_1} = 'Cumple', 0.35, iif({6_2_1} = 'Parcial', 0.175, 0))", "visible": false },
        { "type": "comment", "name": "6_2_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_2_2", "title": "6.2.2 ¿Se realiza préstamo de documentos para trámites internos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_2_2", "expression": "iif({6_2_2} = 'Cumple', 0.35, iif({6_2_2} = 'Parcial', 0.175, 0))", "visible": false },
        { "type": "comment", "name": "6_2_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_2_3", "title": "6.2.3 ¿Las dependencias realizan registro de los préstamos y solicitan su devolución?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_2_3", "expression": "iif({6_2_3} = 'Cumple', 0.35, iif({6_2_3} = 'Parcial', 0.175, 0))", "visible": false },
        { "type": "comment", "name": "6_2_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_2_4", "title": "6.2.4 ¿Las cajas usadas para la transferencia primaria se encuentran identificadas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_2_4", "expression": "iif({6_2_4} = 'Cumple', 0.35, iif({6_2_4} = 'Parcial', 0.175, 0))", "visible": false },
        { "type": "comment", "name": "6_2_4_obs", "title": "Observaciones" },

        { "type": "html", "name": "A_ttrdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Acuerdo 001 de 2024, art. 4.3.1.8 (1.39%)</div>" },

        { "type": "radiogroup", "name": "6_3_1", "title": "6.3.1 ¿Se ha implementado la Hoja de Control de documentos al interior del expediente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_3_1", "expression": "iif({6_3_1} = 'Cumple', 0.7, iif({6_3_1} = 'Parcial', 0.35, 0))", "visible": false },
        { "type": "comment", "name": "6_3_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_3_2", "title": "6.3.2 ¿La Entidad ha elaborado instrumentos de descripción?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_3_2", "expression": "iif({6_3_2} = 'Cumple', 0.7, iif({6_3_2} = 'Parcial', 0.35, 0))", "visible": false },
        { "type": "comment", "name": "6_3_2_obs", "title": "Observaciones" },

        { "type": "html", "name": "B_acuerdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934, art. 2</div>" },

        { "type": "radiogroup", "name": "6_4_1", "title": "6.4.1 ¿La Entidad ha adoptado el Formato Único de Inventario Documental?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_4_1", "expression": "iif({6_4_1} = 'Cumple', 1.39, iif({6_4_1} = 'Parcial', 0.695, 0))", "visible": false },
        { "type": "comment", "name": "6_4_1_obs", "title": "Observaciones" },

        { "type": "html", "name": "C_acuerdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934, art. 2</div>" },

        { "type": "radiogroup", "name": "6_5_1", "title": "6.5.1 ¿El material gráfico es extraído y se deja en su lugar un testigo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_5_1", "expression": "iif({6_5_1} = 'Cumple', 0.7, iif({6_5_1} = 'Parcial', 0.35, 0))", "visible": false },
        { "type": "comment", "name": "6_5_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_5_2", "title": "6.5.2 ¿El material gráfico es almacenado en la sección del archivo dispuesta para conservar distintos formatos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_5_2", "expression": "iif({6_5_2} = 'Cumple', 0.7, iif({6_5_2} = 'Parcial', 0.35, 0))", "visible": false },
        { "type": "comment", "name": "6_5_2_obs", "title": "Observaciones" },

        { "type": "html", "name": "D_acuerdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'> Resolución 8934 de 2014, art. 8</div>" },

        { "type": "radiogroup", "name": "6_6_1", "title": "6.6.1 ¿Se ha establecido un procedimiento para la Eliminación de documentos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_6_1", "expression": "iif({6_6_1} = 'Cumple', 0.7, iif({6_6_1} = 'Parcial', 0.35, 0))", "visible": false },
        { "type": "comment", "name": "6_6_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "6_6_2", "title": "6.6.2 ¿El procedimiento para eliminación de documentos está acorde con lo dispuesto en el Acuerdo 04 de 2013?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_6_2", "expression": "iif({6_6_2} = 'Cumple', 0.7, iif({6_6_2} = 'Parcial', 0.35, 0))", "visible": false },
        { "type": "comment", "name": "6_6_2_obs", "title": "Observaciones" },

        { "type": "html", "name": "E_acuerdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Resolución 8934 de 2014, art. 8 -  (1.39%)</div>" },

        { "type": "radiogroup", "name": "6_7_1", "title": "6.7.1 ¿Se han perdido parcial o totalmente uno más expedientes en la Entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_7_1", "expression": "iif({6_7_1} = 'Cumple', 1.39, iif({6_7_1} = 'Parcial', 0.695, 0))", "visible": false },
        { "type": "comment", "name": "6_7_1_obs", "title": "Observaciones" },

        { "type": "html", "name": "F_acuerdo_001_132_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Acuerdo 001 de 2024, Título 9, Cap. 5</div>" },

        { "type": "radiogroup", "name": "6_8_1", "title": "6.8.1 ¿Las Historias Laborales son organizadas de acuerdo a lo dispuesto en el Acuerdo 001 de 2024, título 9, capítulo 5?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_6_8_1", "expression": "iif({6_8_1} = 'Cumple', 1.39, iif({6_8_1} = 'Parcial', 0.695, 0))", "visible": false },
        { "type": "comment", "name": "6_8_1_obs", "title": "Observaciones" },

        { "type": "html", "name": "B_com_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Comunicaciones Oficiales (12%)</div><div style='font-size:14px; margin-bottom:10px;'>Acuerdo 001 de 2024, Cap. 2</div>" },

        { "type": "radiogroup", "name": "7_1_1", "title": "7.1.1 ¿La Entidad ha creado o conformado la Unidad de Correspondencia?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_1", "expression": "iif({7_1_1} = 'Cumple', 1.71, iif({7_1_1} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "7_1_2", "title": "7.1.2 ¿La Entidad ha adoptado una política respecto las firmas responsables?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_2", "expression": "iif({7_1_2} = 'Cumple', 1.71, iif({7_1_2} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "7_1_3", "title": "7.1.3 ¿La entidad cuenta con el procedimiento de radicación de documentos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_3", "expression": "iif({7_1_3} = 'Cumple', 1.71, iif({7_1_3} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "7_1_4", "title": "7.1.4 ¿La entidad cuenta con el procedimiento para la numeración de actos administrativos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_4", "expression": "iif({7_1_4} = 'Cumple', 1.71, iif({7_1_4} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_4_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "7_1_5", "title": "7.1.5 ¿Se han desarrollado e implementado planillas, formatos o controles para certificar la recepción de los documentos a nivel interno?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_5", "expression": "iif({7_1_5} = 'Cumple', 1.71, iif({7_1_5} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_5_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "7_1_6", "title": "7.1.6 ¿Se han dispuesto servicios de alerta para el seguimiento de tiempos de respuesta?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_6", "expression": "iif({7_1_6} = 'Cumple', 1.71, iif({7_1_6} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_6_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "7_1_7", "title": "7.1.7 ¿La entidad ha publicado el horario de atención al público de la unidad de correspondencia?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_7_1_7", "expression": "iif({7_1_7} = 'Cumple', 1.71, iif({7_1_7} = 'Parcial', 0.855, 0))", "visible": false },
        { "type": "comment", "name": "7_1_7_obs", "title": "Observaciones" },

        { "type": "expression", "name": "B_total", "expression": "round({c_5_1_1} + {c_5_2_1} + {c_5_2_2} + {c_5_2_3} + {c_5_2_4} + {c_5_2_5} + {c_5_2_6} + {c_5_2_7} + {c_5_3_1} + {c_5_3_2} + {c_5_3_3} + {c_5_3_4} + {c_5_3_5} + {c_5_3_6} + {c_5_3_7} + {c_6_1_1} + {c_6_1_2} + {c_6_1_3} + {c_6_1_4} + {c_6_1_5} + {c_6_1_6} + {c_6_1_7} + {c_6_1_8} + {c_6_2_1} + {c_6_2_2} + {c_6_2_3} + {c_6_2_4} + {c_6_3_1} + {c_6_3_2} + {c_6_4_1} + {c_6_5_1} + {c_6_5_2} + {c_6_6_1} + {c_6_6_2} + {c_6_7_1} + {c_6_8_1} + {c_7_1_1} + {c_7_1_2} + {c_7_1_3} + {c_7_1_4} + {c_7_1_5} + {c_7_1_6} + {c_7_1_7}, 2)", "visible": false }
      ]
    },

    {
      "name": "C_preservacion",
      "title": "III. ASPECTOS DE PRESERVACIÓN",
      "elements": [
        { "type": "html", "name": "J_acuerdo_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Condiciones de edificios y locales destinados a archivos (7%)- Acuerdo 001 de 2024, Título 3, Caps. 1-2</div>" },

        { "type": "radiogroup", "name": "8_1_1", "title": "8.1.1 ¿Cuenta la entidad con los tres depósitos para almacenamiento?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "8_1_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_8_1_1", "expression": "iif({8_1_1} = 'Cumple', 0.28, iif({8_1_1} = 'Parcial', 0.14, 0))", "visible": false },

        { "type": "radiogroup", "name": "8_1_2", "title": "8.1.2 ¿El terreno se presenta sin riesgos de Humedad subterránea o problemas de inundación y ofrece estabilidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_2", "expression": "iif({8_1_2} = 'Cumple', 0.28, iif({8_1_2} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_3", "title": "8.1.3 ¿El terreno se encuentra situado lejos de industrias contaminantes o que presenten riesgos de un posible peligro por atentados u objetivos bélicos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_3", "expression": "iif({8_1_3} = 'Cumple', 0.28, iif({8_1_3} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_4", "title": "8.1.4 ¿El espacio ofrece suficiente espacio para albergar la documentación acumulada y su natural incremento?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_4", "expression": "iif({8_1_4} = 'Cumple', 0.28, iif({8_1_4} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_4_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_5", "title": "8.1.5 ¿Los pisos, muros, techos y puertas están construidos con materiales resistentes?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_5", "expression": "iif({8_1_5} = 'Cumple', 0.28, iif({8_1_5} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_5_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_6", "title": "8.1.6 ¿Las pinturas empleadas presentan propiedades ignífugas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_6", "expression": "iif({8_1_6} = 'Cumple', 0.28, iif({8_1_6} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_6_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_7", "title": "8.1.7 ¿La resistencia de las placas es igual o mayor a 1200 Kg/m2?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_7", "expression": "iif({8_1_7} = 'Cumple', 0.28, iif({8_1_7} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_7_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_8", "title": "8.1.8 ¿El depósito fue diseñado y dimensionado teniendo en cuenta la manipulación, transporte y seguridad de los documentos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_8", "expression": "iif({8_1_8} = 'Cumple', 0.28, iif({8_1_8} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_8_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_9", "title": "8.1.9 ¿Fue adecuado el depósito climáticamente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_9", "expression": "iif({8_1_9} = 'Cumple', 0.28, iif({8_1_9} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_9_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_10", "title": "8.1.10 ¿Las áreas destinadas a custodia cuentan con elementos de control y aislamiento?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_10", "expression": "iif({8_1_10} = 'Cumple', 0.28, iif({8_1_10} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_10_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_11", "title": "8.1.11 ¿Las zonas técnicas o de trabajo archivístico, consulta, limpieza, entre otras actividades se encuentran fuera del área de almacenamiento?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_11", "expression": "iif({8_1_11} = 'Cumple', 0.28, iif({8_1_11} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_11_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_12", "title": "8.1.12 ¿La estantería está diseñada para almacenar las unidades de conservación usadas por la Entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_12", "expression": "iif({8_1_12} = 'Cumple', 0.28, iif({8_1_12} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_12_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_13", "title": "8.1.13 ¿La estantería está elaborada en láminas metálicas, tratadas con tratamiento anticorrosivo y pintura horneada?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_13", "expression": "iif({8_1_13} = 'Cumple', 0.28, iif({8_1_13} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_13_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_14", "title": "8.1.14 ¿Las bandejas soportan al menos 100 Kg?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_14", "expression": "iif({8_1_14} = 'Cumple', 0.28, iif({8_1_14} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_14_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_15", "title": "8.1.15 ¿Se encuentran los parales de la estantería fijados al piso?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_15", "expression": "iif({8_1_15} = 'Cumple', 0.28, iif({8_1_15} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_15_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_16", "title": "8.1.16 ¿La balda inferior se encuentra al menos a 10 cm del piso?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_16", "expression": "iif({8_1_16} = 'Cumple', 0.28, iif({8_1_16} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_16_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_17", "title": "8.1.17 ¿Los acabados del mobiliario son redondeados?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_17", "expression": "iif({8_1_17} = 'Cumple', 0.28, iif({8_1_17} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_17_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_18", "title": "8.1.18 ¿Se utiliza el cerramiento superior para almacenar documentos u otro material?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_18", "expression": "iif({8_1_18} = 'Cumple', 0.28, iif({8_1_18} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_18_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_19", "title": "8.1.19 ¿Se encuentra la estantería recostada sobre los muros?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_19", "expression": "iif({8_1_19} = 'Cumple', 0.28, iif({8_1_19} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_19_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_20", "title": "8.1.20 ¿Tiene la estantería un sistema de identificación visual?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_20", "expression": "iif({8_1_20} = 'Cumple', 0.28, iif({8_1_20} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_20_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_21", "title": "8.1.21 ¿Presentan oxidación los elementos de la estantería?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_21", "expression": "iif({8_1_21} = 'Cumple', 0.28, iif({8_1_21} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_21_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_22", "title": "8.1.22 ¿Las bandejas o parales de la estantería se encuentran deformados?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_22", "expression": "iif({8_1_22} = 'Cumple', 0.28, iif({8_1_22} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_22_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_23", "title": "8.1.23 ¿La Entidad usa planotecas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_23", "expression": "iif({8_1_23} = 'Cumple', 0.28, iif({8_1_23} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_23_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_24", "title": "8.1.24 ¿Se encuentran las planotecas en buen estado?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_24", "expression": "iif({8_1_24} = 'Cumple', 0.28, iif({8_1_24} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_24_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_1_25", "title": "8.1.25 ¿Se realiza mantenimiento periódico a los sistemas de rodaje de las bandejas de las planotecas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_1_25", "expression": "iif({8_1_25} = 'Cumple', 0.28, iif({8_1_25} = 'Parcial', 0.14, 0))", "visible": false },
        { "type": "comment", "name": "8_1_25_obs", "title": "Observaciones" },

        { "type": "html", "name": "Q_acuerdo_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Unidades de Conservación (7%) - Acuerdo 001 de 2024, Título 3, Caps. 1-2</div>" },

        { "type": "radiogroup", "name": "8_2_1", "title": "8.2.1 ¿Las unidades de conservación están elaboradas en cartón neutro?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_1", "expression": "iif({8_2_1} = 'Cumple', 1.0, iif({8_2_1} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_2_2", "title": "8.2.2 ¿Las unidades de conservación presentan un recubrimiento interno?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_2", "expression": "iif({8_2_2} = 'Cumple', 1.0, iif({8_2_2} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_2_3", "title": "8.2.3 ¿Las Unidades de conservación presentan orificios?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_3", "expression": "iif({8_2_3} = 'Cumple', 1.0, iif({8_2_3} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_2_4", "title": "8.2.4 ¿Las carpetas ofrecen protección a los documentos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_4", "expression": "iif({8_2_4} = 'Cumple', 1.0, iif({8_2_4} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_4_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_2_5", "title": "8.2.5 ¿Es necesario perforar los documentos?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_5", "expression": "iif({8_2_5} = 'Cumple', 1.0, iif({8_2_5} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_5_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_2_6", "title": "8.2.6 ¿Se desgastan o se deforman fácilmente las unidades de conservación como cajas y carpetas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_6", "expression": "iif({8_2_6} = 'Cumple', 1.0, iif({8_2_6} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_6_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_2_7", "title": "8.2.7 ¿Los diseños y tamaños son acordes al tipo de documentación que se almacena en ellas?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_2_7", "expression": "iif({8_2_7} = 'Cumple', 1.0, iif({8_2_7} = 'Parcial', 0.5, 0))", "visible": false },
        { "type": "comment", "name": "8_2_7_obs", "title": "Observaciones" },

        { "type": "html", "name": "TY_acuerdo_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Condiciones ambientales (7%) - Acuerdo 001 de 2024, Título 3, Caps. 1-2</div>" },

        { "type": "radiogroup", "name": "8_3_1", "title": "8.3.1 ¿Se han realizado mediciones de condiciones ambientales en los depósitos de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_3_1", "expression": "iif({8_3_1} = 'Cumple', 1.16, iif({8_3_1} = 'Parcial', 0.58, 0))", "visible": false },
        { "type": "comment", "name": "8_3_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_3_2", "title": "8.3.2 ¿Se han instalado materiales o equipos de modificación de condiciones ambientales en los depósitos de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_3_2", "expression": "iif({8_3_2} = 'Cumple', 1.16, iif({8_3_2} = 'Parcial', 0.58, 0))", "visible": false },
        { "type": "comment", "name": "8_3_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_3_3", "title": "8.3.3 ¿Las ventanas, puertas o celosías permiten el intercambio de aire?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_3_3", "expression": "iif({8_3_3} = 'Cumple', 1.16, iif({8_3_3} = 'Parcial', 0.58, 0))", "visible": false },
        { "type": "comment", "name": "8_3_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_3_4", "title": "8.3.4 ¿Estos vanos están acondicionados con filtros que impidan la entrada de partículas o contaminantes al depósito de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_3_4", "expression": "iif({8_3_4} = 'Cumple', 1.16, iif({8_3_4} = 'Parcial', 0.58, 0))", "visible": false },
        { "type": "comment", "name": "8_3_4_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_3_5", "title": "8.3.5 ¿Se utilizan luminarias fluorescentes de baja intensidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_3_5", "expression": "iif({8_3_5} = 'Cumple', 1.16, iif({8_3_5} = 'Parcial', 0.58, 0))", "visible": false },
        { "type": "comment", "name": "8_3_5_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_3_6", "title": "8.3.6 ¿Tiene ventanas que permiten la entrada de luz solar al depósito de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_3_6", "expression": "iif({8_3_6} = 'Cumple', 1.16, iif({8_3_6} = 'Parcial', 0.58, 0))", "visible": false },
        { "type": "comment", "name": "8_3_6_obs", "title": "Observaciones" },

        { "type": "html", "name": "WER_acuerdo_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Mantenimiento (7%) -  Acuerdo 001 de 2024, Título 3, Caps. 1-2</div>" },

        { "type": "radiogroup", "name": "8_4_1", "title": "8.4.1 ¿Se realiza la limpieza de las instalaciones? Indique cada cuanto y describa el cómo y los materiales que se utilizan.", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "comment", "name": "8_4_1_obs", "title": "Observaciones" },
        { "type": "expression", "name": "c_8_4_1", "expression": "iif({8_4_1} = 'Cumple', 2.33, iif({8_4_1} = 'Parcial', 1.165, 0))", "visible": false },

        { "type": "radiogroup", "name": "8_4_2", "title": "8.4.2 ¿Se realiza la limpieza de la estantería? Indique cada cuanto y describa el cómo y los materiales que se utilizan.", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_4_2", "expression": "iif({8_4_2} = 'Cumple', 2.33, iif({8_4_2} = 'Parcial', 1.165, 0))", "visible": false },
        { "type": "comment", "name": "8_4_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_4_3", "title": "8.4.3 ¿Se realiza la limpieza de las unidades de conservación? Indique cada cuanto y describa el cómo y los materiales que se utilizan.", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_4_3", "expression": "iif({8_4_3} = 'Cumple', 2.33, iif({8_4_3} = 'Parcial', 1.165, 0))", "visible": false },
        { "type": "comment", "name": "8_4_3_obs", "title": "Observaciones" },

        { "type": "html", "name": "A_aco_header", "html": "<div style='font-size:18px; font-weight:bold; margin-top:20px;'>Seguridad y emergencias (7%) - Acuerdo 001 de 2024, Título 3, Caps. 1-2</div>" },

        { "type": "radiogroup", "name": "8_5_1", "title": "8.5.1 ¿Ha dispuesto la Entidad extintores en el área de archivo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_1", "expression": "iif({8_5_1} = 'Cumple', 0.78, iif({8_5_1} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_1_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_2", "title": "8.5.2 ¿Los extintores son de agentes limpios?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_2", "expression": "iif({8_5_2} = 'Cumple', 0.78, iif({8_5_2} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_2_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_3", "title": "8.5.3 ¿Los extintores son recargados anualmente?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_3", "expression": "iif({8_5_3} = 'Cumple', 0.78, iif({8_5_3} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_3_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_4", "title": "8.5.4 ¿Se han instalado sistemas de alarma contra intrusiones?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_4", "expression": "iif({8_5_4} = 'Cumple', 0.78, iif({8_5_4} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_4_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_5", "title": "8.5.5 ¿Se han instalado sistemas de alarma para la detección de incendios?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_5", "expression": "iif({8_5_5} = 'Cumple', 0.78, iif({8_5_5} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_5_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_6", "title": "8.5.6 ¿Se han instalado sistemas de alarma para la detección de inundaciones?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_6", "expression": "iif({8_5_6} = 'Cumple', 0.78, iif({8_5_6} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_6_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_7", "title": "8.5.7 ¿Se ha proveído la señalización para la identificación de los equipos de atención de desastres y rutas de evacuación?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_7", "expression": "iif({8_5_7} = 'Cumple', 0.78, iif({8_5_7} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_7_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_8", "title": "8.5.8 ¿Se ha elaborado un Plan de prevención de desastres y situaciones de riesgo?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_8", "expression": "iif({8_5_8} = 'Cumple', 0.78, iif({8_5_8} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_8_obs", "title": "Observaciones" },

        { "type": "radiogroup", "name": "8_5_9", "title": "8.5.9 ¿Se ha realizado el levantamiento y valoración del panorama de riesgo en la Entidad?", "choices": ["Cumple","Parcial","No cumple"] },
        { "type": "expression", "name": "c_8_5_9", "expression": "iif({8_5_9} = 'Cumple', 0.78, iif({8_5_9} = 'Parcial', 0.39, 0))", "visible": false },
        { "type": "comment", "name": "8_5_9_obs", "title": "Observaciones" },

        { "type": "expression", "name": "C_total", "expression": "round({c_8_1_1} + {c_8_1_2} + {c_8_1_3} + {c_8_1_4} + {c_8_1_5} + {c_8_1_6} + {c_8_1_7} + {c_8_1_8} + {c_8_1_9} + {c_8_1_10} + {c_8_1_11} + {c_8_1_12} + {c_8_1_13} + {c_8_1_14} + {c_8_1_15} + {c_8_1_16} + {c_8_1_17} + {c_8_1_18} + {c_8_1_19} + {c_8_1_20} + {c_8_1_21} + {c_8_1_22} + {c_8_1_23} + {c_8_1_24} + {c_8_1_25} + {c_8_2_1} + {c_8_2_2} + {c_8_2_3} + {c_8_2_4} + {c_8_2_5} + {c_8_2_6} + {c_8_2_7} + {c_8_3_1} + {c_8_3_2} + {c_8_3_3} + {c_8_3_4} + {c_8_3_5} + {c_8_3_6} + {c_8_4_1} + {c_8_4_2} + {c_8_4_3} + {c_8_5_1} + {c_8_5_2} + {c_8_5_3} + {c_8_5_4} + {c_8_5_5} + {c_8_5_6} + {c_8_5_7} + {c_8_5_8} + {c_8_5_9}, 2)", "visible": false }
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