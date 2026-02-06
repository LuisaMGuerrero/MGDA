# 🐳 Configuración Docker - Nuevo PC

Guía completa para configurar el proyecto con Docker en un nuevo equipo sin base de datos existente.

---

## 📋 Tabla de Contenidos

- [Prerequisitos](#prerequisitos)
- [Instalación Paso a Paso](#instalación-paso-a-paso)
- [Configuración Automática](#configuración-automática)
- [Verificación](#verificación)
- [Comandos Útiles](#comandos-útiles)
- [Solución de Problemas](#solución-de-problemas)
- [Configuración Avanzada](#configuración-avanzada)

---

## 📦 Prerequisitos

### 1. Docker Desktop

**macOS:**
```bash
# Descargar desde: https://www.docker.com/products/docker-desktop
# O con Homebrew:
brew install --cask docker

# Iniciar Docker Desktop desde Aplicaciones
```

**Windows:**
```bash
# Descargar desde: https://www.docker.com/products/docker-desktop
# Ejecutar el instalador
# Reiniciar el sistema si es necesario
```

**Linux (Ubuntu/Debian):**
```bash
# Instalar Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Agregar usuario al grupo docker
sudo usermod -aG docker $USER
newgrp docker

# Verificar instalación
docker --version
docker-compose --version
```

### 2. Git (Opcional)

```bash
# macOS
brew install git

# Windows
# Descargar desde: https://git-scm.com/download/win

# Linux
sudo apt-get install git
```

---

## 🚀 Instalación Paso a Paso

### Paso 1: Obtener el Proyecto

```bash
# Opción A: Clonar desde repositorio
git clone <URL_DEL_REPOSITORIO>
cd Surveyjs

# Opción B: Si ya tienes el proyecto
cd /ruta/al/proyecto/Surveyjs
```

### Paso 2: Verificar Docker

```bash
# Verificar que Docker está instalado y corriendo
docker --version
# Salida esperada: Docker version 24.x.x

docker-compose --version
# Salida esperada: Docker Compose version v2.x.x

# Verificar que Docker Desktop está corriendo
docker ps
# Si funciona, Docker está listo
```

### Paso 3: Revisar Configuración

El archivo `docker-compose.yml` ya está configurado. Verifícalo:

```bash
cat docker-compose.yml
```

**Configuración incluida:**
- ✅ MongoDB 7.0 en puerto 27017
- ✅ Backend Node.js en puerto 3000
- ✅ Frontend React en puerto 5173
- ✅ Volumen persistente para MongoDB
- ✅ Red interna entre servicios
- ✅ Variables de entorno configuradas

### Paso 4: Levantar Servicios (Primera Vez)

```bash
# Construir y levantar todos los servicios
docker-compose up --build

# O en modo detached (segundo plano)
docker-compose up --build -d
```

**¿Qué hace este comando?**

1. **Descarga imágenes** (primera vez):
   - MongoDB 7.0 (~700 MB)
   - Node.js base para backend
   - Node.js base para frontend

2. **Construye imágenes personalizadas**:
   - Backend: Instala dependencias npm
   - Frontend: Instala dependencias npm

3. **Crea recursos**:
   - Volumen `mongodb_data` para persistencia
   - Red `surveyjs-network` para comunicación
   - Base de datos `surveyjs_db` en MongoDB

4. **Inicia contenedores**:
   - `surveyjs-mongodb`
   - `surveyjs-backend`
   - `surveyjs-frontend`

**Tiempo estimado:** 2-5 minutos (primera vez)

### Paso 5: Esperar Inicialización

Verás logs como estos:

```
surveyjs-mongodb   | MongoDB starting...
surveyjs-mongodb   | Waiting for connections on port 27017
surveyjs-backend   | ✅ MongoDB Connected
surveyjs-backend   | 🚀 Server running on port 3000
surveyjs-frontend  | VITE v5.x.x ready in 1234 ms
surveyjs-frontend  | ➜ Local: http://localhost:5173/
```

**¡Listo!** Cuando veas estos mensajes, todo está funcionando.

---

## ✅ Verificación

### 1. Verificar Contenedores

```bash
docker-compose ps
```

**Salida esperada:**
```
NAME                  STATUS    PORTS
surveyjs-mongodb      Up        0.0.0.0:27017->27017/tcp
surveyjs-backend      Up        0.0.0.0:3000->3000/tcp
surveyjs-frontend     Up        0.0.0.0:5173->5173/tcp
```

### 2. Verificar Servicios

```bash
# Backend Health Check
curl http://localhost:3000/health

# Salida esperada:
# {"status":"OK","timestamp":"2024-11-21T16:20:00.000Z"}

# Frontend (abrir en navegador)
open http://localhost:5173
# O visitar manualmente: http://localhost:5173
```

### 3. Verificar MongoDB

```bash
# Opción A: Desde línea de comandos
docker exec -it surveyjs-mongodb mongosh

# Dentro de mongosh:
show dbs
use surveyjs_db
show collections
exit

# Opción B: Con MongoDB Compass (GUI)
# URI: mongodb://localhost:27017/surveyjs_db
```

### 4. Probar API

```bash
# Crear una encuesta de prueba
curl -X POST http://localhost:3000/api/surveys \
  -H "Content-Type: application/json" \
  -d '{
    "surveyData": {
      "firstName": "Test",
      "lastName": "User",
      "email": "test@example.com"
    },
    "status": "completed"
  }'

# Obtener todas las encuestas
curl http://localhost:3000/api/surveys

# Obtener estadísticas
curl http://localhost:3000/api/surveys/stats
```

---

## 🔧 Comandos Útiles

### Gestión de Servicios

```bash
# Iniciar servicios
docker-compose up

# Iniciar en segundo plano
docker-compose up -d

# Detener servicios (mantiene datos)
docker-compose down

# Detener y eliminar volúmenes (BORRA DATOS)
docker-compose down -v

# Reiniciar un servicio específico
docker-compose restart backend
docker-compose restart frontend
docker-compose restart mongodb

# Reconstruir después de cambios en código
docker-compose up --build
```

### Ver Logs

```bash
# Logs de todos los servicios
docker-compose logs -f

# Logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb

# Últimas 100 líneas
docker-compose logs --tail=100 backend
```

### Ejecutar Comandos en Contenedores

```bash
# Entrar al contenedor del backend
docker exec -it surveyjs-backend sh

# Entrar al contenedor de MongoDB
docker exec -it surveyjs-mongodb mongosh

# Ejecutar comando npm en backend
docker exec -it surveyjs-backend npm install <paquete>

# Ver variables de entorno
docker exec surveyjs-backend env
```

### Limpieza

```bash
# Detener y eliminar contenedores
docker-compose down

# Eliminar también volúmenes (BORRA DATOS)
docker-compose down -v

# Limpiar imágenes no usadas
docker image prune -a

# Limpiar todo el sistema Docker (CUIDADO)
docker system prune -a --volumes
```

---

## 🐛 Solución de Problemas

### Problema 1: Puerto ya en uso

**Error:**
```
Error: bind: address already in use
```

**Solución:**
```bash
# Encontrar proceso usando el puerto
lsof -i :3000   # Backend
lsof -i :5173   # Frontend
lsof -i :27017  # MongoDB

# Matar el proceso
kill -9 <PID>

# O cambiar puerto en docker-compose.yml
# Ejemplo: "3001:3000" en lugar de "3000:3000"
```

### Problema 2: Docker no está corriendo

**Error:**
```
Cannot connect to the Docker daemon
```

**Solución:**
```bash
# macOS: Abrir Docker Desktop desde Aplicaciones
open -a Docker

# Linux: Iniciar servicio Docker
sudo systemctl start docker
sudo systemctl enable docker

# Verificar
docker ps
```

### Problema 3: Contenedor se detiene inmediatamente

**Diagnóstico:**
```bash
# Ver logs del contenedor
docker-compose logs backend

# Ver estado
docker-compose ps
```

**Soluciones comunes:**
```bash
# 1. Reconstruir desde cero
docker-compose down -v
docker-compose up --build

# 2. Verificar Dockerfile
cat backend/Dockerfile
cat frontend/Dockerfile

# 3. Verificar dependencias
docker exec -it surveyjs-backend npm list
```

### Problema 4: MongoDB no conecta

**Error en logs:**
```
MongooseServerSelectionError: connect ECONNREFUSED
```

**Solución:**
```bash
# 1. Verificar que MongoDB está corriendo
docker-compose ps

# 2. Verificar logs de MongoDB
docker-compose logs mongodb

# 3. Reiniciar MongoDB
docker-compose restart mongodb

# 4. Verificar URI en backend
docker exec surveyjs-backend env | grep MONGODB_URI
# Debe ser: mongodb://mongodb:27017/surveyjs_db
```

### Problema 5: Frontend no carga

**Solución:**
```bash
# 1. Verificar logs
docker-compose logs frontend

# 2. Verificar que Vite está corriendo
curl http://localhost:5173

# 3. Limpiar caché y reconstruir
docker-compose down
docker-compose up --build

# 4. Verificar variables de entorno
docker exec surveyjs-frontend env | grep VITE_API_URL
# Debe ser: http://localhost:3000/api
```

### Problema 6: Cambios en código no se reflejan

**Solución:**
```bash
# 1. Verificar que los volúmenes están montados
docker-compose config

# 2. Reconstruir imágenes
docker-compose up --build

# 3. Para desarrollo, asegúrate de que hot-reload funciona
# Los volúmenes deben estar así en docker-compose.yml:
# - ./backend:/app
# - ./frontend:/app
```

### Problema 7: Error de permisos (Linux)

**Error:**
```
Permission denied
```

**Solución:**
```bash
# Agregar usuario al grupo docker
sudo usermod -aG docker $USER

# Aplicar cambios
newgrp docker

# O cerrar sesión y volver a entrar

# Verificar
docker ps
```

---

## ⚙️ Configuración Avanzada

### Variables de Entorno

**Backend (.env):**
```env
PORT=3000
MONGODB_URI=mongodb://mongodb:27017/surveyjs_db
NODE_ENV=development
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:3000/api
```

**Nota:** En Docker, estas variables se configuran automáticamente en `docker-compose.yml`.

### Cambiar Puertos

Editar `docker-compose.yml`:

```yaml
services:
  backend:
    ports:
      - "3001:3000"  # Puerto externo:interno
  
  frontend:
    ports:
      - "8080:5173"
  
  mongodb:
    ports:
      - "27018:27017"
```

Luego actualizar `VITE_API_URL` en frontend:
```yaml
environment:
  - VITE_API_URL=http://localhost:3001/api
```

### Modo Producción

```bash
# Crear docker-compose.prod.yml
# Con optimizaciones para producción

# Usar archivo específico
docker-compose -f docker-compose.prod.yml up --build
```

### Persistencia de Datos

Los datos de MongoDB se guardan en un volumen Docker:

```bash
# Ver volúmenes
docker volume ls

# Inspeccionar volumen
docker volume inspect surveyjs_mongodb_data

# Backup de datos
docker exec surveyjs-mongodb mongodump --out=/backup
docker cp surveyjs-mongodb:/backup ./backup

# Restaurar datos
docker cp ./backup surveyjs-mongodb:/backup
docker exec surveyjs-mongodb mongorestore /backup
```

### Monitoreo

```bash
# Ver uso de recursos
docker stats

# Ver solo contenedores del proyecto
docker stats surveyjs-backend surveyjs-frontend surveyjs-mongodb

# Logs en tiempo real con timestamps
docker-compose logs -f --timestamps
```

---

## 📊 Arquitectura Docker

```
┌─────────────────────────────────────────────────────────────┐
│                        Host Machine                         │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              Docker Network: surveyjs-network         │ │
│  │                                                       │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │ │
│  │  │   Frontend   │  │   Backend    │  │  MongoDB   │ │ │
│  │  │   (React)    │  │  (Node.js)   │  │   (7.0)    │ │ │
│  │  │              │  │              │  │            │ │ │
│  │  │  Port: 5173  │  │  Port: 3000  │  │ Port: 27017│ │ │
│  │  └──────┬───────┘  └──────┬───────┘  └─────┬──────┘ │ │
│  │         │                 │                 │        │ │
│  │         └─────────────────┴─────────────────┘        │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │         Docker Volume: mongodb_data                   │ │
│  │         (Persistencia de datos)                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Checklist de Configuración

- [ ] Docker Desktop instalado y corriendo
- [ ] Proyecto clonado o descargado
- [ ] `docker-compose up --build` ejecutado
- [ ] 3 contenedores corriendo (`docker-compose ps`)
- [ ] Backend responde en http://localhost:3000/health
- [ ] Frontend carga en http://localhost:5173
- [ ] MongoDB accesible en localhost:27017
- [ ] API funciona (crear y obtener encuestas)
- [ ] Datos persisten después de `docker-compose down`

---

## 📚 Recursos Adicionales

- [Documentación Docker](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
- [MongoDB Docker Hub](https://hub.docker.com/_/mongo)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

---

## 🆘 Soporte

Si después de seguir esta guía sigues teniendo problemas:

1. **Revisa los logs:**
   ```bash
   docker-compose logs -f
   ```

2. **Verifica el estado:**
   ```bash
   docker-compose ps
   docker stats
   ```

3. **Reinicia desde cero:**
   ```bash
   docker-compose down -v
   docker system prune -a
   docker-compose up --build
   ```

4. **Consulta otros documentos:**
   - [QUICKSTART.md](./QUICKSTART.md)
   - [SETUP.md](./SETUP.md)
   - [ARCHITECTURE.md](./ARCHITECTURE.md)

---

**¡Configuración completada! 🎉**

Tu entorno Docker está listo para desarrollo.
