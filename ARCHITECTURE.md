# Arquitectura del Proyecto

## 📐 Visión General

Este proyecto sigue una arquitectura **cliente-servidor** con separación clara entre frontend y backend, diseñada para ser modular, escalable y fácil de mantener.

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  React + Vite + SurveyJS + Material UI + Tailwind   │  │
│  │                                                       │  │
│  │  - Componentes modulares                             │  │
│  │  - Gestión de estado local                           │  │
│  │  - Routing con React Router                          │  │
│  │  - Comunicación HTTP con Axios                       │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/REST
┌─────────────────────────────────────────────────────────────┐
│                         BACKEND                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Node.js + Express + MongoDB                  │  │
│  │                                                       │  │
│  │  - API RESTful                                       │  │
│  │  - Validación de datos                               │  │
│  │  - Manejo de errores centralizado                    │  │
│  │  - Modelos con Mongoose                              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ MongoDB Driver
┌─────────────────────────────────────────────────────────────┐
│                        DATABASE                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    MongoDB                           │  │
│  │                                                       │  │
│  │  - Colección: surveys                                │  │
│  │  - Colección: survey_definitions                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ Estructura del Proyecto

```
surveyjs-app/
├── frontend/                    # Aplicación React
│   ├── public/                  # Archivos estáticos
│   ├── src/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── Layout/          # Componentes de layout
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── Survey/          # Componentes de formulario
│   │   │       └── SurveyComponent.jsx
│   │   ├── pages/               # Páginas/Vistas
│   │   │   ├── HomePage.jsx
│   │   │   ├── SurveyPage.jsx
│   │   │   └── ResultsPage.jsx
│   │   ├── services/            # Servicios y API calls
│   │   │   └── api.js
│   │   ├── config/              # Configuraciones
│   │   │   └── surveyConfig.js  # Definición del formulario
│   │   ├── theme/               # Temas de Material UI
│   │   │   └── theme.js
│   │   ├── App.jsx              # Componente principal
│   │   ├── main.jsx             # Punto de entrada
│   │   └── index.css            # Estilos globales
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── Dockerfile
│
├── backend/                     # API Node.js
│   ├── src/
│   │   ├── config/              # Configuraciones
│   │   │   └── database.js      # Conexión a MongoDB
│   │   ├── models/              # Modelos de datos (Mongoose)
│   │   │   ├── Survey.js
│   │   │   └── SurveyDefinition.js
│   │   ├── controllers/         # Lógica de negocio
│   │   │   ├── survey.controller.js
│   │   │   └── surveyDefinition.controller.js
│   │   ├── routes/              # Definición de rutas
│   │   │   ├── survey.routes.js
│   │   │   └── surveyDefinition.routes.js
│   │   ├── middleware/          # Middleware personalizado
│   │   │   ├── validators.js
│   │   │   └── errorHandler.js
│   │   └── server.js            # Punto de entrada
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
│
├── docker-compose.yml           # Orquestación de servicios
├── README.md                    # Documentación principal
├── SETUP.md                     # Guía de instalación
├── ARCHITECTURE.md              # Este archivo
└── .gitignore
```

## 🔄 Flujo de Datos

### 1. Completar Formulario

```
Usuario → Frontend (SurveyComponent)
    ↓
    Validación en cliente (SurveyJS)
    ↓
    POST /api/surveys
    ↓
Backend (survey.controller.js)
    ↓
    Validación en servidor (validators.js)
    ↓
    Guardar en MongoDB (Survey model)
    ↓
    Respuesta al cliente
    ↓
    Actualización de UI
```

### 2. Ver Resultados

```
Usuario → Frontend (ResultsPage)
    ↓
    GET /api/surveys
    ↓
Backend (survey.controller.js)
    ↓
    Consulta a MongoDB
    ↓
    Respuesta con datos
    ↓
    Renderizado en tabla
```

## 🧩 Componentes Principales

### Frontend

#### 1. **SurveyComponent**
- Renderiza el formulario multi-step usando SurveyJS
- Maneja validación en tiempo real
- Envía datos al backend al completar

#### 2. **Layout Components**
- **Header**: Navegación principal
- **Footer**: Información del pie de página
- **Layout**: Wrapper que combina Header y Footer

#### 3. **Pages**
- **HomePage**: Landing page con información
- **SurveyPage**: Página del formulario
- **ResultsPage**: Visualización de resultados

