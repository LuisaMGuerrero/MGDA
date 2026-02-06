# Guía de Modularización

Este documento explica cómo integrar este aplicativo como módulo en otros proyectos.

## 🎯 Objetivo

El aplicativo SurveyJS está diseñado para ser integrado como módulo independiente en aplicaciones más grandes, manteniendo su funcionalidad completa mientras se adapta al contexto del proyecto principal.

## 📦 Integración del Frontend

### Opción 1: Como Componente React

#### Instalación

```bash
# Copiar el módulo a tu proyecto
cp -r frontend/src/components/Survey /tu-proyecto/src/modules/survey
cp frontend/src/config/surveyConfig.js /tu-proyecto/src/modules/survey/
cp frontend/src/services/api.js /tu-proyecto/src/services/
```

#### Uso Básico

```jsx
import SurveyComponent from './modules/survey/SurveyComponent';

function MyApp() {
  const handleComplete = (data) => {
    console.log('Survey completed:', data);
    // Tu lógica personalizada
  };

  return (
    <div>
      <h1>Mi Aplicación</h1>
      <SurveyComponent onComplete={handleComplete} />
    </div>
  );
}
```

#### Configuración Personalizada

```jsx
import SurveyComponent from './modules/survey/SurveyComponent';
import customSurveyConfig from './config/myCustomSurvey';

function MyApp() {
  return (
    <SurveyComponent 
      config={customSurveyConfig}
      onComplete={handleComplete}
      onPartialSave={handleDraft}
      theme="custom"
    />
  );
}
```

### Opción 2: Como Paquete NPM (Recomendado para Producción)

#### Crear Paquete

```bash
cd frontend
npm init @vitejs/plugin-react survey-module

# Configurar package.json
{
  "name": "@tu-org/survey-module",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "files": ["dist"],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

#### Publicar

```bash
npm publish --access public
```

#### Instalar en Proyecto

```bash
npm install @tu-org/survey-module
```

#### Usar

```jsx
import { SurveyComponent } from '@tu-org/survey-module';

function App() {
  return <SurveyComponent />;
}
```

## 🔌 Integración del Backend

### Opción 1: Como Submódulo Express

#### Estructura Recomendada

```
tu-proyecto/
├── src/
│   ├── modules/
│   │   └── survey/
│   │       ├── models/
│   │       ├── controllers/
│   │       ├── routes/
│   │       └── index.js
│   └── server.js
```

#### Copiar Módulo

```bash
cp -r backend/src/models /tu-proyecto/src/modules/survey/
cp -r backend/src/controllers /tu-proyecto/src/modules/survey/
cp -r backend/src/routes /tu-proyecto/src/modules/survey/
cp -r backend/src/middleware /tu-proyecto/src/modules/survey/
```

#### Crear Punto de Entrada del Módulo

```javascript
// tu-proyecto/src/modules/survey/index.js
import surveyRoutes from './routes/survey.routes.js';
import surveyDefinitionRoutes from './routes/surveyDefinition.routes.js';

export default {
  routes: {
    surveys: surveyRoutes,
    definitions: surveyDefinitionRoutes
  },
  models: {
    Survey: require('./models/Survey'),
    SurveyDefinition: require('./models/SurveyDefinition')
  }
};
```

#### Integrar en tu Servidor

```javascript
// tu-proyecto/src/server.js
import express from 'express';
import surveyModule from './modules/survey/index.js';

const app = express();

// Integrar rutas del módulo survey
app.use('/api/surveys', surveyModule.routes.surveys);
app.use('/api/survey-definitions', surveyModule.routes.definitions);

// Tus otras rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(3000);
```

### Opción 2: Como Microservicio

#### Mantener Backend Separado

```yaml
# docker-compose.yml de tu proyecto
version: '3.8'

services:
  main-app:
    build: ./main-app
    ports:
      - "3000:3000"
    depends_on:
      - survey-service
      
  survey-service:
    build: ./survey-module
    ports:
      - "3001:3000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/surveys
      
  mongodb:
    image: mongo:7.0
    ports:
      - "27017:27017"
```

#### Comunicación entre Servicios

```javascript
// En tu aplicación principal
import axios from 'axios';

const surveyService = axios.create({
  baseURL: 'http://survey-service:3000/api'
});

// Usar el servicio
const createSurvey = async (data) => {
  const response = await surveyService.post('/surveys', data);
  return response.data;
};
```

## 🎨 Personalización del Módulo

### Personalizar Estilos

```javascript
// Crear tema personalizado
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#YOUR_COLOR',
    },
  },
});

// Aplicar al componente
<ThemeProvider theme={customTheme}>
  <SurveyComponent />
</ThemeProvider>
```

### Personalizar Formulario

```javascript
// config/customSurvey.js
export const customSurveyJson = {
  title: "Mi Formulario Personalizado",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "customField",
          title: "Campo Personalizado"
        }
      ]
    }
  ]
};
```

### Agregar Validaciones Personalizadas

```javascript
// Validación personalizada en el frontend
survey.onValidateQuestion.add((sender, options) => {
  if (options.name === "email") {
    if (!options.value.includes("@miempresa.com")) {
      options.error = "Debe usar email corporativo";
    }
  }
});

