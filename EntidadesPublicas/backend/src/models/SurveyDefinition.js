import mongoose from 'mongoose';

const surveyDefinitionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      description: 'Nombre identificador de la definición del formulario'
    },
    version: {
      type: String,
      default: '1.0.0',
      description: 'Versión de la definición'
    },
    definition: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      description: 'Definición JSON del formulario SurveyJS'
    },
    isActive: {
      type: Boolean,
      default: true,
      description: 'Indica si esta definición está activa'
    },
    description: {
      type: String,
      description: 'Descripción del formulario'
    }
  },
  {
    timestamps: true,
    collection: 'survey_definitions'
  }
);

// Índices
surveyDefinitionSchema.index({ name: 1, version: 1 });
surveyDefinitionSchema.index({ isActive: 1 });

const SurveyDefinition = mongoose.model('SurveyDefinition', surveyDefinitionSchema);

export default SurveyDefinition;
