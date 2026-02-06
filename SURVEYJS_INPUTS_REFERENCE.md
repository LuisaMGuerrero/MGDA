# 📝 Referencia Completa de Inputs de SurveyJS

Guía completa de todos los tipos de preguntas/inputs disponibles en SurveyJS con sus opciones y ejemplos.

## 📚 Índice

1. [Inputs de Texto](#1-inputs-de-texto)
2. [Selección Única](#2-selección-única)
3. [Selección Múltiple](#3-selección-múltiple)
4. [Inputs Numéricos y Fecha](#4-inputs-numéricos-y-fecha)
5. [Inputs Booleanos y Rating](#5-inputs-booleanos-y-rating)
6. [Inputs de Archivo](#6-inputs-de-archivo)
7. [Inputs Avanzados](#7-inputs-avanzados)
8. [Validadores](#8-validadores)
9. [Lógica Condicional](#9-lógica-condicional)

---

## 1. Inputs de Texto

### Text (Texto Simple)
```javascript
{
  type: "text",
  name: "firstName",
  title: "Nombre",
  placeholder: "Ingrese su nombre",
  isRequired: true,
  maxLength: 50,
  minLength: 2,
  inputType: "text" // "email", "tel", "url", "password", "color"
}
```

### Comment (Área de Texto)
```javascript
{
  type: "comment",
  name: "feedback",
  title: "Comentarios",
  placeholder: "Escriba aquí...",
  rows: 5,
  maxLength: 500,
  autoGrow: true
}
```

### Email
```javascript
{
  type: "text",
  name: "email",
  title: "Correo Electrónico",
  inputType: "email",
  validators: [{ type: "email" }]
}
```

### Teléfono
```javascript
{
  type: "text",
  name: "phone",
  title: "Teléfono",
  inputType: "tel",
  placeholder: "+1 (555) 123-4567"
}
```

---

## 2. Selección Única

### Radiogroup (Radio Buttons)
```javascript
{
  type: "radiogroup",
  name: "gender",
  title: "Género",
  choices: [
    { value: "male", text: "Masculino" },
    { value: "female", text: "Femenino" },
    { value: "other", text: "Otro" }
  ],
  colCount: 3,
  hasOther: true,
  showClearButton: true
}
```

### Dropdown (Lista Desplegable)
```javascript
{
  type: "dropdown",
  name: "country",
  title: "País",
  choices: ["España", "México", "Argentina"],
  placeholder: "Seleccione un país",
  searchEnabled: true,
  allowClear: true
}
```

### ImagePicker
```javascript
{
  type: "imagepicker",
  name: "avatar",
  title: "Seleccione avatar",
  choices: [
    {
      value: "avatar1",
      imageLink: "https://ejemplo.com/avatar1.png"
    }
  ],
  imageHeight: 150,
  imageWidth: 150,
  multiSelect: false
}
```

---

## 3. Selección Múltiple

### Checkbox
```javascript
{
  type: "checkbox",
  name: "interests",
  title: "Intereses",
  choices: [
    { value: "tech", text: "Tecnología" },
    { value: "sports", text: "Deportes" }
  ],
  hasSelectAll: true,
  maxSelectedChoices: 3,
  validators: [
    {
      type: "answercount",
      minCount: 1,
      maxCount: 3
    }
  ]
}
```

### TagBox
```javascript
{
  type: "tagbox",
  name: "skills",
  title: "Habilidades",
  choices: ["JavaScript", "Python", "React"],
  searchEnabled: true,
  closeOnSelect: false
}
```

---

## 4. Inputs Numéricos y Fecha

### Number
```javascript
{
  type: "text",
  name: "age",
  title: "Edad",
  inputType: "number",
  min: 18,
  max: 120,
  step: 1
}
```

### Range (Slider)
```javascript
{
  type: "text",
  name: "satisfaction",
  title: "Satisfacción",
  inputType: "range",
  min: 0,
  max: 100,
  step: 10
}
```

### Date
```javascript
{
  type: "text",
  name: "birthdate",
  title: "Fecha de Nacimiento",
  inputType: "date",
  min: "1900-01-01",
  max: "2024-12-31"
}
```

### DateTime
```javascript
{
  type: "text",
  name: "appointment",
  title: "Fecha y Hora",
  inputType: "datetime-local"
}
```

### Time
```javascript
{
  type: "text",
  name: "meetingTime",
  title: "Hora",
  inputType: "time",
  min: "09:00",
  max: "18:00"
}
```

---

## 5. Inputs Booleanos y Rating

### Boolean
```javascript
{
  type: "boolean",
  name: "acceptTerms",
  title: "Acepto términos",
  isRequired: true,
  defaultValue: false
}
```

### Rating
```javascript
{
  type: "rating",
  name: "serviceRating",
  title: "Califique el servicio",
  rateMin: 1,
  rateMax: 5,
  minRateDescription: "Muy malo",
  maxRateDescription: "Excelente",
  displayMode: "buttons" // "stars", "dropdown"
}
```

### Rating con Emojis
```javascript
{
  type: "rating",
  name: "experience",
  title: "Experiencia",
  rateValues: [
    { value: 1, text: "😞" },
    { value: 2, text: "😐" },
    { value: 3, text: "🙂" },
    { value: 4, text: "😊" },
    { value: 5, text: "😍" }
  ]
}
```

---

## 6. Inputs de Archivo

### File
```javascript
{
  type: "file",
  name: "resume",
  title: "Subir CV",
  acceptedTypes: ".pdf,.doc,.docx",
  maxSize: 5242880, // 5MB
  allowMultiple: false,
  storeDataAsText: true
}
```

### File Múltiple
```javascript
{
  type: "file",
  name: "documents",
  title: "Documentos",
  allowMultiple: true,
  maxSize: 10485760,
  acceptedTypes: "image/*,.pdf"
}
```

---

## 7. Inputs Avanzados

### Matrix
```javascript
{
  type: "matrix",
  name: "quality",
  title: "Evalúe aspectos",
  columns: [
    { value: 1, text: "Malo" },
    { value: 2, text: "Regular" },
    { value: 3, text: "Bueno" }
  ],
  rows: [
    { value: "service", text: "Servicio" },
    { value: "quality", text: "Calidad" }
  ],
  isAllRowRequired: true
}
```

### MatrixDynamic
```javascript
{
  type: "matrixdynamic",
  name: "family",
  title: "Miembros familia",
  columns: [
    {
      name: "name",
      title: "Nombre",
      cellType: "text"
    },
    {
      name: "age",
      title: "Edad",
      cellType: "text",
      inputType: "number"
    }
  ],
  rowCount: 1,
  minRowCount: 1,
  maxRowCount: 10,
  addRowText: "Agregar"
}
```

### PanelDynamic
```javascript
{
  type: "paneldynamic",
  name: "addresses",
  title: "Direcciones",
  templateElements: [
    {
      type: "text",
      name: "street",
      title: "Calle"
    },
    {
      type: "text",
      name: "city",
      title: "Ciudad"
    }
  ],
  panelCount: 1,
  maxPanelCount: 5,
  panelAddText: "Agregar dirección"
}
```

### Ranking
```javascript
{
  type: "ranking",
  name: "priorities",
  title: "Ordene por prioridad",
  choices: [
    "Salario",
    "Ambiente",
    "Crecimiento"
  ],
  selectToRankEnabled: true
}
```

### SignaturePad
```javascript
{
  type: "signaturepad",
  name: "signature",
  title: "Firma",
  width: 600,
  height: 200,
  penColor: "#000000"
}
```

### HTML
```javascript
{
  type: "html",
  name: "info",
  html: "<h3>Información</h3><p>Texto...</p>"
}
```

### Expression (Calculado)
```javascript
{
  type: "expression",
  name: "total",
  title: "Total",
  expression: "{quantity} * {price}",
  displayStyle: "currency",
  currency: "USD"
}
```

---

## 8. Validadores

### Numeric
```javascript
validators: [
  {
    type: "numeric",
    minValue: 18,
    maxValue: 65,
    text: "Entre 18 y 65"
  }
]
```

### Text
```javascript
validators: [
  {
    type: "text",
    minLength: 5,
    maxLength: 50,
    text: "Entre 5 y 50 caracteres"
  }
]
```

### Email
```javascript
validators: [
  {
    type: "email",
    text: "Email inválido"
  }
]
```

### Regex
```javascript
validators: [
  {
    type: "regex",
    regex: "^[A-Z]{2}\\d{6}$",
    text: "Formato: AA123456"
  }
]
```

### AnswerCount
```javascript
validators: [
  {
    type: "answercount",
    minCount: 2,
    maxCount: 5,
    text: "Seleccione 2-5 opciones"
  }
]
```

### Expression
```javascript
validators: [
  {
    type: "expression",
    expression: "{age} >= 18",
    text: "Debe ser mayor de edad"
  }
]
```

---

## 9. Lógica Condicional

### VisibleIf
```javascript
{
  type: "text",
  name: "companyName",
  title: "Empresa",
  visibleIf: "{employed} = true"
}
```

### EnableIf
```javascript
{
  type: "text",
  name: "other",
  title: "Especifique",
  enableIf: "{reason} = 'other'"
}
```

### RequiredIf
```javascript
{
  type: "text",
  name: "guardian",
  title: "Tutor",
  requiredIf: "{age} < 18"
}
```

### Expresiones Complejas
```javascript
// AND
visibleIf: "{age} >= 18 and {country} = 'USA'"

// OR
visibleIf: "{role} = 'admin' or {role} = 'manager'"

// Contains
visibleIf: "{interests} contains 'tech'"

// Empty/NotEmpty
visibleIf: "{email} notempty"
visibleIf: "{phone} empty"

// Comparaciones
visibleIf: "{salary} > 50000"
```

---

## 10. Configuración Global

```javascript
{
  title: "Mi Formulario",
  description: "Descripción",
  logo: "url-logo.png",
  logoPosition: "right",
  
  showProgressBar: "top",
  progressBarType: "buttons",
  
  showQuestionNumbers: "on",
  questionTitleLocation: "top",
  
  showPrevButton: true,
  pagePrevText: "Anterior",
  pageNextText: "Siguiente",
  completeText: "Finalizar",
  
  firstPageIsStarted: false,
  completedHtml: "<h3>¡Gracias!</h3>"
}
```

---

## 📚 Recursos

- **Docs**: https://surveyjs.io/form-library/documentation/api-reference
- **Ejemplos**: https://surveyjs.io/form-library/examples/overview
- **Creator**: https://surveyjs.io/create-free-survey

---

**Ubicación**: `/Users/mac/CascadeProjects/Surveyjs/SURVEYJS_INPUTS_REFERENCE.md`
