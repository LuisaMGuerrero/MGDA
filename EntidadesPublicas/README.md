# SurveyJS Multi-Step Form Application

Aplicativo profesional modular con formulario multi-step utilizando SurveyJS, diseñado para escalabilidad e integración como módulo en otros sistemas.

## 🏗️ Arquitectura

```
surveyjs-app/
├── frontend/          # React + Vite + SurveyJS + Material UI + Tailwind
├── backend/           # Node.js + Express + MongoDB
├── docker-compose.yml # Orquestación de servicios
└── README.md
```

## 🚀 Tecnologías

### Frontend
- **React 18** - Framework UI
- **Vite** - Build tool
- **SurveyJS** - Motor de formularios multi-step
- **Material UI (MUI)** - Componentes UI
- **Tailwind CSS** - Utilidades CSS
- **Axios** - Cliente HTTP

### Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **MongoDB Atlas** - Base de datos NoSQL en la nube
- **Mongoose** - ODM para MongoDB
- **CORS** - Manejo de políticas de origen cruzado
- **PptxGenJS** - Generación de presentaciones PowerPoint

### DevOps
- **Docker** - Containerización
- **Docker Compose** - Orquestación multi-contenedor

## 📦 Instalación

### 🔄 Actualización desde Versión Anterior

Si ya tienes el proyecto instalado y quieres actualizar a la última versión:

**📘 [Ver Guía de Actualización](./UPDATE_GUIDE.md)**

Pasos rápidos:
```bash
docker-compose down
git pull origin main
docker-compose build --no-cache
docker-compose up -d
```

### 🆕 Nuevo PC / Primera Instalación

Si estás configurando el proyecto por primera vez en un nuevo equipo:

**📘 [Ver Guía Completa de Docker Setup](./DOCKER_SETUP.md)**

Esta guía incluye:
- Instalación de Docker Desktop desde cero
- Configuración paso a paso sin base de datos existente
- Verificación completa del sistema
- Solución de problemas comunes

### Opción 1: Con Docker (Recomendado)

**Prerequisito:** Crear archivo `backend/.env` con las credenciales de MongoDB Atlas

```bash
# Crear el archivo .env desde el ejemplo
cd backend
cp .env.example .env
cd ..

# Construir y levantar todos los servicios
docker-compose up --build

# Acceder a la aplicación
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
# MongoDB: MongoDB Atlas (nube)
```

### Opción 2: Instalación Local (Sin Docker)

**Ahora puedes usar la aplicación sin Docker** gracias a MongoDB Atlas.

**📘 [Ver Guía Completa de Instalación Local](./LOCAL_SETUP.md)**

Pasos rápidos:

```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend (en otra terminal)
cd frontend
npm install
npm run dev
```

**Acceder:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 🎯 Características

### Formulario de Diagnóstico de Archivos
- ✅ Formulario multi-step con 3 secciones principales
- ✅ Más de 100 preguntas de evaluación
- ✅ Validación de campos en tiempo real
- ✅ Persistencia de datos en MongoDB Atlas
- ✅ Sistema de puntuación automático
- ✅ Diseño responsive
- ✅ Temas personalizables
- ✅ Arquitectura modular

### Generación de Presentaciones PowerPoint
- ✅ **Presentación Individual** - Para cada entidad evaluada
  - 10 slides con análisis completo
  - Gráficos de cumplimiento por sección
  - Recomendaciones automáticas
  - Descarga directa desde la tabla de resultados
- ✅ **Presentación General** - Análisis consolidado
  - 7 slides con estadísticas globales
  - Ranking de entidades
  - Distribución por nivel y sector
  - Promedios de cumplimiento

### Estructura del Formulario
1. **Sección I**: Aspectos Administrativos
2. **Sección II**: Función Archivística
3. **Sección III**: Preservación y Conservación

## 🔧 Configuración

### Variables de Entorno

#### Backend (.env)
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db?retryWrites=true&w=majority&appName=Cluster0
```

**Nota:** El proyecto usa MongoDB Atlas (base de datos en la nube). Las credenciales ya están configuradas en `.env.example`.

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000/api
```

## 📡 API Endpoints

