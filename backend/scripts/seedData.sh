#!/bin/bash

# Script para crear registros de prueba en la base de datos
# Asegúrate de que el backend esté corriendo antes de ejecutar este script

API_URL="http://localhost:3000/api/surveys"

echo "🚀 Iniciando creación de registros de prueba..."
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
  }' -s > /dev/null
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
  }' -s > /dev/null
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
  }' -s > /dev/null
echo "✅ Registro 3 creado"
echo ""

# Registro 4: Alcaldía de Medellín
echo "📝 Creando registro 4: Alcaldía de Medellín..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Alcaldía de Medellín",
      "nivel": "Municipal",
      "sector": "Administración Pública",
      "responsable": "Luis Fernando Gómez",
      "cargo": "Director de Archivo Municipal",
      "email": "luis.gomez@medellin.gov.co",
      "telefono": "3157654321",
      "seccion1_1": "Parcial", "seccion1_2": "Cumple", "seccion1_3": "No cumple", "seccion1_4": "Parcial", "seccion1_5": "Cumple",
      "seccion1_6": "Parcial", "seccion1_7": "Cumple", "seccion1_8": "No cumple", "seccion1_9": "Parcial", "seccion1_10": "Cumple",
      "seccion2_1": "Parcial", "seccion2_2": "Cumple", "seccion2_3": "Parcial", "seccion2_4": "No cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Parcial", "seccion2_7": "Cumple", "seccion2_8": "Parcial", "seccion2_9": "No cumple", "seccion2_10": "Cumple",
      "seccion3_1": "Cumple", "seccion3_2": "Parcial", "seccion3_3": "No cumple", "seccion3_4": "Cumple", "seccion3_5": "Parcial",
      "seccion3_6": "Cumple", "seccion3_7": "No cumple", "seccion3_8": "Parcial", "seccion3_9": "Cumple", "seccion3_10": "Parcial"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 4 creado"
echo ""

# Registro 5: Universidad Nacional de Colombia
echo "📝 Creando registro 5: Universidad Nacional de Colombia..."
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
  }' -s > /dev/null
echo "✅ Registro 5 creado"
echo ""

# Registro 6: Ministerio de Hacienda
echo "📝 Creando registro 6: Ministerio de Hacienda..."
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
  }' -s > /dev/null
echo "✅ Registro 6 creado"
echo ""

# Registro 7: Gobernación del Valle del Cauca
echo "📝 Creando registro 7: Gobernación del Valle del Cauca..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Gobernación del Valle del Cauca",
      "nivel": "Departamental",
      "sector": "Administración Pública",
      "responsable": "Diana Martínez",
      "cargo": "Directora de Archivo",
      "email": "diana.martinez@valledelcauca.gov.co",
      "telefono": "3176543210",
      "seccion1_1": "Parcial", "seccion1_2": "Parcial", "seccion1_3": "Cumple", "seccion1_4": "No cumple", "seccion1_5": "Parcial",
      "seccion1_6": "Cumple", "seccion1_7": "Parcial", "seccion1_8": "Cumple", "seccion1_9": "No cumple", "seccion1_10": "Parcial",
      "seccion2_1": "Cumple", "seccion2_2": "Parcial", "seccion2_3": "No cumple", "seccion2_4": "Parcial", "seccion2_5": "Cumple",
      "seccion2_6": "No cumple", "seccion2_7": "Parcial", "seccion2_8": "Cumple", "seccion2_9": "Parcial", "seccion2_10": "No cumple",
      "seccion3_1": "Parcial", "seccion3_2": "Cumple", "seccion3_3": "Parcial", "seccion3_4": "No cumple", "seccion3_5": "Parcial",
      "seccion3_6": "Cumple", "seccion3_7": "Parcial", "seccion3_8": "No cumple", "seccion3_9": "Cumple", "seccion3_10": "Parcial"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 7 creado"
echo ""

# Registro 8: Alcaldía de Cali
echo "📝 Creando registro 8: Alcaldía de Cali..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entidad": "Alcaldía de Cali",
      "nivel": "Municipal",
      "sector": "Administración Pública",
      "responsable": "Jorge Ramírez",
      "cargo": "Jefe de Archivo",
      "email": "jorge.ramirez@cali.gov.co",
      "telefono": "3198765432",
      "seccion1_1": "Cumple", "seccion1_2": "Parcial", "seccion1_3": "Cumple", "seccion1_4": "Cumple", "seccion1_5": "Parcial",
      "seccion1_6": "Cumple", "seccion1_7": "Cumple", "seccion1_8": "Parcial", "seccion1_9": "Cumple", "seccion1_10": "Cumple",
      "seccion2_1": "Cumple", "seccion2_2": "Cumple", "seccion2_3": "Parcial", "seccion2_4": "Cumple", "seccion2_5": "Cumple",
      "seccion2_6": "Parcial", "seccion2_7": "Cumple", "seccion2_8": "Cumple", "seccion2_9": "Cumple", "seccion2_10": "Parcial",
      "seccion3_1": "Cumple", "seccion3_2": "Parcial", "seccion3_3": "Cumple", "seccion3_4": "Cumple", "seccion3_5": "Cumple",
      "seccion3_6": "Parcial", "seccion3_7": "Cumple", "seccion3_8": "Cumple", "seccion3_9": "Cumple", "seccion3_10": "Cumple"
    },
    "status": "completed"
  }' -s > /dev/null
echo "✅ Registro 8 creado"
echo ""

echo "✅ Proceso completado exitosamente"
echo "📊 Total de registros creados: 8"
echo ""
echo "Para verificar los registros, visita: http://localhost:5173/results"
