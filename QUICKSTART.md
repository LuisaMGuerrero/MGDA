# 🚀 Inicio Rápido

Guía rápida para poner en marcha el aplicativo en menos de 5 minutos.

---

## 🆕 Configuración en Nuevo PC (Desde Cero)

Esta sección es para cuando estás configurando el proyecto por primera vez en un nuevo equipo, sin base de datos existente ni configuración previa.

### Prerequisitos
- **Docker Desktop** instalado y corriendo ([Descargar aquí](https://www.docker.com/products/docker-desktop))
- **Git** instalado (para clonar el repositorio)

### Pasos Completos

```bash
# 1. Clonar el repositorio (si aún no lo tienes)
git clone <URL_DEL_REPOSITORIO>
cd Surveyjs

# 2. Verificar que Docker está corriendo
docker --version
docker-compose --version

# 3. Levantar todos los servicios (primera vez)
docker-compose up --build

# Esto hará automáticamente:
# ✅ Descargar imagen de MongoDB 7.0
# ✅ Crear volumen para persistencia de datos
# ✅ Crear base de datos 'surveyjs_db'
# ✅ Construir imagen del backend
# ✅ Construir imagen del frontend
# ✅ Crear red interna entre servicios
# ✅ Iniciar todos los contenedores

# 4. Esperar a que los servicios estén listos (1-2 minutos primera vez)
# Verás mensajes como:
# ✅ MongoDB Connected
# 🚀 Server running on port 3000
# VITE ready in X ms

# 5. Verificar que todo funciona
# Frontend: http://localhost:5173
# Backend: http://localhost:3000/health
# MongoDB: localhost:27017 (accesible con MongoDB Compass)
```

### ¿Qué Crea Docker Automáticamente?

1. **Base de Datos MongoDB**
   - Contenedor: `surveyjs-mongodb`
   - Puerto: `27017`
   - Base de datos: `surveyjs_db`
   - Volumen persistente: `mongodb_data`

2. **Backend API**
   - Contenedor: `surveyjs-backend`
   - Puerto: `3000`
   - Variables de entorno configuradas automáticamente

3. **Frontend React**
   - Contenedor: `surveyjs-frontend`
   - Puerto: `5173`
   - Variables de entorno configuradas automáticamente

4. **Red Interna**
   - Red: `surveyjs-network`
   - Permite comunicación entre contenedores

### Verificación Post-Instalación

```bash
# Ver estado de los contenedores
docker-compose ps

# Deberías ver 3 contenedores corriendo:
# surveyjs-mongodb    Up
# surveyjs-backend    Up
# surveyjs-frontend   Up

# Ver logs en tiempo real
docker-compose logs -f

# Probar la API
curl http://localhost:3000/health
# Respuesta esperada: {"status":"OK","timestamp":"..."}

# Probar conexión a MongoDB (si tienes MongoDB Compass)
# URI: mongodb://localhost:27017/surveyjs_db
```

### Detener y Reiniciar

```bash
# Detener servicios (mantiene datos)
docker-compose down

# Reiniciar servicios
docker-compose up

# Reiniciar desde cero (BORRA TODOS LOS DATOS)
docker-compose down -v
docker-compose up --build
```

### Estructura de Datos Creada

```
Docker Volumes:
└── mongodb_data/          # Datos persistentes de MongoDB
    └── surveyjs_db/       # Base de datos
        └── surveys/       # Colección de encuestas (se crea al primer POST)

Docker Networks:
└── surveyjs-network       # Red interna para comunicación

Docker Containers:
├── surveyjs-mongodb       # Base de datos
├── surveyjs-backend       # API Node.js
└── surveyjs-frontend      # App React
```

### Solución de Problemas Comunes

#### Docker no está corriendo
```bash
# Verificar Docker Desktop
# Abrir Docker Desktop y asegurarse que está iniciado
```

#### Puerto ya en uso
```bash
# Si el puerto 3000, 5173 o 27017 está ocupado
# Opción 1: Detener el proceso que usa el puerto
lsof -i :3000  # Encontrar PID
kill -9 <PID>  # Matar proceso

# Opción 2: Cambiar puerto en docker-compose.yml
# Editar: "3001:3000" en lugar de "3000:3000"
```

#### Error de permisos
```bash
# En Linux, agregar usuario al grupo docker
sudo usermod -aG docker $USER
# Cerrar sesión y volver a entrar
```

#### Contenedores no inician
```bash
# Ver logs detallados
docker-compose logs

# Reconstruir desde cero
docker-compose down -v
docker system prune -a  # CUIDADO: Borra todo de Docker
docker-compose up --build
```

---

## ⚡ Opción 1: Docker (Más Rápido)

### Prerequisitos
- Docker Desktop instalado y corriendo

### Pasos

```bash
# 1. Navegar al proyecto
cd /Users/mac/CascadeProjects/Surveyjs

# 2. Levantar todos los servicios
docker-compose up --build

# 3. Esperar a que los servicios estén listos (30-60 segundos)
# Verás mensajes como:
# ✅ MongoDB Connected
# 🚀 Server running on port 3000
# VITE ready in X ms

# 4. Abrir en el navegador
# Frontend: http://localhost:5173
# Backend: http://localhost:3000/health
```

**¡Listo!** La aplicación está corriendo.

### Detener los servicios

```bash
# Ctrl+C en la terminal, luego:
docker-compose down
```

## 💻 Opción 2: Instalación Local

### Prerequisitos
- Node.js >= 18.x
- MongoDB >= 6.x corriendo

### Backend

```bash
# Terminal 1
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
# Terminal 2
cd frontend
npm install
cp .env.example .env
npm run dev
```

### Verificar

- Frontend: http://localhost:5173
- Backend: http://localhost:3000/health

## 🎯 Primeros Pasos

### 1. Explorar la Aplicación

1. **Página de Inicio** (http://localhost:5173)
   - Ver características del aplicativo
   - Información del stack tecnológico

2. **Completar Formulario** (http://localhost:5173/survey)
   - Formulario de 4 pasos
   - Validación en tiempo real
   - Envío a base de datos

3. **Ver Resultados** (http://localhost:5173/results)
   - Tabla con todas las respuestas
   - Estadísticas en tiempo real
   - Acciones de ver y eliminar

### 2. Probar la API

```bash
# Health check
curl http://localhost:3000/health

# Crear una respuesta de formulario
curl -X POST http://localhost:3000/api/surveys \
  -H "Content-Type: application/json" \
  -d '{
    "surveyData": {
      "firstName": "Juan",
      "lastName": "Pérez",
      "email": "juan@example.com"
    },
    "status": "completed"
  }'

# Obtener todas las respuestas
curl http://localhost:3000/api/surveys

# Obtener estadísticas
curl http://localhost:3000/api/surveys/stats
```

### 3. Personalizar el Formulario

Editar `frontend/src/config/surveyConfig.js`:

```javascript
export const surveyJson = {
  title: "Mi Formulario Personalizado",
  pages: [
    {
      name: "page1",
      title: "Paso 1",
      elements: [
        {
          type: "text",
          name: "miCampo",
          title: "Mi Campo Personalizado",
          isRequired: true
        }
      ]
    }
  ]
};
```

Guardar y ver los cambios automáticamente en el navegador.

## 📱 Estructura de Navegación

```
Inicio (/)
├── Información general
├── Características
└── Stack tecnológico

Formulario (/survey)
├── Paso 1: Información Personal
├── Paso 2: Información de Contacto
├── Paso 3: Preferencias
└── Paso 4: Comentarios

Resultados (/results)
├── Estadísticas
├── Tabla de respuestas
└── Acciones (ver/eliminar)
```

## 🔧 Comandos Útiles

### Docker

```bash
# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f frontend
docker-compose logs -f backend

# Reiniciar un servicio
docker-compose restart frontend

# Reconstruir después de cambios
docker-compose up --build

# Limpiar todo
docker-compose down -v
```

### Desarrollo Local

```bash
# Backend
cd backend
npm run dev        # Modo desarrollo con hot-reload
npm start          # Modo producción

# Frontend
cd frontend
npm run dev        # Modo desarrollo
npm run build      # Construir para producción
npm run preview    # Preview de build de producción
```

## 🐛 Solución Rápida de Problemas

### Puerto ya en uso

```bash
# Encontrar y matar proceso
lsof -i :3000  # o :5173
kill -9 <PID>
```

### MongoDB no conecta

```bash
# Verificar que está corriendo
brew services list  # macOS
sudo systemctl status mongod  # Linux

# Reiniciar
brew services restart mongodb-community@7.0
```

### Cambios no se reflejan

```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install

# En Docker, reconstruir
docker-compose up --build
```

### Error de CORS

Verificar que `VITE_API_URL` en `frontend/.env` apunta a `http://localhost:3000/api`

## 📊 Datos de Prueba

### Crear Respuestas de Prueba

```bash
# Script para crear 5 respuestas de prueba
for i in {1..5}; do
  curl -X POST http://localhost:3000/api/surveys \
    -H "Content-Type: application/json" \
    -d "{
      \"surveyData\": {
        \"firstName\": \"Usuario$i\",
        \"lastName\": \"Prueba\",
        \"email\": \"usuario$i@test.com\",
        \"age\": $((20 + i)),
        \"gender\": \"male\",
        \"phone\": \"555-000$i\",
        \"city\": \"Madrid\",
        \"country\": \"España\"
      },
      \"status\": \"completed\"
    }"
done
```

## 🎓 Próximos Pasos

1. **Leer la documentación completa**
   - [README.md](./README.md) - Visión general
   - [SETUP.md](./SETUP.md) - Instalación detallada
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura del sistema

2. **Personalizar el formulario**
   - Agregar nuevos campos
   - Modificar validaciones
   - Cambiar estilos

3. **Integrar en tu proyecto**
   - [MODULARIZATION.md](./MODULARIZATION.md) - Guía de integración

4. **Desplegar en producción**
   - Configurar variables de entorno
   - Usar Docker en servidor
   - Configurar dominio y SSL

## 💡 Tips

- **Hot Reload**: Tanto frontend como backend tienen hot-reload activado
- **Logs**: Revisa los logs en la terminal para debugging
- **MongoDB Compass**: Usa MongoDB Compass para visualizar la base de datos
- **React DevTools**: Instala React DevTools para debugging del frontend
- **Postman**: Usa Postman para probar la API

## 📞 Ayuda

Si encuentras problemas:

1. Revisa los logs: `docker-compose logs -f`
2. Verifica que todos los servicios están corriendo: `docker-compose ps`
3. Consulta [SETUP.md](./SETUP.md) para solución de problemas detallada
4. Revisa la consola del navegador (F12)

---

**¡Feliz desarrollo! 🎉**