// Validación personalizada en el backend
export const customValidator = [
  body('surveyData.email')
    .custom((value) => {
      if (!value.includes('@miempresa.com')) {
        throw new Error('Email debe ser corporativo');
      }
      return true;
    }),
  handleValidationErrors
];
```

## 🔄 Sincronización de Datos

### Webhook para Notificaciones

```javascript
// En el backend del módulo
import axios from 'axios';

export const createSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.create(req.body);
    
    // Notificar a la aplicación principal
    if (process.env.WEBHOOK_URL) {
      await axios.post(process.env.WEBHOOK_URL, {
        event: 'survey.completed',
        data: survey
      });
    }
    
    res.status(201).json({ success: true, data: survey });
  } catch (error) {
    next(error);
  }
};
```

### Event Emitter

```javascript
// survey.controller.js
import EventEmitter from 'events';

export const surveyEvents = new EventEmitter();

export const createSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.create(req.body);
    
    // Emitir evento
    surveyEvents.emit('survey:completed', survey);
    
    res.status(201).json({ success: true, data: survey });
  } catch (error) {
    next(error);
  }
};

// En tu aplicación principal
import { surveyEvents } from './modules/survey/controllers/survey.controller.js';

surveyEvents.on('survey:completed', (survey) => {
  console.log('Nueva encuesta completada:', survey);
  // Tu lógica personalizada
});
```

## 🔐 Autenticación Integrada

### Agregar Middleware de Autenticación

```javascript
// En tu aplicación principal
import { authenticate } from './middleware/auth.js';
import surveyModule from './modules/survey/index.js';

// Proteger rutas del módulo
app.use('/api/surveys', authenticate, surveyModule.routes.surveys);
```

### Pasar Usuario al Módulo

```javascript
// Modificar el controlador del módulo
export const createSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.create({
      ...req.body,
      userId: req.user.id, // Usuario del middleware de autenticación
      metadata: {
        ...req.body.metadata,
        userAgent: req.headers['user-agent'],
        userId: req.user.id
      }
    });
    
    res.status(201).json({ success: true, data: survey });
  } catch (error) {
    next(error);
  }
};
```

## 📊 Compartir Base de Datos

### Opción 1: Base de Datos Compartida

```javascript
// Usar la misma conexión de MongoDB
import mongoose from 'mongoose';

// En tu aplicación principal
const db = await mongoose.connect(MONGODB_URI);

// El módulo usará la misma conexión
import Survey from './modules/survey/models/Survey.js';
```

### Opción 2: Base de Datos Separada

```javascript
// Crear conexión separada para el módulo
const surveyDB = mongoose.createConnection(SURVEY_DB_URI);

// Usar en los modelos del módulo
const Survey = surveyDB.model('Survey', surveySchema);
```

## 🧪 Testing del Módulo Integrado

```javascript
// test/survey-module.test.js
import request from 'supertest';
import app from '../src/server.js';

describe('Survey Module Integration', () => {
  it('should create survey', async () => {
    const response = await request(app)
      .post('/api/surveys')
      .send({
        surveyData: { name: 'Test' }
      });
      
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });
});
```

## 📝 Ejemplo Completo de Integración

```javascript
// src/server.js - Aplicación Principal
import express from 'express';
import mongoose from 'mongoose';
import surveyModule from './modules/survey/index.js';
import { authenticate } from './middleware/auth.js';

const app = express();

// Conectar a MongoDB
await mongoose.connect(process.env.MONGODB_URI);

// Middleware
app.use(express.json());

// Integrar módulo de surveys
app.use('/api/surveys', authenticate, surveyModule.routes.surveys);
app.use('/api/survey-definitions', surveyModule.routes.definitions);

// Escuchar eventos del módulo
surveyModule.events.on('survey:completed', async (survey) => {
  // Enviar email de notificación
  await sendEmail(survey.surveyData.email, 'Gracias por completar la encuesta');
  
  // Actualizar estadísticas
  await updateStats(survey);
});

// Tus rutas existentes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(3000);
```

## 🚀 Despliegue del Módulo

### Como Parte de la Aplicación Principal

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar código de la aplicación y módulos
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

### Como Servicio Independiente

Ver sección "Opción 2: Como Microservicio" arriba.

## 📚 Recursos Adicionales

- [Documentación de Express Routers](https://expressjs.com/en/guide/routing.html)
- [React Component Patterns](https://react.dev/learn/passing-props-to-a-component)
- [Microservices Architecture](https://microservices.io/)
- [NPM Package Publishing](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)

---

**Nota**: Esta guía asume conocimientos básicos de React, Node.js y arquitectura de software. Para casos de uso específicos, consulte con el equipo de desarrollo.
