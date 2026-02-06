#!/bin/bash

# Script para crear 5 registros adicionales de prueba
API_URL="http://localhost:3000/api/surveys"

echo "🚀 Creando 5 nuevos registros de prueba..."
echo ""

# Registro 1: Contraloría General de la República
echo "📝 Creando registro 1: Contraloría General de la República..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Contraloría General de la República",
      "nivel": "Nacional",
      "sector": "Control Fiscal",
      "responsable": "Sandra Milena López",
      "cargo": "Directora de Gestión Documental",
      "email": "sandra.lopez@contraloria.gov.co",
      "telefono": "3123456789",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Cumple", "seccion1_4": "Parcial", "seccion1_5": "Cumple",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Cumple", "seccion1_9": "Parcial", "seccion1_10": "Cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Cumple", "seccion2_4": "Cumple", "seccion2_5": "Parcial",
      "seccion2_6": "Cumple", "seccion2_7": "Cumple", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Cumple", "seccion3_4": "Cumple", "seccion3_5": "Cumple",
      "seccion3_6": "Parcial", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Cumple", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 1 creado"
echo ""

# Registro 2: Alcaldía de Barranquilla
echo "📝 Creando registro 2: Alcaldía de Barranquilla..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Alcaldía de Barranquilla",
      "nivel": "Municipal",
      "sector": "Administración Pública",
      "responsable": "Andrés Felipe Castro",
      "cargo": "Coordinador de Archivo",
      "email": "andres.castro@barranquilla.gov.co",
      "telefono": "3156789012",
      "seccion1_1": "Parcial", "seccion1_2": "Cumple", "seccion1_3": "Parcial", "seccion1_4": "No cumple", "seccion1_5": "Parcial",
      "seccion1_6": "Cumple", "seccion1_7": "Parcial", "seccion1_8": "No cumple", "seccion1_9": "Cumple", "seccion1_10": "Parcial",
      "seccion2_1": "Parcial", "seccion2_2": "Cumple", "seccion2_3": "No cumple", "seccion2_4": "Parcial", "seccion2_5": "Cumple",
      "seccion2_6": "Parcial", "seccion2_7": "Cumple", "seccion2_8": "No cumple", "seccion2_9": "Parcial", "seccion2_10": "Cumple",
      "seccion3_1": "No cumple", "seccion3_2": "Parcial", "seccion3_3": "Cumple", "seccion3_4": "Parcial", "seccion3_5": "No cumple",
      "seccion3_6": "Parcial", "seccion3_7": "Cumple", "seccion3_8": "Parcial", "seccion3_9": "No cumple", "seccion3_10": "Parcial"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 2 creado"
echo ""

# Registro 3: Gobernación de Cundinamarca
echo "📝 Creando registro 3: Gobernación de Cundinamarca..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Gobernación de Cundinamarca",
      "nivel": "Departamental",
      "sector": "Administración Pública",
      "responsable": "Claudia Patricia Rojas",
      "cargo": "Jefe de Archivo Departamental",
      "email": "claudia.rojas@cundinamarca.gov.co",
      "telefono": "3187654321",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Parcial", "seccion1_4": "Cumple", "seccion1_5": "Cumple",
      "seccion1_6": "Cumple", "seccion1_7": "Parcial", "seccion1_8": "Cumple", "seccion1_9": "Cumple", "seccion1_10": "Cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Parcial", "seccion2_3": "Cumple", "seccion2_4": "Cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Cumple", "seccion2_7": "Cumple", "seccion2_8": "Parcial", "seccion2_9": "Cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Cumple", "seccion3_4": "Parcial", "seccion3_5": "Cumple",
      "seccion3_6": "Cumple", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Parcial", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 3 creado"
echo ""

# Registro 4: Hospital Universitario San Ignacio
echo "📝 Creando registro 4: Hospital Universitario San Ignacio..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Hospital Universitario San Ignacio",
      "nivel": "Nacional",
      "sector": "Salud",
      "responsable": "María Fernanda Vargas",
      "cargo": "Coordinadora de Historias Clínicas",
      "email": "maria.vargas@husi.org.co",
      "telefono": "3209876543",
      "seccion1_1": "Cumple", "seccion1_2": "Cumple", "seccion1_3": "Cumple", "seccion1_4": "Cumple", "seccion1_5": "Cumple",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Parcial", "seccion1_9": "Cumple", "seccion1_10": "Cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Cumple", "seccion2_4": "Cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Cumple", "seccion2_7": "Parcial", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Cumple", "seccion3_3": "Cumple", "seccion3_4": "Cumple", "seccion3_5": "Cumple",
      "seccion3_6": "Cumple", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Cumple", "seccion3_10": "Parcial"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 4 creado"
echo ""

# Registro 5: Procuraduría General de la Nación
echo "📝 Creando registro 5: Procuraduría General de la Nación..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Procuraduría General de la Nación",
      "nivel": "Nacional",
      "sector": "Control Disciplinario",
      "responsable": "Juan Carlos Mendoza",
      "cargo": "Director de Archivo Central",
      "email": "juan.mendoza@procuraduria.gov.co",
      "telefono": "3134567890",
      "seccion1_1": "Cumple", "seccion1_2": "Parcial", "seccion1_3": "Cumple", "seccion1_4": "Cumple", "seccion1_5": "Parcial",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Parcial", "seccion1_9": "Cumple", "seccion1_10": "Cumple",
      "seccion2_1": "Parcial", "seccion2_2": "Cumple", "seccion2_3": "Cumple", "seccion2_4": "Parcial", "seccion2_5": "Cumple",
      "seccion2_6": "Cumple", "seccion2_7": "Parcial", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Parcial",
      "seccion3_1": "Cumple", "seccion3_2": "Parcial", "seccion3_3": "Cumple", "seccion3_4": "Cumple", "seccion3_5": "Parcial",
      "seccion3_6": "Cumple", "seccion3_7": "Cumple", "seccion3_8": "Parcial", "seccion3_9": "Cumple", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 5 creado"
echo ""

echo "✅ Proceso completado exitosamente"
echo "📊 Total de nuevos registros creados: 5"
echo ""
echo "Para verificar todos los registros, visita: http://localhost:5173/results"
