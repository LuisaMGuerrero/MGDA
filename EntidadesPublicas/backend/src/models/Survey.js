import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema(
  {
    surveyData: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      description: 'Datos completos del formulario completado'
    },
    status: {
      type: String,
      enum: ['draft', 'completed'],
      default: 'draft',
      description: 'Estado del formulario'
    },
    completedAt: {
      type: Date,
      description: 'Fecha de completado del formulario'
    },
    metadata: {
      userAgent: {
        type: String,
        description: 'User agent del navegador'
      },
      ipAddress: {
        type: String,
        description: 'Dirección IP del usuario'
      },
      sessionId: {
        type: String,
        description: 'ID de sesión'
      }
    }
  },
  {
    timestamps: true,
    collection: 'surveys'
  }
);

// Índices para optimizar búsquedas
surveySchema.index({ status: 1 });
surveySchema.index({ createdAt: -1 });
surveySchema.index({ completedAt: -1 });

// Método para marcar como completado
surveySchema.methods.markAsCompleted = function() {
  this.status = 'completed';
  this.completedAt = new Date();
  return this.save();
};

const Survey = mongoose.model('Survey', surveySchema);

export default Survey;
