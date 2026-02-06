# Configuración de Vercel para el Frontend

## 🔴 Problema Actual

Tu frontend en Vercel está mostrando error 404 porque:
- No tiene configurada la variable `VITE_API_URL`
- Está intentando hacer requests a GitHub en lugar del backend API

## ✅ Solución Paso a Paso

### Paso 1: Desplegar el Backend en Render.com

**Primero necesitas tener el backend desplegado.**

#### 1.1 Crear cuenta en Render.com
- Ve a https://render.com/
- Clic en "Get Started"
- Conéctate con GitHub

#### 1.2 Crear Web Service para el Backend

1. En Render Dashboard, clic en **"New +"** → **"Web Service"**

2. **Conectar repositorio:**
   - Selecciona tu repositorio: `smpineda129/SurveyJs`
   - Clic en "Connect"

3. **Configuración del servicio:**
   ```
   Name: surveyjs-backend
   Region: Oregon (US West)
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```

4. **Variables de Entorno** (muy importante):
   
   Clic en "Advanced" y agrega estas variables:
   
   ```env
   NODE_ENV=production
   PORT=3000
   MONGODB_URI=mongodb+srv://desarrollador_db_user:WH9djZnzVqHa6dl5@cluster0.4rfwro1.mongodb.net/surveyjs_db?retryWrites=true&w=majority&appName=Cluster0
   FRONTEND_URL=https://survey-js-alpha.vercel.app
   ```

5. **Crear el servicio:**
   - Clic en "Create Web Service"
   - Espera 5-10 minutos mientras se despliega
   - **Copia la URL** que te da Render (ej: `https://surveyjs-backend.onrender.com`)

---

### Paso 2: Configurar Variables de Entorno en Vercel

Una vez que tengas la URL del backend de Render:

#### 2.1 Ir a Vercel Dashboard

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto: **survey-js-alpha**

#### 2.2 Agregar Variable de Entorno

1. Clic en **"Settings"** (arriba)
2. En el menú lateral, clic en **"Environment Variables"**
3. Agregar nueva variable:

   ```
   Name: VITE_API_URL
   Value: https://surveyjs-backend.onrender.com/api
   ```
   
   **⚠️ IMPORTANTE:** 
   - Reemplaza `surveyjs-backend.onrender.com` con TU URL de Render
   - Debe incluir `/api` al final
   - NO incluyas barra final después de `/api`

4. **Environments:** Selecciona todos (Production, Preview, Development)
5. Clic en **"Save"**

#### 2.3 Redeploy el Frontend

1. Ve a **"Deployments"** (arriba)
2. Busca el último deployment
3. Clic en los **3 puntos** (⋮) a la derecha
4. Clic en **"Redeploy"**
5. Confirma el redeploy
6. Espera 2-3 minutos

---

### Paso 3: Verificar que Funciona

#### 3.1 Verificar Backend

Abre en tu navegador:
```
https://tu-backend.onrender.com/api/surveys
```

Deberías ver un JSON con los datos (o un array vacío `[]`)

#### 3.2 Verificar Frontend

1. Abre tu app en Vercel:
   ```
   https://survey-js-alpha.vercel.app/results
   ```

2. Abre la consola del navegador (F12)
3. Ya NO deberías ver errores de CORS
4. Deberías ver los datos cargando

---

## 🔧 Configuración de CORS en el Backend

El backend ya tiene CORS configurado, pero verifica que incluya tu dominio de Vercel:

**Archivo: `backend/src/server.js`**

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

**Variable de entorno en Render:**
```env
FRONTEND_URL=https://survey-js-alpha.vercel.app
```

---

## 🐛 Troubleshooting

### Error: "CORS policy blocked"

**Causa:** Backend no permite requests desde Vercel

**Solución:**
1. Ve a Render → tu servicio backend → Environment
2. Verifica que `FRONTEND_URL` esté configurado correctamente
3. Debe ser: `https://survey-js-alpha.vercel.app` (sin barra final)
4. Guarda y espera que se redeploy automáticamente

### Error: "Network Error" o 404

**Causa:** URL del backend incorrecta en Vercel

**Solución:**
1. Ve a Vercel → Settings → Environment Variables
2. Verifica que `VITE_API_URL` sea correcta
3. Debe terminar en `/api` (ej: `https://tu-backend.onrender.com/api`)
4. Redeploy el frontend

### Error: "Cannot connect to MongoDB"

**Causa:** MongoDB Atlas no permite IP de Render

**Solución:**
1. Ve a MongoDB Atlas → Network Access
2. Agrega `0.0.0.0/0` (Allow from anywhere)
3. Espera 1-2 minutos
4. Redeploy backend en Render

### Backend se "duerme" (Free tier de Render)

**Problema:** El primer request tarda 30-60 segundos

**Solución temporal:**
- Es normal en el plan gratuito de Render
- El servicio se "despierta" después del primer request

**Solución permanente:**
- Usar un servicio de ping (ej: UptimeRobot)
- Hacer ping cada 10 minutos a tu backend
- O actualizar a plan de pago en Render ($7/mes)

---

## 📝 Checklist de Verificación

Antes de que todo funcione, verifica:

### Backend (Render)
- [ ] Servicio creado y desplegado
- [ ] Build exitoso (ver logs)
- [ ] `MONGODB_URI` configurado
- [ ] `FRONTEND_URL` configurado
- [ ] `NODE_ENV=production`
- [ ] Backend responde en: `https://tu-backend.onrender.com/api/surveys`

### MongoDB Atlas
- [ ] IP `0.0.0.0/0` en whitelist
- [ ] Usuario y contraseña correctos
- [ ] Connection string correcto

### Frontend (Vercel)
- [ ] `VITE_API_URL` configurado
- [ ] URL incluye `/api` al final
- [ ] Redeployed después de agregar variable
- [ ] No hay errores de CORS en consola
- [ ] Datos se cargan correctamente

---

## 🎯 Resumen Rápido

```bash
# 1. Desplegar Backend en Render
- Crear Web Service
- Root: backend
- Build: npm install
- Start: npm start
- Env: NODE_ENV, MONGODB_URI, FRONTEND_URL

# 2. Configurar Vercel
- Settings → Environment Variables
- VITE_API_URL = https://tu-backend.onrender.com/api
- Redeploy

# 3. Verificar
- Backend: https://tu-backend.onrender.com/api/surveys
- Frontend: https://survey-js-alpha.vercel.app/results
```

---

## 🆘 ¿Necesitas Ayuda?

Si después de seguir estos pasos aún tienes problemas:

1. **Verifica los logs del backend en Render:**
   - Render Dashboard → tu servicio → Logs
   - Busca errores de conexión a MongoDB

2. **Verifica la consola del navegador:**
   - F12 → Console
   - Busca errores de red o CORS

3. **Verifica las variables de entorno:**
   - Render: Environment tab
   - Vercel: Settings → Environment Variables

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0
