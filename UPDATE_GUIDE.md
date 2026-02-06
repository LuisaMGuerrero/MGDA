# Guía de Actualización del Proyecto

## 📋 Para Usuarios con Versión Anterior

Si ya tienes el proyecto instalado y funcionando con Docker, sigue estos pasos para actualizar a la última versión con todas las nuevas funcionalidades.

---

## 🔄 Pasos de Actualización

### 1. Detener los Contenedores Actuales

```bash
# Detener todos los contenedores
docker-compose down

# Eliminar el volumen de MongoDB local (ya no se usa)
docker-compose down -v
```

**⚠️ IMPORTANTE:** Ahora usamos MongoDB Atlas (en la nube), por lo que los datos locales ya no se necesitan.

---

### 2. Actualizar el Código

```bash
# Obtener los últimos cambios del repositorio
git pull origin main

# O si tienes cambios locales, guárdalos primero
git stash
git pull origin main
git stash pop
```

---

### 3. Configurar MongoDB Atlas

**NUEVO:** El proyecto ahora usa MongoDB Atlas en lugar de MongoDB local.

```bash
# Crear el archivo .env en la carpeta backend
cd backend
cp .env.example .env
```

Edita el archivo `backend/.env` y asegúrate de que tenga:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db?retryWrites=true&w=majority&appName=Cluster0
```

**Nota:** La URI de MongoDB Atlas ya está configurada. No necesitas cambiar nada.

---

### 4. Reconstruir las Imágenes de Docker

```bash
# Reconstruir las imágenes con los nuevos cambios
docker-compose build --no-cache

# El flag --no-cache asegura que se construya todo desde cero
```

**Tiempo estimado:** 2-5 minutos dependiendo de tu conexión a internet.

---

### 5. Levantar los Servicios Actualizados

```bash
# Iniciar todos los servicios
docker-compose up -d

# Ver los logs para verificar que todo está funcionando
docker-compose logs -f
```

**Presiona `Ctrl+C` para salir de los logs.**

---

### 6. Verificar que Todo Funciona

Abre tu navegador y verifica:

- ✅ **Frontend:** http://localhost:5173
- ✅ **Backend:** http://localhost:3000/api/surveys
- ✅ **MongoDB Atlas:** Conectado a la nube (no hay puerto local)

---

## 🆕 Nuevas Funcionalidades Agregadas

### 1. Nuevo Formulario de Diagnóstico de Archivos
- Formulario completo con 3 secciones principales
- Más de 100 preguntas de evaluación
- Sistema de puntuación automático

### 2. Generación de Presentaciones PowerPoint

#### Presentación Individual
- Botón en cada registro de la tabla de resultados (icono 📄)
- Genera PPTX personalizado para cada entidad
- Incluye 10 slides con:
  - Portada personalizada
  - Información de la entidad
  - Resumen ejecutivo
  - Gráficos de cumplimiento
  - Recomendaciones automáticas

#### Presentación General
- Botón "Generar Presentación" en la página de resultados
- Análisis consolidado de todas las entidades
- Incluye 7 slides con:
  - Resumen ejecutivo
  - Promedios por sección
  - Ranking de entidades
  - Distribución por nivel
  - Gráficos comparativos

### 3. Documentación Completa
- **PPTX_DOCUMENTATION.md** - Guía completa de PptxGenJS
- **PPTX_EXAMPLES.md** - Ejemplos prácticos del proyecto
- **UPDATE_GUIDE.md** - Esta guía de actualización

---

## 📦 Dependencias Nuevas Instaladas

### Backend
```json
{
  "pptxgenjs": "^4.0.1"  // Generación de presentaciones PowerPoint
}
```

Estas dependencias se instalan automáticamente al reconstruir las imágenes de Docker.

---

## 🗄️ Cambios en la Base de Datos

### ⚠️ CAMBIO IMPORTANTE: MongoDB Atlas

**Antes:** MongoDB local en Docker (puerto 27017)  
**Ahora:** MongoDB Atlas en la nube

### Migración de Datos

Si tenías datos en MongoDB local y quieres conservarlos:

```bash
# 1. Exportar datos del MongoDB local (antes de actualizar)
docker-compose exec mongodb mongodump --db surveyjs_db --out /data/backup

# 2. Copiar el backup a tu máquina
docker cp surveyjs-mongodb:/data/backup ./mongodb_backup

# 3. Restaurar en MongoDB Atlas (después de actualizar)
mongorestore --uri="mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db" ./mongodb_backup/surveyjs_db
```

**Nota:** Si no tenías datos importantes, puedes omitir este paso.

### Datos de Prueba
Si quieres probar las nuevas funcionalidades, puedes crear registros de prueba:

```bash
# Ejecutar desde la raíz del proyecto
# Los siguientes comandos crean 5 registros de ejemplo

curl -X POST http://localhost:3000/api/surveys -H "Content-Type: application/json" -d '{...}'
```

O simplemente llena el formulario manualmente desde: http://localhost:5173

---

## 🔧 Solución de Problemas Comunes

### Problema 1: Error "Port already in use"

```bash
# Ver qué proceso está usando el puerto
lsof -i :3000  # Backend
lsof -i :5173  # Frontend

