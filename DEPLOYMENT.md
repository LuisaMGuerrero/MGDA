# Guía de Despliegue

## 📋 Prerequisitos

- Cuenta en [Render.com](https://render.com/)
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Repositorio Git con el código

---

## 🗄️ Configuración de MongoDB Atlas

### 1. Crear Cluster (si no existe)

1. Accede a https://cloud.mongodb.com/
2. Crea un nuevo proyecto o selecciona uno existente
3. Crea un cluster gratuito (M0)
4. Selecciona región cercana a tus usuarios

### 2. Crear Usuario de Base de Datos

1. Ve a **Database Access** en el menú lateral
2. Clic en **"Add New Database User"**
3. Configura:
   - **Username:** `desarrollador_db_user`
   - **Password:** (genera una contraseña segura)
   - **Database User Privileges:** Read and write to any database
4. Clic en **"Add User"**

### 3. Configurar Network Access (⚠️ IMPORTANTE)

**Para Render.com, Vercel, Netlify y servicios similares:**

1. Ve a **Network Access** en el menú lateral
2. Clic en **"Add IP Address"**
3. Selecciona **"Allow Access from Anywhere"**
   - O manualmente agrega: `0.0.0.0/0`
4. Descripción: "Render.com deployment"
5. Clic en **"Confirm"**

**⚠️ Nota de Seguridad:**
- `0.0.0.0/0` permite conexiones desde cualquier IP
- Es seguro porque MongoDB Atlas requiere autenticación
- Es necesario porque Render no tiene IPs fijas

### 4. Obtener Connection String

1. Ve a **Database** en el menú lateral
2. Clic en **"Connect"** en tu cluster
3. Selecciona **"Connect your application"**
4. Copia el connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```
5. Reemplaza:
   - `<username>` con tu usuario
   - `<password>` con tu contraseña
   - `<dbname>` con `surveyjs_db`

**Ejemplo:**
```
mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db?retryWrites=true&w=majority&appName=Cluster0
```

---

## 🚀 Despliegue en Render.com

### Backend (API)

#### 1. Crear Web Service

1. Accede a https://dashboard.render.com/
2. Clic en **"New +"** → **"Web Service"**
3. Conecta tu repositorio de GitHub/GitLab
4. Configura:
   - **Name:** `surveyjs-backend`
   - **Region:** Oregon (US West) o la más cercana
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

#### 2. Variables de Entorno

En la sección **Environment**, agrega:

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db?retryWrites=true&w=majority&appName=Cluster0
```

**⚠️ IMPORTANTE:** Usa tu propia URI de MongoDB Atlas

#### 3. Deploy

1. Clic en **"Create Web Service"**
2. Espera a que termine el build (2-5 minutos)
3. Verifica los logs para confirmar conexión a MongoDB
4. Copia la URL del servicio (ej: `https://surveyjs-backend.onrender.com`)

### Frontend (React)

#### 1. Crear Static Site

1. En Render Dashboard, clic en **"New +"** → **"Static Site"**
2. Conecta tu repositorio
3. Configura:
   - **Name:** `surveyjs-frontend`
   - **Branch:** `main`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

#### 2. Variables de Entorno

En la sección **Environment**, agrega:

```env
VITE_API_URL=https://surveyjs-backend.onrender.com/api
```

**⚠️ IMPORTANTE:** Usa la URL de tu backend de Render

#### 3. Deploy

1. Clic en **"Create Static Site"**
2. Espera a que termine el build
3. Accede a tu aplicación en la URL proporcionada

---

## 🔧 Configuración de CORS

El backend ya tiene CORS configurado, pero verifica que permita tu dominio de frontend:

**`backend/src/server.js`:**
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

**Agrega variable de entorno en Render (Backend):**
```env
FRONTEND_URL=https://surveyjs-frontend.onrender.com
```

---

## 🐛 Troubleshooting

### Error: "Could not connect to MongoDB Atlas"

**Causa:** IP no está en la whitelist

**Solución:**
1. Ve a MongoDB Atlas → Network Access
2. Agrega `0.0.0.0/0` (Allow from anywhere)
3. Espera 1-2 minutos
4. Redeploy en Render

### Error: "MongoServerError: bad auth"

**Causa:** Credenciales incorrectas

**Solución:**
1. Verifica usuario y contraseña en MongoDB Atlas
2. Actualiza `MONGODB_URI` en Render
3. Asegúrate de que la contraseña no tenga caracteres especiales sin codificar
4. Si tiene caracteres especiales, codifícalos (ej: `@` → `%40`)

### Error: "CORS policy blocked"

**Causa:** Frontend no puede acceder al backend

**Solución:**
1. Verifica que `VITE_API_URL` en frontend apunte al backend correcto
2. Agrega `FRONTEND_URL` en variables de entorno del backend
3. Redeploy ambos servicios

### Build falla en Render

**Causa:** Dependencias o configuración incorrecta

**Solución:**
1. Verifica que `package.json` tenga todos los scripts necesarios
2. Asegúrate de que `node_modules` no esté en el repositorio
3. Revisa los logs de build en Render para el error específico

### Frontend no se conecta al Backend

**Causa:** URL incorrecta o CORS

**Solución:**
1. Verifica `VITE_API_URL` en variables de entorno del frontend
2. Debe incluir `/api` al final: `https://tu-backend.onrender.com/api`
3. Redeploy el frontend después de cambiar variables

---

## 📊 Verificación Post-Despliegue

### Checklist

- [ ] Backend desplegado y corriendo
- [ ] MongoDB Atlas conectado (ver logs del backend)
- [ ] Frontend desplegado
- [ ] Frontend puede hacer requests al backend
- [ ] Puedes crear un nuevo formulario
- [ ] Puedes ver los resultados
- [ ] Puedes generar presentaciones

### Endpoints de Prueba

**Backend Health Check:**
```bash
curl https://tu-backend.onrender.com/api/surveys
```

**Frontend:**
```
https://tu-frontend.onrender.com
```

---

## 🔄 Actualizaciones

### Actualizar Backend

1. Push cambios a tu repositorio
2. Render detecta cambios automáticamente
3. Inicia build y deploy automático
4. Verifica logs en Render Dashboard

### Actualizar Frontend

1. Push cambios a tu repositorio
2. Render detecta cambios automáticamente
3. Inicia build y deploy automático
4. Limpia caché del navegador si es necesario

### Actualizar Variables de Entorno

1. Ve a tu servicio en Render Dashboard
2. Sección **Environment**
3. Edita o agrega variables
4. Clic en **"Save Changes"**
5. Render redeploy automáticamente

---

## 💰 Costos

### Render.com (Plan Free)

**Limitaciones:**
- 750 horas/mes de servicio
- El servicio se "duerme" después de 15 minutos de inactividad
- Primer request después de dormir tarda ~30 segundos
- 100 GB de ancho de banda/mes

**Para evitar que se duerma:**
- Usa un servicio de ping (ej: UptimeRobot, Cron-job.org)
- Ping cada 10 minutos a tu backend

### MongoDB Atlas (Plan M0 Free)

**Limitaciones:**
- 512 MB de almacenamiento
- Conexiones compartidas
- Sin backups automáticos

**Suficiente para:**
- ~10,000 documentos de formularios
- Desarrollo y pruebas
- Proyectos pequeños

---

## 🔐 Seguridad

### Variables de Entorno

**✅ Hacer:**
- Usar variables de entorno para credenciales
- Nunca commitear archivos `.env`
- Usar contraseñas fuertes

**❌ No hacer:**
- Hardcodear credenciales en el código
- Subir archivos `.env` al repositorio
- Usar contraseñas débiles

### MongoDB Atlas

**✅ Hacer:**
- Usar usuario específico para la aplicación
- Dar solo permisos necesarios (read/write)
- Rotar contraseñas periódicamente

**❌ No hacer:**
- Usar usuario admin para la aplicación
- Compartir credenciales
- Usar contraseñas simples

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Render.com Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

### Soporte

- **Render:** https://render.com/docs/support
- **MongoDB Atlas:** https://www.mongodb.com/support

---

## 🎯 Resumen Rápido

```bash
# 1. MongoDB Atlas
- Crear cluster
- Crear usuario
- Whitelist: 0.0.0.0/0
- Copiar connection string

# 2. Render Backend
- New Web Service
- Root: backend
- Build: npm install
- Start: npm start
- Env: NODE_ENV, PORT, MONGODB_URI

# 3. Render Frontend
- New Static Site
- Root: frontend
- Build: npm install && npm run build
- Publish: dist
- Env: VITE_API_URL

# 4. Verificar
- Backend logs: MongoDB connected
- Frontend: Abre en navegador
- Crear formulario de prueba
```

**Tiempo total:** 15-30 minutos

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0
