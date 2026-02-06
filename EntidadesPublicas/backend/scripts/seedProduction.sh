#!/bin/bash

# Script para crear registros de prueba directamente en el backend de producción (Render)
API_URL="https://surveyjs-hrlx.onrender.com/api/surveys"

echo "🚀 Creando registros de prueba en producción..."
echo "🌐 Backend: $API_URL"
echo ""

# Registro 1: Archivo General de la Nación
echo "📝 Creando registro 1: Archivo General de la Nación..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Archivo General de la Nación",
      "nivel": "Nacional",
      "sector": "Cultura",
      "responsable": "María González",
      "cargo": "Directora de Archivo",
      "email": "maria.gonzalez@archivonacional.gov.co",
      "telefono": "3001234567",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Cumple", "seccion1_4": "Cumple", "seccion1_5": "Parcial",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Cumple", "seccion1_9": "Cumple", "seccion1_10": "Parcial",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Cumple", "seccion2_4": "Cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Parcial", "seccion2_7": "Cumple", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Parcial", "seccion3_4": "Cumple", "seccion3_5": "Cumple",
      "seccion3_6": "Cumple", "seccion3_7": "Cumple", "seccion3_8": "Parcial", "seccion3_9": "Cumple", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s
echo ""
echo "✅ Registro 1 creado"
echo ""

# Registro 2: Alcaldía de Bogotá
echo "📝 Creando registro 2: Alcaldía de Bogotá..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Alcaldía de Bogotá",
      "nivel": "Distrital",
      "sector": "Administración Pública",
      "responsable": "Carlos Rodríguez",
      "cargo": "Jefe de Gestión Documental",
      "email": "carlos.rodriguez@bogota.gov.co",
      "telefono": "3109876543",
      "seccion1_1": "Cumple", "seccion1_2": "Parcial", "seccion1_3": "Cumple", "seccion1_4": "No cumple", "seccion1_5": "Parcial",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Parcial", "seccion1_9": "Cumple", "seccion1_10": "No cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Parcial", "seccion2_4": "Cumple", "seccion2_5": "Parcial",
      "seccion2_6": "Cumple", "seccion2_7": "Cumple", "seccion2_8": "No cumple", "seccion2_9": "Parcial", "seccion2_10": "Cumple",
      "seccion3_1": "Parcial", "seccion3_2": "Cumple", "seccion3_3": "No cumple", "seccion3_4": "Parcial", "seccion3_5": "Cumple",
      "seccion3_6": "Cumple", "seccion3_7": "Parcial", "seccion3_8": "No cumple", "seccion3_9": "Cumple", "seccion3_10": "Parcial"
    },
    "status": "completed"
  }' -s
echo ""
echo "✅ Registro 2 creado"
echo ""

# Registro 3: Gobernación de Antioquia
echo "📝 Creando registro 3: Gobernación de Antioquia..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Gobernación de Antioquia",
      "nivel": "Departamental",
      "sector": "Administración Pública",
      "responsable": "Ana María Pérez",
      "cargo": "Coordinadora de Archivo",
      "email": "ana.perez@antioquia.gov.co",
      "telefono": "3201234567",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Cumple", "seccion1_4": "Cumple", "seccion1_5": "Cumple",
      "seccion1_6": "Parcial", "seccion1_7": "Cumple", "seccion1_8": "Cumple", "seccion1_9": "Parcial", "seccion1_10": "Cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Cumple", "seccion2_4": "Parcial", "seccion2_5": "Cumple",
      "seccion2_6": "Cumple", "seccion2_7": "Cumple", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Parcial",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Cumple", "seccion3_4": "Cumple", "seccion3_5": "Parcial",
      "seccion3_6": "Cumple", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Cumple", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s
echo ""
echo "✅ Registro 3 creado"
echo ""

# Registro 4: Universidad Nacional
echo "📝 Creando registro 4: Universidad Nacional de Colombia..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Universidad Nacional de Colombia",
      "nivel": "Nacional",
      "sector": "Educación",
      "responsable": "Patricia Morales",
      "cargo": "Jefe de Archivo Central",
      "email": "patricia.morales@unal.edu.co",
      "telefono": "3189876543",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Cumple", "seccion1_4": "Cumple", "seccion1_5": "Cumple",
      "seccion1_6": "Cumple", "seccion1_7": "Parcial", "seccion1_8": "Cumple", "seccion1_9": "Cumple", "seccion1_10": "Cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Cumple", "seccion2_4": "Cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Cumple", "seccion2_7": "Cumple", "seccion2_8": "Parcial", "seccion2_9": "Cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Cumple", "seccion3_4": "Cumple", "seccion3_5": "Cumple",
      "seccion3_6": "Parcial", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Cumple", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s
echo ""
echo "✅ Registro 4 creado"
echo ""

# Registro 5: Ministerio de Hacienda
echo "📝 Creando registro 5: Ministerio de Hacienda..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Ministerio de Hacienda",
      "nivel": "Nacional",
      "sector": "Hacienda",
      "responsable": "Roberto Sánchez",
      "cargo": "Coordinador de Gestión Documental",
      "email": "roberto.sanchez@minhacienda.gov.co",
      "telefono": "3145678901",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Parcial", "seccion1_4": "Cumple", "seccion1_5": "Cumple",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Cumple", "seccion1_9": "Cumple", "seccion1_10": "Parcial",
      "seccion2_1": "Cumple", "seccion2_2": "Parcial", "seccion2_3": "Cumple", "seccion2_4": "Cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Cumple", "seccion2_7": "Parcial", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Cumple", "seccion3_4": "Parcial", "seccion3_5": "Cumple",
      "seccion3_6": "Cumple", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Parcial", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s
echo ""
echo "✅ Registro 5 creado"
echo ""

echo "✅ Proceso completado exitosamente"
echo "📊 Total de registros creados: 5"
echo ""
echo "🌐 Verifica en: https://survey-js-alpha.vercel.app/results"
echo "🔄 Puede tardar 30-60 segundos si el backend estaba dormido"
