import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {currentYear} SurveyJS Application. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="https://surveyjs.io/form-library/documentation/overview"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
            >
              Documentación SurveyJS
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
            >
              GitHub
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
