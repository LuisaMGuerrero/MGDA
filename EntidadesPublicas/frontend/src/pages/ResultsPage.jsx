import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Chip,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button } from '@mui/material';
import { surveyAPI } from '../services/api';

function ResultsPage() {
  const [surveys, setSurveys] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [surveysResponse, statsResponse] = await Promise.all([
        surveyAPI.getAll({ limit: 50 }),
        surveyAPI.getStats(),
      ]);
      setSurveys(surveysResponse.data || []);
      setStats(statsResponse.data || null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error al cargar los resultados. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar esta respuesta?')) {
      try {
        await surveyAPI.delete(id);
        fetchData();
      } catch (err) {
        console.error('Error deleting survey:', err);
        alert('Error al eliminar la respuesta');
      }
    }
  };

  const handleView = (survey) => {
    console.log('Survey data:', survey);
    setSelectedSurvey(survey);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSurvey(null);
  };

  const renderFieldValue = (key, value) => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'Sí' : 'No';
    }
    if (value === null || value === undefined || value === '') {
      return '-';
    }
    return String(value);
  };

  const getFieldLabel = (key) => {
    const labels = {
      firstName: 'Nombre',
      lastName: 'Apellido',
      age: 'Edad',
      gender: 'Género',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      city: 'Ciudad',
      country: 'País',
      interests: 'Áreas de Interés',
      contactPreference: 'Preferencia de Contacto',
      newsletter: 'Boletín Informativo',
      comments: 'Comentarios',
      satisfaction: 'Satisfacción'
    };
    return labels[key] || key;
  };

  const handleGeneratePresentation = async () => {
    try {
      setLoading(true);
      const blob = await surveyAPI.generatePresentation();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Resultados_Formulario_${Date.now()}.pptx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setLoading(false);
    } catch (err) {
      console.error('Error generating presentation:', err);
      setError('Error al generar la presentación. Por favor, intente nuevamente.');
      setLoading(false);
    }
  };

  const handleGenerateIndividualPresentation = async (survey) => {
    try {
      const blob = await surveyAPI.generateIndividualPresentation(survey._id);
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const entityName = survey.surveyData.nombre_entidad || 'Entidad';
      link.download = `Diagnostico_${entityName.replace(/\s+/g, '_')}_${Date.now()}.pptx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating individual presentation:', err);
      alert('Error al generar la presentación individual. Por favor, intente nuevamente.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box className="fade-in" sx={{ py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
            Resultados del Formulario
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SlideshowIcon />}
              onClick={handleGeneratePresentation}
              disabled={loading || surveys.length === 0}
            >
              Generar Presentación
            </Button>
            <Tooltip title="Actualizar">
              <IconButton onClick={fetchData} color="primary">
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Estadísticas */}
        {stats && (
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Total de Respuestas
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.total}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Completadas
                  </Typography>
                  <Typography variant="h4" component="div" color="success.main">
                    {stats.completed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Borradores
                  </Typography>
                  <Typography variant="h4" component="div" color="warning.main">
                    {stats.draft}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Tasa de Completado
                  </Typography>
                  <Typography variant="h4" component="div" color="primary.main">
                    {stats.completionRate}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Tabla de Resultados */}
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  Estado
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  Fecha de Creación
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  Fecha de Completado
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {surveys.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography variant="body1" color="text.secondary" sx={{ py: 4 }}>
                      No hay resultados disponibles
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                surveys.map((survey) => (
                  <TableRow
                    key={survey._id}
                    sx={{
                      '&:hover': { backgroundColor: 'action.hover' },
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {survey._id.substring(0, 8)}...
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={survey.status}
                        color={survey.status === 'completed' ? 'success' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{formatDate(survey.createdAt)}</TableCell>
                    <TableCell>
                      {survey.completedAt
                        ? formatDate(survey.completedAt)
                        : '-'}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Ver detalles">
                        <IconButton
                          size="small"
                          onClick={() => handleView(survey)}
                          color="primary"
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Generar Presentación">
                        <IconButton
                          size="small"
                          onClick={() => handleGenerateIndividualPresentation(survey)}
                          color="secondary"
                        >
                          <DescriptionIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar">
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(survey._id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog para ver detalles completos */}
        <Dialog 
          open={openDialog} 
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
              Detalles de la Respuesta
            </Typography>
            {selectedSurvey && (
              <Typography variant="caption" color="text.secondary">
                ID: {selectedSurvey._id}
              </Typography>
            )}
          </DialogTitle>
          <DialogContent dividers>
            {selectedSurvey && (
              <Box>
                {/* Información de la Entidad */}
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Información de la Entidad
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {[
                    { key: 'nombre_entidad', label: 'Nombre de la Entidad' },
                    { key: 'nivel', label: 'Nivel' },
                    { key: 'sector', label: 'Sector' },
                    { key: 'caracter', label: 'Carácter' },
                    { key: 'categoria', label: 'Categoría' },
                    { key: 'organismo', label: 'Organismo' },
                    { key: 'rama', label: 'Rama' },
                    { key: 'municipio', label: 'Municipio' },
                    { key: 'departamento', label: 'Departamento' },
                    { key: 'direccion', label: 'Dirección' },
                    { key: 'telefono', label: 'Teléfono' },
                    { key: 'fax', label: 'Fax' },
                    { key: 'correo', label: 'Correo Electrónico' },
                    { key: 'web', label: 'Sitio Web' },
                    { key: 'fecha_creacion', label: 'Fecha de Creación' },
                    { key: 'acto_legal', label: 'Acto Legal de Creación' },
                    { key: 'numero_dependencias', label: 'Número de Dependencias' },
                    { key: 'tiene_sucursales', label: '¿Tiene Sucursales?' }
                  ].map(({ key, label }) => (
                    selectedSurvey.surveyData[key] !== undefined && selectedSurvey.surveyData[key] !== '' && (
                      <Grid item xs={12} sm={6} key={key}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            {label}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {renderFieldValue(key, selectedSurvey.surveyData[key])}
                          </Typography>
                        </Paper>
                      </Grid>
                    )
                  ))}
                </Grid>

                {/* Representante Legal */}
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Representante Legal
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {[
                    { key: 'rep_nombre', label: 'Nombre' },
                    { key: 'rep_cargo', label: 'Cargo' },
                    { key: 'rep_profesion', label: 'Profesión' }
                  ].map(({ key, label }) => (
                    selectedSurvey.surveyData[key] !== undefined && selectedSurvey.surveyData[key] !== '' && (
                      <Grid item xs={12} sm={6} key={key}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            {label}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {renderFieldValue(key, selectedSurvey.surveyData[key])}
                          </Typography>
                        </Paper>
                      </Grid>
                    )
                  ))}
                </Grid>

                {/* Diligenciador */}
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Diligenciador
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {[
                    { key: 'dil_nombre', label: 'Nombre' },
                    { key: 'dil_tiempo', label: 'Tiempo en el Cargo' }
                  ].map(({ key, label }) => (
                    selectedSurvey.surveyData[key] !== undefined && selectedSurvey.surveyData[key] !== '' && (
                      <Grid item xs={12} sm={6} key={key}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                          <Typography variant="caption" color="text.secondary">
                            {label}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {renderFieldValue(key, selectedSurvey.surveyData[key])}
                          </Typography>
                        </Paper>
                      </Grid>
                    )
                  ))}
                </Grid>

                {/* Aspectos Administrativos */}
                {Object.keys(selectedSurvey.surveyData).some(k => k.startsWith('1_') || k.startsWith('2_') || k.startsWith('3_') || k.startsWith('4_')) && (
                  <>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                      I. Aspectos Administrativos
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {Object.keys(selectedSurvey.surveyData)
                        .filter(key => (key.startsWith('1_') || key.startsWith('2_') || key.startsWith('3_') || key.startsWith('4_')) && 
                                      !key.includes('_detail') && !key.includes('_obs') && !key.includes('_info'))
                        .sort()
                        .map(key => (
                          <Grid item xs={12} sm={6} md={4} key={key}>
                            <Paper elevation={1} sx={{ p: 2, bgcolor: selectedSurvey.surveyData[key] === 'Cumple' ? '#e8f5e9' : selectedSurvey.surveyData[key] === 'Parcial' ? '#fff3e0' : '#ffebee' }}>
                              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                {key}
                              </Typography>
                              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                                {selectedSurvey.surveyData[key]}
                              </Typography>
                              {selectedSurvey.surveyData[`${key}_detail`] && (
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                                  Detalle: {selectedSurvey.surveyData[`${key}_detail`]}
                                </Typography>
                              )}
                              {selectedSurvey.surveyData[`${key}_info`] && (
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                                  Info: {selectedSurvey.surveyData[`${key}_info`]}
                                </Typography>
                              )}
                            </Paper>
                          </Grid>
                        ))}
                    </Grid>
                  </>
                )}

                {/* Función Archivística */}
                {Object.keys(selectedSurvey.surveyData).some(k => k.startsWith('5_') || k.startsWith('6_') || k.startsWith('7_')) && (
                  <>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                      II. Aspectos de Función Archivística
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {Object.keys(selectedSurvey.surveyData)
                        .filter(key => (key.startsWith('5_') || key.startsWith('6_') || key.startsWith('7_')) && 
                                      !key.includes('_detail') && !key.includes('_obs') && !key.includes('_info'))
                        .sort()
                        .map(key => (
                          <Grid item xs={12} sm={6} md={4} key={key}>
                            <Paper elevation={1} sx={{ p: 2, bgcolor: selectedSurvey.surveyData[key] === 'Cumple' ? '#e8f5e9' : selectedSurvey.surveyData[key] === 'Parcial' ? '#fff3e0' : '#ffebee' }}>
                              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                {key}
                              </Typography>
                              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                                {selectedSurvey.surveyData[key]}
                              </Typography>
                              {selectedSurvey.surveyData[`${key}_detail`] && (
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                                  Detalle: {selectedSurvey.surveyData[`${key}_detail`]}
                                </Typography>
                              )}
                            </Paper>
                          </Grid>
                        ))}
                    </Grid>
                  </>
                )}

                {/* Preservación */}
                {Object.keys(selectedSurvey.surveyData).some(k => k.startsWith('8_')) && (
                  <>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                      III. Aspectos de Preservación
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {Object.keys(selectedSurvey.surveyData)
                        .filter(key => key.startsWith('8_') && !key.includes('_detail') && !key.includes('_obs') && !key.includes('_info'))
                        .sort()
                        .map(key => (
                          <Grid item xs={12} sm={6} md={4} key={key}>
                            <Paper elevation={1} sx={{ p: 2, bgcolor: selectedSurvey.surveyData[key] === 'Cumple' ? '#e8f5e9' : selectedSurvey.surveyData[key] === 'Parcial' ? '#fff3e0' : '#ffebee' }}>
                              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                {key}
                              </Typography>
                              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                                {selectedSurvey.surveyData[key]}
                              </Typography>
                              {selectedSurvey.surveyData[`${key}_detail`] && (
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                                  Detalle: {selectedSurvey.surveyData[`${key}_detail`]}
                                </Typography>
                              )}
                            </Paper>
                          </Grid>
                        ))}
                    </Grid>
                  </>
                )}

                {/* Metadata */}
                <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Fecha de creación: {formatDate(selectedSurvey.createdAt)}
                  </Typography>
                  {selectedSurvey.completedAt && (
                    <Typography variant="caption" color="text.secondary" display="block">
                      Fecha de completado: {formatDate(selectedSurvey.completedAt)}
                    </Typography>
                  )}
                  <Typography variant="caption" color="text.secondary" display="block">
                    Estado: {selectedSurvey.status}
                  </Typography>
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default ResultsPage;
