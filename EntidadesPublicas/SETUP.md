# Guía de Instalación y Configuración

## 📋 Prerequisitos

Antes de comenzar, asegúrese de tener instalado:

- **Node.js** >= 18.x ([Descargar](https://nodejs.org/))
- **Docker** y **Docker Compose** ([Descargar](https://www.docker.com/))
- **MongoDB** >= 6.x (solo si no usa Docker)
- **Git** ([Descargar](https://git-scm.com/))

## 🚀 Instalación Rápida con Docker (Recomendado)

### Paso 1: Clonar o navegar al proyecto

```bash
cd /Users/mac/CascadeProjects/Surveyjs
```

### Paso 2: Construir y levantar los servicios

```bash
docker-compose up --build
```

Este comando:
- Construirá las imágenes de Docker para frontend y backend
- Levantará MongoDB
- Iniciará el backend en el puerto 3000
- Iniciará el frontend en el puerto 5173

### Paso 3: Acceder a la aplicación

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **MongoDB**: localhost:27017

### Comandos útiles de Docker

```bash
# Detener todos los servicios
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir solo un servicio
docker-compose up --build frontend
docker-compose up --build backend

# Limpiar todo (incluyendo volúmenes)
docker-compose down -v
```

## 💻 Instalación Local (Sin Docker)

### Paso 1: Instalar MongoDB

#### macOS (usando Homebrew)
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

#### Linux (Ubuntu/Debian)
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Paso 2: Configurar Backend

```bash
cd backend

# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Editar .env con tus configuraciones
# PORT=3000
# MONGODB_URI=mongodb://localhost:27017/surveyjs_db
# NODE_ENV=development

# Iniciar servidor de desarrollo
npm run dev
```

El backend estará disponible en: http://localhost:3000

### Paso 3: Configurar Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Editar .env
# VITE_API_URL=http://localhost:3000/api

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará disponible en: http://localhost:5173

## 🔧 Configuración Avanzada

### Variables de Entorno del Backend

Editar `backend/.env`:

```env
# Puerto del servidor
PORT=3000

# URI de conexión a MongoDB
MONGODB_URI=mongodb://localhost:27017/surveyjs_db

# Entorno de ejecución
NODE_ENV=development
```

### Variables de Entorno del Frontend

Editar `frontend/.env`:

```env
# URL del API backend
VITE_API_URL=http://localhost:3000/api
```

## 🧪 Verificar la Instalación

### 1. Verificar Backend

```bash
curl http://localhost:3000/health
```

Respuesta esperada:
```json
{
  "status": "OK",
  "message": "SurveyJS Backend API is running",
  "timestamp": "2025-11-18T15:00:00.000Z"
}
```

### 2. Verificar Frontend

Abrir en el navegador: http://localhost:5173

Deberías ver la página de inicio del aplicativo.

### 3. Verificar MongoDB

```bash
# Conectar a MongoDB
mongosh

# Listar bases de datos
show dbs

# Usar la base de datos del proyecto
use surveyjs_db

# Listar colecciones
show collections
```

## 🐛 Solución de Problemas

### Error: Puerto ya en uso

```bash
# Encontrar proceso usando el puerto 3000
lsof -i :3000

# Matar el proceso
kill -9 <PID>
```

### Error: MongoDB no conecta

```bash
# Verificar que MongoDB está corriendo
brew services list  # macOS
sudo systemctl status mongod  # Linux

# Reiniciar MongoDB
brew services restart mongodb-community@7.0  # macOS
sudo systemctl restart mongod  # Linux
```

### Error: Dependencias no se instalan

```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: Docker no inicia

```bash
# Verificar que Docker está corriendo
docker ps

# Reiniciar Docker Desktop
# En macOS: Cmd+Q y volver a abrir

# Ver logs detallados
docker-compose logs -f
```

## 📦 Construcción para Producción

### Frontend

```bash
cd frontend
npm run build
```

Los archivos optimizados estarán en `frontend/dist/`

### Backend

```bash
cd backend
npm start
```

## 🔄 Actualizar el Proyecto

```bash
# Actualizar dependencias del backend
cd backend
npm update

# Actualizar dependencias del frontend
cd frontend
npm update
```

## 📚 Recursos Adicionales

- [Documentación de SurveyJS](https://surveyjs.io/form-library/documentation/overview)
- [Documentación de React](https://react.dev/)
- [Documentación de Express](https://expressjs.com/)
- [Documentación de MongoDB](https://www.mongodb.com/docs/)
- [Documentación de Material UI](https://mui.com/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)

## 💡 Próximos Pasos

1. Personalizar el formulario en `frontend/src/config/surveyConfig.js`
2. Agregar autenticación y autorización
3. Implementar exportación de datos
4. Configurar CI/CD
5. Desplegar en producción

---

¿Necesitas ayuda? Consulta el README.md principal o contacta al equipo de desarrollo.
