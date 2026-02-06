import { useState, useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { Box, Paper, Alert, CircularProgress } from '@mui/material';
import 'survey-core/defaultV2.min.css';
import { surveyAPI } from '../../services/api';
import surveyJson from '../../config/surveyConfig';

function SurveyComponent({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Crear modelo de SurveyJS
  const survey = new Model(surveyJson);

  // Configurar tema
  survey.applyTheme({
    themeName: 'defaultV2',
    colorPalette: 'light',
    isPanelless: false,
  });

  // Manejar completado del formulario
  const handleComplete = useCallback(async (sender) => {
    setLoading(true);
    setError(null);

    try {
      const surveyData = sender.data;
      console.log('Survey Data:', surveyData);

      // Enviar datos al backend
      const response = await surveyAPI.create(surveyData, 'completed');
      
      console.log('Response:', response);
      setSuccess(true);

      // Callback opcional
      if (onComplete) {
        onComplete(response.data);
      }

      // Mostrar mensaje de éxito
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setError(
        err.response?.data?.message || 
        'Error al enviar el formulario. Por favor, intente nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  }, [onComplete]);

  // Manejar cambios parciales (guardar como draft)
  const handleValueChanged = useCallback((sender) => {
    // Aquí se puede implementar auto-guardado como draft
    console.log('Current data:', sender.data);
  }, []);

  // Asignar eventos
  survey.onComplete.add(handleComplete);
  survey.onValueChanged.add(handleValueChanged);

  return (
    <Box className="fade-in">
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          ¡Formulario enviado exitosamente! Gracias por su participación.
        </Alert>
      )}

      <Paper elevation={3} sx={{ p: 3, position: 'relative' }}>
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 1000,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        
        <Survey model={survey} />
      </Paper>
    </Box>
  );
}

export default SurveyComponent;
