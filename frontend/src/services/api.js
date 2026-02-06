import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejo de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Survey API
export const surveyAPI = {
  // Crear nueva respuesta de formulario
  create: async (surveyData, status = 'completed') => {
    const response = await api.post('/surveys', {
      surveyData,
      status,
      metadata: {
        sessionId: generateSessionId(),
      },
    });
    return response.data;
  },

  // Obtener todas las respuestas
  getAll: async (params = {}) => {
    const response = await api.get('/surveys', { params });
    return response.data;
  },

  // Obtener respuesta por ID
  getById: async (id) => {
    const response = await api.get(`/surveys/${id}`);
    return response.data;
  },

  // Actualizar respuesta
  update: async (id, surveyData, status) => {
    const response = await api.put(`/surveys/${id}`, {
      surveyData,
      status,
    });
    return response.data;
  },

  // Eliminar respuesta
  delete: async (id) => {
    const response = await api.delete(`/surveys/${id}`);
    return response.data;
  },

  // Obtener estadísticas
  getStats: async () => {
    const response = await api.get('/surveys/stats');
    return response.data;
  },

  // Generar presentación PPTX
  generatePresentation: async () => {
    const response = await api.get('/surveys/presentation', {
      responseType: 'blob'
    });
    return response.data;
  },

  // Generar presentación PPTX individual
  generateIndividualPresentation: async (id) => {
    const response = await api.get(`/surveys/${id}/presentation`, {
      responseType: 'blob'
    });
    return response.data;
  },
};

// Survey Definition API
export const surveyDefinitionAPI = {
  // Obtener definición activa
  getActive: async () => {
    const response = await api.get('/survey-definitions/active');
    return response.data;
  },

  // Crear o actualizar definición
  createOrUpdate: async (definition) => {
    const response = await api.post('/survey-definitions', definition);
    return response.data;
  },

  // Obtener todas las definiciones
  getAll: async () => {
    const response = await api.get('/survey-definitions');
    return response.data;
  },

  // Obtener definición por ID
  getById: async (id) => {
    const response = await api.get(`/survey-definitions/${id}`);
    return response.data;
  },

  // Eliminar definición
  delete: async (id) => {
    const response = await api.delete(`/survey-definitions/${id}`);
    return response.data;
  },
};

// Utilidad para generar ID de sesión
function generateSessionId() {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export default api;
