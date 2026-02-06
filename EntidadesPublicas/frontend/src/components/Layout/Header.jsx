import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <AssignmentIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          SurveyJS Multi-Step Form
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => navigate('/')}
            sx={{
              fontWeight: location.pathname === '/' ? 'bold' : 'normal',
            }}
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/survey')}
            sx={{
              fontWeight: location.pathname === '/survey' ? 'bold' : 'normal',
            }}
          >
            Formulario
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/results')}
            sx={{
              fontWeight: location.pathname === '/results' ? 'bold' : 'normal',
            }}
          >
            Resultados
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
