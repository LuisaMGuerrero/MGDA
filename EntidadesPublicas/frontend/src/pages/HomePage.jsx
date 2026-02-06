import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';

function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <AssignmentIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Multi-Step Form',
      description: 'Formulario dividido en pasos para mejor experiencia de usuario',
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Validación Robusta',
      description: 'Validación en tiempo real de todos los campos del formulario',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Alto Rendimiento',
      description: 'Optimizado para velocidad y eficiencia con React y Vite',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Seguro y Escalable',
      description: 'Arquitectura modular lista para integración y escalabilidad',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box className="fade-in">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SurveyJS Multi-Step Form
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Aplicativo profesional modular con formulario multi-step
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/survey')}
              sx={{ px: 4, py: 1.5 }}
            >
              Comenzar Formulario
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/results')}
              sx={{ px: 4, py: 1.5 }}
            >
              Ver Resultados
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Características Principales
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tech Stack Section */}
        <Box
          sx={{
            py: 6,
            px: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            mt: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Stack Tecnológico
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              'React 18',
              'Vite',
              'SurveyJS',
              'Material UI',
              'Tailwind CSS',
              'Node.js',
              'Express',
              'MongoDB',
              'Docker',
            ].map((tech, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    px: 3,
                    py: 1.5,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
          }}
        >
          <Typography variant="h5" gutterBottom>
            ¿Listo para comenzar?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Complete nuestro formulario multi-step en pocos minutos
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/survey')}
            sx={{ px: 6, py: 1.5, mt: 2 }}
          >
            Iniciar Ahora
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
