# Instalación Local (Sin Docker)

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.x ([Descargar aquí](https://nodejs.org/))
- **npm** o **yarn** (viene con Node.js)
- **Git** (para clonar el repositorio)

**Verificar instalación:**
```bash
node --version  # Debe mostrar v18.x o superior
npm --version   # Debe mostrar 9.x o superior
```

---

## 🚀 Instalación Paso a Paso

### 1. Clonar el Repositorio (si aún no lo tienes)

```bash
git clone <url-del-repositorio>
cd Surveyjs
```

### 2. Configurar el Backend

```bash
# Ir a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Crear archivo de configuración
cp .env.example .env
```

**Edita el archivo `backend/.env`** (ya debe tener la configuración correcta):
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db?retryWrites=true&w=majority&appName=Cluster0
```

### 3. Configurar el Frontend

```bash
# Ir a la carpeta del frontend (desde la raíz)
cd ../frontend

# Instalar dependencias
npm install

# Crear archivo de configuración
cp .env.example .env
```

**Edita el archivo `frontend/.env`** (si es necesario):
```env
VITE_API_URL=http://localhost:3000/api
```

---

## ▶️ Iniciar la Aplicación

### Opción 1: Dos Terminales (Recomendado)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

Deberías ver:
```
🚀 Server running on port 3000
📡 Environment: development
✅ MongoDB Connected: ac-a1vfqwj-shard-00-00.4rfwro1.mongodb.net
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Deberías ver:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Opción 2: Script Único (Opcional)

Puedes crear un script para iniciar ambos servicios:

**En la raíz del proyecto, crea `start.sh`:**
```bash
#!/bin/bash

# Iniciar backend en segundo plano
cd backend
npm run dev &
BACKEND_PID=$!

# Iniciar frontend en segundo plano
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo ""
echo "Para detener los servicios:"
echo "kill $BACKEND_PID $FRONTEND_PID"

# Esperar a que terminen
wait
```

**Dar permisos y ejecutar:**
```bash
chmod +x start.sh
./start.sh
```

---

## 🌐 Acceder a la Aplicación

Una vez que ambos servicios estén corriendo:

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000/api/surveys
- **MongoDB:** Conectado a Atlas (nube)

---

## 🛑 Detener la Aplicación

**Si usaste dos terminales:**
- Presiona `Ctrl+C` en cada terminal

**Si usaste el script:**
```bash
# Buscar los procesos
ps aux | grep node

# Matar los procesos
kill <PID_BACKEND> <PID_FRONTEND>

# O matar todos los procesos de Node.js (⚠️ cuidado si tienes otras apps Node)
pkill -f node
```

---

## 🔧 Comandos Útiles

### Backend

```bash
cd backend

# Modo desarrollo (con auto-reload)
npm run dev

# Modo producción
npm start

# Ver logs
# Los logs aparecen directamente en la terminal

# Instalar nueva dependencia
npm install <paquete>
```

### Frontend

```bash
cd frontend

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Instalar nueva dependencia
npm install <paquete>
```

---

## 🐛 Solución de Problemas

### Problema 1: Puerto ya en uso

**Error:** `EADDRINUSE: address already in use :::3000`

**Solución:**
```bash
# Ver qué proceso usa el puerto
lsof -i :3000  # Backend
lsof -i :5173  # Frontend

# Matar el proceso
kill -9 <PID>

# O cambiar el puerto en .env
```

### Problema 2: Error de conexión a MongoDB

**Error:** `MongoServerError: bad auth`

**Solución:**
```bash
# Verificar que el archivo .env existe
cat backend/.env

# Verificar que la URI es correcta
# Debe ser la misma que está en .env.example

# Verificar conectividad
ping cluster0.4rfwro1.mongodb.net
```

### Problema 3: Módulos no encontrados

**Error:** `Cannot find module 'express'`

**Solución:**
```bash
# Reinstalar dependencias del backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Reinstalar dependencias del frontend
cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### Problema 4: Error de CORS

**Error:** `Access to XMLHttpRequest has been blocked by CORS policy`

**Solución:**
- Verificar que el backend esté corriendo en el puerto 3000
- Verificar que `VITE_API_URL` en `frontend/.env` sea `http://localhost:3000/api`
- El backend ya tiene CORS configurado correctamente

### Problema 5: Cambios no se reflejan

**Backend:**
- Nodemon debería recargar automáticamente
- Si no funciona, detén (`Ctrl+C`) y reinicia `npm run dev`

**Frontend:**
- Vite recarga automáticamente
- Si no funciona, limpia caché: `rm -rf node_modules/.vite`

---

## 📦 Estructura de Dependencias

### Backend (package.json)

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "pptxgenjs": "^4.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### Frontend (package.json)

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.0",
    "survey-react-ui": "^1.9.100",
    "@mui/material": "^5.14.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0"
  }
}
```

---

## 🔄 Actualizar Dependencias

```bash
# Backend
cd backend
npm update

# Frontend
cd frontend
npm update

# Verificar versiones desactualizadas
npm outdated
```

---

## 🚀 Ventajas de Instalación Local vs Docker

### ✅ Ventajas Local
- Más rápido para desarrollo
- Fácil debugging con herramientas del IDE
- Menor uso de recursos
- Hot reload más rápido
- Acceso directo a node_modules

### ✅ Ventajas Docker
- Entorno consistente entre desarrolladores
- Fácil de compartir y desplegar
- No contamina el sistema local
- Incluye todas las dependencias

---

## 📝 Notas Importantes

1. **MongoDB Atlas:** No necesitas instalar MongoDB localmente, todo está en la nube.

2. **Variables de Entorno:** Asegúrate de que los archivos `.env` existan en ambas carpetas.

3. **Puertos:** 
   - Backend: 3000
   - Frontend: 5173
   - Asegúrate de que estén libres

4. **Node Version:** Si tienes problemas, verifica que uses Node.js 18 o superior.

5. **npm vs yarn:** Puedes usar cualquiera, pero mantén consistencia en el proyecto.

---

## ✅ Checklist de Verificación

- [ ] Node.js >= 18.x instalado
- [ ] npm instalado
- [ ] `backend/.env` creado con URI de MongoDB Atlas
- [ ] `frontend/.env` creado con URL del backend
- [ ] Dependencias del backend instaladas (`npm install`)
- [ ] Dependencias del frontend instaladas (`npm install`)
- [ ] Backend corriendo en http://localhost:3000
- [ ] Frontend corriendo en http://localhost:5173
- [ ] Puedes acceder a la aplicación en el navegador
- [ ] Backend conectado a MongoDB Atlas

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:

1. Verifica los logs en las terminales
2. Revisa la sección de troubleshooting arriba
3. Consulta la documentación completa en `README.md`
4. Contacta al equipo de desarrollo

---

**¡Listo!** Ahora puedes desarrollar sin Docker. 🎉