# Detener el proceso o cambiar el puerto en docker-compose.yml
```

### Problema 2: Cambios no se reflejan

```bash
# Reconstruir sin caché
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Problema 3: Error de conexión a MongoDB Atlas

```bash
# Ver logs del backend para ver el error específico
docker-compose logs backend

# Verificar que el archivo .env existe y tiene la URI correcta
cat backend/.env

# Verificar conectividad a MongoDB Atlas
ping cluster0.4rfwro1.mongodb.net

# Si hay error de autenticación, verifica las credenciales en .env
```

**Errores comunes:**
- `MongoServerError: bad auth` - Credenciales incorrectas
- `MongoNetworkError` - Problema de red o firewall
- `ENOTFOUND` - URI incorrecta o sin conexión a internet

### Problema 4: Frontend no carga

```bash
# Ver logs del frontend
docker-compose logs frontend

# Reconstruir solo el frontend
docker-compose up -d --build frontend
```

### Problema 5: Error al generar presentaciones

```bash
# Ver logs del backend
docker-compose logs backend

# Verificar que pptxgenjs se instaló correctamente
docker-compose exec backend npm list pptxgenjs
```

---

## 🧹 Limpieza Completa (Si es necesario)

Si tienes problemas persistentes, puedes hacer una limpieza completa:

```bash
# ⚠️ ADVERTENCIA: Esto eliminará TODOS los datos

# 1. Detener y eliminar todo
docker-compose down -v

# 2. Eliminar imágenes antiguas
docker-compose rm -f
docker rmi surveyjs-frontend surveyjs-backend

# 3. Limpiar caché de Docker (opcional)
docker system prune -a

# 4. Reconstruir desde cero
docker-compose build --no-cache
docker-compose up -d
```

---

## 📊 Verificación Post-Actualización

### Checklist de Verificación

- [ ] Frontend carga correctamente en http://localhost:5173
- [ ] Backend responde en http://localhost:3000/api/surveys
- [ ] Puedo ver la página de resultados
- [ ] El formulario nuevo se muestra correctamente
- [ ] Puedo generar presentación individual (botón 📄)
- [ ] Puedo generar presentación general (botón "Generar Presentación")
- [ ] Las presentaciones se descargan correctamente
- [ ] Los datos anteriores siguen disponibles (si los tenías)

---

## 🆘 Comandos Útiles de Docker

```bash
# Ver estado de los contenedores
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb

# Reiniciar un servicio específico
docker-compose restart backend

# Entrar a un contenedor
docker-compose exec backend sh
docker-compose exec mongodb mongosh

# Ver uso de recursos
docker stats

# Limpiar contenedores detenidos
docker container prune

# Limpiar imágenes no usadas
docker image prune
```

---

## 📚 Recursos Adicionales

### Documentación del Proyecto
- **README.md** - Información general del proyecto
- **DOCKER_SETUP.md** - Configuración de Docker desde cero
- **PPTX_DOCUMENTATION.md** - Documentación de generación de presentaciones
- **PPTX_EXAMPLES.md** - Ejemplos prácticos de presentaciones

### Soporte
Si encuentras algún problema durante la actualización:
1. Revisa los logs: `docker-compose logs -f`
2. Consulta la sección de troubleshooting arriba
3. Contacta al equipo de desarrollo

---

## 🎯 Resumen Rápido

Para usuarios experimentados, estos son los comandos esenciales:

```bash
# Actualización rápida
docker-compose down -v
git pull origin main

# Configurar MongoDB Atlas
cd backend
cp .env.example .env
# Editar .env si es necesario (la URI ya está configurada)
cd ..

# Reconstruir y levantar
docker-compose build --no-cache
docker-compose up -d

# Verificar
docker-compose logs -f
```

**Tiempo total estimado:** 5-10 minutos

---

## ✅ Cambios en Archivos Clave

### Docker y Configuración
- `docker-compose.yml` - **MODIFICADO:** Removido servicio MongoDB local, ahora usa Atlas
- `backend/.env.example` - **MODIFICADO:** URI de MongoDB Atlas
- `backend/.env` - **NUEVO:** Debes crearlo con las credenciales de Atlas

### Backend
- `backend/src/controllers/survey.controller.js` - Nuevas funciones de generación de PPTX
- `backend/src/routes/survey.routes.js` - Nueva ruta `/api/surveys/:id/presentation`
- `backend/package.json` - Dependencia `pptxgenjs` agregada

### Frontend
- `frontend/src/pages/ResultsPage.jsx` - Botón de presentación individual
- `frontend/src/services/api.js` - Nueva función `generateIndividualPresentation`
- `frontend/src/config/surveyConfig.js` - Formulario actualizado (857 líneas)

### Documentación
- `PPTX_DOCUMENTATION.md` - **NUEVO**
- `PPTX_EXAMPLES.md` - **NUEVO**
- `UPDATE_GUIDE.md` - **NUEVO** (este archivo)

---

**Última actualización:** Diciembre 2025  
**Versión:** 2.0.0