#### 4. **API Service**
- Centraliza todas las llamadas HTTP
- Maneja interceptores y errores
- Proporciona métodos para surveys y definitions

### Backend

#### 1. **Models**
- **Survey**: Esquema para respuestas de formularios
- **SurveyDefinition**: Esquema para definiciones de formularios

#### 2. **Controllers**
- Contienen la lógica de negocio
- Interactúan con los modelos
- Manejan respuestas y errores

#### 3. **Routes**
- Definen endpoints de la API
- Aplican middleware de validación
- Mapean rutas a controladores

#### 4. **Middleware**
- **validators.js**: Validación de datos con express-validator
- **errorHandler.js**: Manejo centralizado de errores

## 🔐 Seguridad

### Implementadas

- ✅ Validación de datos en frontend y backend
- ✅ Helmet.js para headers de seguridad
- ✅ CORS configurado
- ✅ Variables de entorno para datos sensibles
- ✅ Sanitización de inputs

### Por Implementar

- ⏳ Autenticación JWT
- ⏳ Rate limiting
- ⏳ HTTPS en producción
- ⏳ Encriptación de datos sensibles
- ⏳ Logs de auditoría

## 📊 Base de Datos

### Colección: surveys

```javascript
{
  _id: ObjectId,
  surveyData: {
    // Datos del formulario (flexible)
    firstName: String,
    lastName: String,
    email: String,
    // ... más campos
  },
  status: String,           // 'draft' | 'completed'
  completedAt: Date,
  metadata: {
    userAgent: String,
    ipAddress: String,
    sessionId: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Colección: survey_definitions

```javascript
{
  _id: ObjectId,
  name: String,
  version: String,
  definition: {
    // Definición JSON de SurveyJS
    title: String,
    pages: Array,
    // ... configuración completa
  },
  isActive: Boolean,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔌 API Endpoints

### Surveys

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/surveys` | Crear respuesta |
| GET | `/api/surveys` | Listar respuestas |
| GET | `/api/surveys/stats` | Obtener estadísticas |
| GET | `/api/surveys/:id` | Obtener por ID |
| PUT | `/api/surveys/:id` | Actualizar respuesta |
| DELETE | `/api/surveys/:id` | Eliminar respuesta |

### Survey Definitions

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/survey-definitions/active` | Obtener definición activa |
| POST | `/api/survey-definitions` | Crear/actualizar definición |
| GET | `/api/survey-definitions` | Listar definiciones |
| GET | `/api/survey-definitions/:id` | Obtener por ID |
| DELETE | `/api/survey-definitions/:id` | Eliminar definición |

## 🚀 Escalabilidad

### Horizontal

- **Frontend**: Puede servirse desde CDN
- **Backend**: Múltiples instancias con load balancer
- **Database**: MongoDB replica sets

### Vertical

- Optimización de queries con índices
- Cache con Redis (por implementar)
- Compresión de respuestas

### Modularización

El proyecto está diseñado para ser usado como módulo:

```javascript
// Como módulo de frontend
import { SurveyComponent } from './modules/survey';

// Como módulo de backend
const surveyModule = require('./modules/survey');
app.use('/surveys', surveyModule.routes);
```

## 🧪 Testing (Por Implementar)

### Frontend
- Unit tests con Vitest
- Component tests con React Testing Library
- E2E tests con Playwright

### Backend
- Unit tests con Jest
- Integration tests
- API tests con Supertest

## 📈 Monitoreo (Por Implementar)

- Logs estructurados con Winston
- Métricas con Prometheus
- Dashboards con Grafana
- Error tracking con Sentry

## 🔄 CI/CD (Por Implementar)

```
GitHub → GitHub Actions
    ↓
    Tests automáticos
    ↓
    Build Docker images
    ↓
    Deploy a staging
    ↓
    Tests E2E
    ↓
    Deploy a producción
```

## 💡 Mejores Prácticas Implementadas

1. **Separación de Responsabilidades**: Frontend, Backend y DB separados
2. **Código Modular**: Componentes y funciones reutilizables
3. **Configuración Externa**: Variables de entorno
4. **Validación Dual**: Cliente y servidor
5. **Manejo de Errores**: Centralizado y consistente
6. **Documentación**: README, SETUP y ARCHITECTURE
7. **Containerización**: Docker para desarrollo y producción
8. **Versionado**: Git con .gitignore apropiado

---

**Versión**: 1.0.0  
**Última actualización**: Noviembre 2025
