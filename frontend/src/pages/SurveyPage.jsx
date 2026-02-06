import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import SurveyComponent from '../components/Survey/SurveyComponent';

function SurveyPage() {
  const navigate = useNavigate();

  const handleSurveyComplete = (data) => {
    console.log('Survey completed with data:', data);
    // Redirigir a resultados después de completar
    setTimeout(() => {
      navigate('/results');
    }, 2000);
  };

  return (
    <Container maxWidth="md">
      <Box className="fade-in" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4, fontWeight: 600 }}
        >
          Formulario Multi-Step
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          paragraph
          sx={{ mb: 4 }}
        >
          Complete el siguiente formulario paso a paso. Todos los campos marcados
          con asterisco (*) son obligatorios.
        </Typography>
        
        <SurveyComponent onComplete={handleSurveyComplete} />
      </Box>
    </Container>
  );
}

export default SurveyPage;
