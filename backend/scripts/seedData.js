import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });

const surveySchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
  status: String,
  createdAt: Date,
  updatedAt: Date
});

const Survey = mongoose.model('Survey', surveySchema);

const sampleSurveys = [
  {
    data: {
      entidad: "Archivo General de la Nación",
      nivel: "Nacional",
      sector: "Cultura",
      responsable: "María González",
      cargo: "Directora de Archivo",
      email: "maria.gonzalez@archivonacional.gov.co",
      telefono: "3001234567",
      seccion1_1: "Cumple",
      seccion1_2: "Cumple",
      seccion1_3: "Cumple",
      seccion1_4: "Cumple",
      seccion1_5: "Parcial",
      seccion1_6: "Cumple",
      seccion1_7: "Cumple",
      seccion1_8: "Cumple",
      seccion1_9: "Cumple",
      seccion1_10: "Parcial",
      seccion2_1: "Cumple",
      seccion2_2: "Cumple",
      seccion2_3: "Cumple",
      seccion2_4: "Cumple",
      seccion2_5: "Cumple",
      seccion2_6: "Parcial",
      seccion2_7: "Cumple",
      seccion2_8: "Cumple",
      seccion2_9: "Cumple",
      seccion2_10: "Cumple",
      seccion3_1: "Cumple",
      seccion3_2: "Cumple",
      seccion3_3: "Parcial",
      seccion3_4: "Cumple",
      seccion3_5: "Cumple",
      seccion3_6: "Cumple",
      seccion3_7: "Cumple",
      seccion3_8: "Parcial",
      seccion3_9: "Cumple",
      seccion3_10: "Cumple"
    },
    status: "completed",
    createdAt: new Date('2024-12-15T10:30:00'),
    updatedAt: new Date('2024-12-15T10:30:00')
  },
  {
    data: {
      entidad: "Alcaldía de Bogotá",
      nivel: "Distrital",
      sector: "Administración Pública",
      responsable: "Carlos Rodríguez",
      cargo: "Jefe de Gestión Documental",
      email: "carlos.rodriguez@bogota.gov.co",
      telefono: "3109876543",
      seccion1_1: "Cumple",
      seccion1_2: "Parcial",
      seccion1_3: "Cumple",
      seccion1_4: "No cumple",
      seccion1_5: "Parcial",
      seccion1_6: "Cumple",
      seccion1_7: "Cumple",
      seccion1_8: "Parcial",
      seccion1_9: "Cumple",
      seccion1_10: "No cumple",
      seccion2_1: "Cumple",
      seccion2_2: "Cumple",
      seccion2_3: "Parcial",
      seccion2_4: "Cumple",
      seccion2_5: "Parcial",
      seccion2_6: "Cumple",
      seccion2_7: "Cumple",
      seccion2_8: "No cumple",
      seccion2_9: "Parcial",
      seccion2_10: "Cumple",
      seccion3_1: "Parcial",
      seccion3_2: "Cumple",
      seccion3_3: "No cumple",
      seccion3_4: "Parcial",
      seccion3_5: "Cumple",
      seccion3_6: "Cumple",
      seccion3_7: "Parcial",
      seccion3_8: "No cumple",
      seccion3_9: "Cumple",
      seccion3_10: "Parcial"
    },
    status: "completed",
    createdAt: new Date('2024-12-16T14:20:00'),
    updatedAt: new Date('2024-12-16T14:20:00')
  },
  {
    data: {
      entidad: "Gobernación de Antioquia",
      nivel: "Departamental",
      sector: "Administración Pública",
      responsable: "Ana María Pérez",
      cargo: "Coordinadora de Archivo",
      email: "ana.perez@antioquia.gov.co",
      telefono: "3201234567",
      seccion1_1: "Cumple",
      seccion1_2: "Cumple",
      seccion1_3: "Cumple",
      seccion1_4: "Cumple",
      seccion1_5: "Cumple",
      seccion1_6: "Parcial",
      seccion1_7: "Cumple",
      seccion1_8: "Cumple",
      seccion1_9: "Parcial",
      seccion1_10: "Cumple",
      seccion2_1: "Cumple",
      seccion2_2: "Cumple",
      seccion2_3: "Cumple",
      seccion2_4: "Parcial",
      seccion2_5: "Cumple",
      seccion2_6: "Cumple",
      seccion2_7: "Cumple",
      seccion2_8: "Cumple",
      seccion2_9: "Cumple",
      seccion2_10: "Parcial",
      seccion3_1: "Cumple",
      seccion3_2: "Cumple",
      seccion3_3: "Cumple",
      seccion3_4: "Cumple",
      seccion3_5: "Parcial",
      seccion3_6: "Cumple",
      seccion3_7: "Cumple",
      seccion3_8: "Cumple",
      seccion3_9: "Cumple",
      seccion3_10: "Cumple"
    },
    status: "completed",
    createdAt: new Date('2024-12-17T09:15:00'),
    updatedAt: new Date('2024-12-17T09:15:00')
  },
  {
    data: {
      entidad: "Alcaldía de Medellín",
      nivel: "Municipal",
      sector: "Administración Pública",
      responsable: "Luis Fernando Gómez",
      cargo: "Director de Archivo Municipal",
      email: "luis.gomez@medellin.gov.co",
      telefono: "3157654321",
      seccion1_1: "Parcial",
      seccion1_2: "Cumple",
      seccion1_3: "No cumple",
      seccion1_4: "Parcial",
      seccion1_5: "Cumple",
      seccion1_6: "Parcial",
      seccion1_7: "Cumple",
      seccion1_8: "No cumple",
      seccion1_9: "Parcial",
      seccion1_10: "Cumple",
      seccion2_1: "Parcial",
      seccion2_2: "Cumple",
      seccion2_3: "Parcial",
      seccion2_4: "No cumple",
      seccion2_5: "Cumple",
      seccion2_6: "Parcial",
      seccion2_7: "Cumple",
      seccion2_8: "Parcial",
      seccion2_9: "No cumple",
      seccion2_10: "Cumple",
      seccion3_1: "Cumple",
      seccion3_2: "Parcial",
      seccion3_3: "No cumple",
      seccion3_4: "Cumple",
      seccion3_5: "Parcial",
      seccion3_6: "Cumple",
      seccion3_7: "No cumple",
      seccion3_8: "Parcial",
      seccion3_9: "Cumple",
      seccion3_10: "Parcial"
    },
    status: "completed",
    createdAt: new Date('2024-12-17T16:45:00'),
    updatedAt: new Date('2024-12-17T16:45:00')
  },
  {
    data: {
      entidad: "Universidad Nacional de Colombia",
      nivel: "Nacional",
      sector: "Educación",
      responsable: "Patricia Morales",
      cargo: "Jefe de Archivo Central",
      email: "patricia.morales@unal.edu.co",
      telefono: "3189876543",
      seccion1_1: "Cumple",
      seccion1_2: "Cumple",
      seccion1_3: "Cumple",
      seccion1_4: "Cumple",
      seccion1_5: "Cumple",
      seccion1_6: "Cumple",
      seccion1_7: "Parcial",
      seccion1_8: "Cumple",
      seccion1_9: "Cumple",
      seccion1_10: "Cumple",
      seccion2_1: "Cumple",
      seccion2_2: "Cumple",
      seccion2_3: "Cumple",
      seccion2_4: "Cumple",
      seccion2_5: "Cumple",
      seccion2_6: "Cumple",
      seccion2_7: "Cumple",
      seccion2_8: "Parcial",
      seccion2_9: "Cumple",
      seccion2_10: "Cumple",
      seccion3_1: "Cumple",
      seccion3_2: "Cumple",
      seccion3_3: "Cumple",
      seccion3_4: "Cumple",
      seccion3_5: "Cumple",
      seccion3_6: "Parcial",
      seccion3_7: "Cumple",
      seccion3_8: "Cumple",
      seccion3_9: "Cumple",
      seccion3_10: "Cumple"
    },
    status: "completed",
    createdAt: new Date('2024-12-18T11:00:00'),
    updatedAt: new Date('2024-12-18T11:00:00')
  },
  {
    data: {
      entidad: "Ministerio de Hacienda",
      nivel: "Nacional",
      sector: "Hacienda",
      responsable: "Roberto Sánchez",
      cargo: "Coordinador de Gestión Documental",
      email: "roberto.sanchez@minhacienda.gov.co",
      telefono: "3145678901",
      seccion1_1: "Cumple",
      seccion1_2: "Cumple",
      seccion1_3: "Parcial",
      seccion1_4: "Cumple",
      seccion1_5: "Cumple",
      seccion1_6: "Cumple",
      seccion1_7: "Cumple",
      seccion1_8: "Cumple",
      seccion1_9: "Cumple",
      seccion1_10: "Parcial",
      seccion2_1: "Cumple",
      seccion2_2: "Parcial",
      seccion2_3: "Cumple",
      seccion2_4: "Cumple",
      seccion2_5: "Cumple",
      seccion2_6: "Cumple",
      seccion2_7: "Parcial",
      seccion2_8: "Cumple",
      seccion2_9: "Cumple",
      seccion2_10: "Cumple",
      seccion3_1: "Cumple",
      seccion3_2: "Cumple",
      seccion3_3: "Cumple",
      seccion3_4: "Parcial",
      seccion3_5: "Cumple",
      seccion3_6: "Cumple",
      seccion3_7: "Cumple",
      seccion3_8: "Cumple",
      seccion3_9: "Parcial",
      seccion3_10: "Cumple"
    },
    status: "completed",
    createdAt: new Date('2024-12-18T15:30:00'),
    updatedAt: new Date('2024-12-18T15:30:00')
  },
  {
    data: {
      entidad: "Gobernación del Valle del Cauca",
      nivel: "Departamental",
      sector: "Administración Pública",
      responsable: "Diana Martínez",
      cargo: "Directora de Archivo",
      email: "diana.martinez@valledelcauca.gov.co",
      telefono: "3176543210",
      seccion1_1: "Parcial",
      seccion1_2: "Parcial",
      seccion1_3: "Cumple",
      seccion1_4: "No cumple",
      seccion1_5: "Parcial",
      seccion1_6: "Cumple",
      seccion1_7: "Parcial",
      seccion1_8: "Cumple",
      seccion1_9: "No cumple",
      seccion1_10: "Parcial",
      seccion2_1: "Cumple",
      seccion2_2: "Parcial",
      seccion2_3: "No cumple",
      seccion2_4: "Parcial",
      seccion2_5: "Cumple",
      seccion2_6: "No cumple",
      seccion2_7: "Parcial",
      seccion2_8: "Cumple",
      seccion2_9: "Parcial",
      seccion2_10: "No cumple",
      seccion3_1: "Parcial",
      seccion3_2: "Cumple",
      seccion3_3: "Parcial",
      seccion3_4: "No cumple",
      seccion3_5: "Parcial",
      seccion3_6: "Cumple",
      seccion3_7: "Parcial",
      seccion3_8: "No cumple",
      seccion3_9: "Cumple",
      seccion3_10: "Parcial"
    },
    status: "completed",
    createdAt: new Date('2024-12-19T08:00:00'),
    updatedAt: new Date('2024-12-19T08:00:00')
  },
  {
    data: {
      entidad: "Alcaldía de Cali",
      nivel: "Municipal",
      sector: "Administración Pública",
      responsable: "Jorge Ramírez",
      cargo: "Jefe de Archivo",
      email: "jorge.ramirez@cali.gov.co",
      telefono: "3198765432",
      seccion1_1: "Cumple",
      seccion1_2: "Parcial",
      seccion1_3: "Cumple",
      seccion1_4: "Cumple",
      seccion1_5: "Parcial",
      seccion1_6: "Cumple",
      seccion1_7: "Cumple",
      seccion1_8: "Parcial",
      seccion1_9: "Cumple",
      seccion1_10: "Cumple",
      seccion2_1: "Cumple",
      seccion2_2: "Cumple",
      seccion2_3: "Parcial",
      seccion2_4: "Cumple",
      seccion2_5: "Cumple",
      seccion2_6: "Parcial",
      seccion2_7: "Cumple",
      seccion2_8: "Cumple",
      seccion2_9: "Cumple",
      seccion2_10: "Parcial",
      seccion3_1: "Cumple",
      seccion3_2: "Parcial",
      seccion3_3: "Cumple",
      seccion3_4: "Cumple",
      seccion3_5: "Cumple",
      seccion3_6: "Parcial",
      seccion3_7: "Cumple",
      seccion3_8: "Cumple",
      seccion3_9: "Cumple",
      seccion3_10: "Cumple"
    },
    status: "completed",
    createdAt: new Date('2024-12-19T10:30:00'),
    updatedAt: new Date('2024-12-19T10:30:00')
  }
];

async function seedDatabase() {
  try {
    console.log('🔌 Conectando a MongoDB Atlas...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB Atlas');

    console.log('🗑️  Limpiando registros existentes...');
    await Survey.deleteMany({});
    console.log('✅ Registros limpiados');

    console.log('📝 Insertando registros de prueba...');
    const result = await Survey.insertMany(sampleSurveys);
    console.log(`✅ ${result.length} registros insertados exitosamente`);

    console.log('\n📊 Registros creados:');
    result.forEach((survey, index) => {
      console.log(`${index + 1}. ${survey.data.entidad} - ${survey.data.nivel} - ${survey.data.sector}`);
    });

    console.log('\n✅ Proceso completado exitosamente');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seedDatabase();