### Surveys
- `POST /api/surveys` - Crear nueva respuesta de formulario
- `GET /api/surveys` - Obtener todas las respuestas
- `GET /api/surveys/:id` - Obtener respuesta específica
- `PUT /api/surveys/:id` - Actualizar respuesta
- `DELETE /api/surveys/:id` - Eliminar respuesta
- `GET /api/surveys/stats` - Obtener estadísticas generales

### Presentaciones PowerPoint
- `GET /api/surveys/presentation` - Generar presentación general (todas las entidades)
- `GET /api/surveys/:id/presentation` - Generar presentación individual

### Survey Definitions
- `GET /api/survey-definitions` - Obtener definición del formulario
- `POST /api/survey-definitions` - Crear/actualizar definición

## 🧩 Modularización

El aplicativo está diseñado para ser integrado como módulo:

### Como Módulo Frontend
```javascript
import { SurveyComponent } from './modules/survey';

function App() {
  return <SurveyComponent onComplete={handleComplete} />;
}
```

### Como Módulo Backend
```javascript
const surveyRoutes = require('./modules/survey/routes');
app.use('/api/surveys', surveyRoutes);
```

## 🎨 Personalización

### Modificar Pasos del Formulario
Editar: `frontend/src/config/surveyConfig.js`

### Modificar Esquema de Datos
Editar: `backend/src/models/Survey.js`

### Personalizar Estilos
- Material UI Theme: `frontend/src/theme/theme.js`
- Tailwind Config: `frontend/tailwind.config.js`

## 📊 Modelo de Datos

```javascript
{
  surveyData: Object,      // Datos del formulario
  completedAt: Date,       // Fecha de completado
  status: String,          // 'draft' | 'completed'
  metadata: {
    userAgent: String,
    ipAddress: String
  }
}
```

## 🔐 Seguridad

- Validación de datos en frontend y backend
- Sanitización de inputs
- CORS configurado
- Variables de entorno para datos sensibles

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📈 Escalabilidad

### Próximas Mejoras Sugeridas
- [ ] Autenticación y autorización
- [ ] Formularios dinámicos desde base de datos
- [ ] Exportación de datos (CSV, PDF)
- [ ] Analytics y reportes
- [ ] Versionado de formularios
- [ ] Multi-idioma (i18n)
- [ ] Validaciones personalizadas avanzadas
- [ ] Integración con servicios externos
- [ ] Cache con Redis
- [ ] Tests unitarios y e2e

## 🤝 Contribución

Este proyecto está diseñado para ser extendido. Para agregar nuevos campos o pasos:

1. Actualizar `surveyConfig.js` con nuevos elementos
2. Actualizar modelo de datos en backend si es necesario
3. Ejecutar migraciones si aplica

## 📝 Licencia

MIT

## 📚 Documentación

### Instalación y Configuración
- **[QUICKSTART.md](./QUICKSTART.md)** - Inicio rápido en 5 minutos
- **[LOCAL_SETUP.md](./LOCAL_SETUP.md)** - 💻 Instalación local sin Docker
- **[DOCKER_SETUP.md](./DOCKER_SETUP.md)** - 🐳 Configuración completa de Docker desde cero
- **[UPDATE_GUIDE.md](./UPDATE_GUIDE.md)** - 🔄 Guía de actualización para usuarios existentes
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - 🚀 Guía de despliegue en Render.com y MongoDB Atlas
- **[VERCEL_SETUP.md](./VERCEL_SETUP.md)** - ⚡ Configuración de Vercel y solución de errores CORS
- **[SETUP.md](./SETUP.md)** - Instalación detallada y configuración

### Desarrollo
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitectura del sistema
- **[MODULARIZATION.md](./MODULARIZATION.md)** - Guía de integración como módulo
- **[SURVEYJS_INPUTS_REFERENCE.md](./SURVEYJS_INPUTS_REFERENCE.md)** - Referencia de tipos de inputs

### Generación de Presentaciones PowerPoint
- **[PPTX_DOCUMENTATION.md](./PPTX_DOCUMENTATION.md)** - 📘 Documentación completa de PptxGenJS
- **[PPTX_EXAMPLES.md](./PPTX_EXAMPLES.md)** - 💡 Ejemplos prácticos del proyecto

## 👥 Soporte

Para preguntas o soporte, contactar al equipo de desarrollo.

---

**Versión**: 1.0.0  
**Última actualización**: 2025  
**Estado**: Base inicial para desarrollo
