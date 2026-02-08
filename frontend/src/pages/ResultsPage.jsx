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
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import DescriptionIcon from '@mui/icons-material/Description';
import { surveyAPI } from '../services/api';

// Chart.js
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(...registerables);

const calculateScores = (surveyData) => {
  if (!surveyData) return { catScores: {}, subcatScores: {} };

  const categories = [
    {
      name: "ESTRATÉGICO",
      questions: [
        "DIAGNOSTICO_SEL",
        "POLITICA_GD_SEL",
        "PGD_SEL",
        "PINAR_SEL",
        "SIC_SEL",
        "PLAN_ANALISIS_SEL",
        "MATRIZ_RIESGOS_SEL",
        "ARTICULACION_PE_SEL",
        "ARTICULACION_MIPG_SEL",
        "INDICADORES_GESTION_SEL",
        "INFORMES_GESTION_SEL",
        "PROGRAMA_AUDITORIA_SEL"
      ],
      subcategories: {
        "PLANEACIÓN DE LA FUNCIÓN ARCHIVÍSTICA": [
          "DIAGNOSTICO_SEL",
          "POLITICA_GD_SEL",
          "PGD_SEL",
          "PINAR_SEL",
          "SIC_SEL",
          "PLAN_ANALISIS_SEL",
          "MATRIZ_RIESGOS_SEL"
        ],
        "PLANEACIÓN ESTRATÉGICA": [
          "ARTICULACION_PE_SEL",
          "ARTICULACION_MIPG_SEL"
        ],
        "CONTROL, EVALUACIÓN Y SEGUIMIENTO": [
          "INDICADORES_GESTION_SEL",
          "INFORMES_GESTION_SEL",
          "PROGRAMA_AUDITORIA_SEL"
        ]
      }
    },
    {
      name: "ADMINISTRACIÓN DE ARCHIVOS",
      questions: [
        "PLANEACION_ADMIN_SEL",
        "INFRAESTRUCTURA_LOCATIVA_SEL",
        "GESTION_HUMANA_SEL",
        "CAPACITACION_GD_SEL",
        "CONDICIONES_TRABAJO_SEL"
      ],
      subcategories: {
        "ADMINISTRACIÓN": ["PLANEACION_ADMIN_SEL"],
        "RECURSOS FÍSICOS": ["INFRAESTRUCTURA_LOCATIVA_SEL"],
        "TALENTO HUMANO": ["GESTION_HUMANA_SEL", "CAPACITACION_GD_SEL"],
        "GESTIÓN EN SEGURIDAD Y SALUD OCUPACIONAL": ["CONDICIONES_TRABAJO_SEL"]
      }
    },
    {
      name: "PROCESOS DE LA GESTIÓN DOCUMENTAL",
      subcategories: [
        {
          name: "PLANEACION_TECNICA",
          elements: [
            "DISENO_CREACION_DOC_SEL",
            "DOC_ESPECIALES_SEL",
            "CUADRO_CLASIFICACION_SEL",
            "TABLAS_RETENCION_SEL",
            "TABLAS_VALORACION_SEL"
          ]
        },
        {
          name: "PRODUCCION",
          elements: ["MEDIOS_TECNICAS_PRODUCCION_SEL", "REPROGRAFIA_SEL"]
        },
        { name: "GESTION_TRAMITE", elements: ["REGISTRO_DISTRIBUCION_SEL"] },
        { name: "ORGANIZACION", elements: ["DESCRIPCION_DOCUMENTAL_SEL"] },
        { name: "TRANSFERENCIAS", elements: ["PLAN_TRANSFERENCIAS_SEL"] },
        { name: "DISPOSICION_DOCUMENTOS", elements: ["ELIMINACION_DOCUMENTOS_SEL"] },
        { name: "PLANEACION_TECNICA_CONSERVACION", elements: ["PLAN_CONSERVACION_SEL", "PLAN_PRESERVACION_DIGITAL_SEL"] },
        { name: "VALORACION", elements: ["VALORES_PRIMARIOS_SECUNDARIOS_SEL"] }
      ]
    },
    {
      name: "TECNOLÓGICO",
      subcategories: [
        {
          name: "ARTICULACION_DOC_ELECTRONICOS",
          elements: ["GESTION_DOC_PROC_SEL", "GESTION_DOC_CANAL_SEL", "SISTEMA_INFO_CORP_SEL"]
        },
        {
          name: "TECNOLOGIAS_DOC_ELECTRONICOS",
          elements: [
            "MODELO_REQ_SEL",
            "SISTEMA_GDEA_SEL",
            "DIGITALIZACION_SEL",
            "ESQUEMA_METADATOS_SEL",
            "SISTEMA_PRESERVACION_SEL",
            "ALMACENAMIENTO_NUBE_SEL",
            "REPOSITORIOS_DIGITALES_SEL"
          ]
        },
        { name: "SEGURIDAD_PRIVACIDAD", elements: ["ARTICULACION_POLITICAS_SEG_INFO_SEL", "COPIA_SEGURIDAD_ARCHIVO_DIG_SEL"] },
        { name: "INTEROPERABILIDAD", elements: ["INTEROPERABILIDAD_POLITICO_LEGAL_SEL", "INTEROPERABILIDAD_SEMANTICO_SEL", "INTEROPERABILIDAD_TECNICO_SEL"] }
      ]
    },
    {
      name: "CULTURAL",
      subcategories: [
        {
          name: "GESTION_CONOCIMIENTO",
          elements: ["PROGRAMA_GESTION_CONOCIMIENTO_SEL", "MEMORIA_INSTITUCIONAL_SEL", "ARCHIVOS_HISTORICOS_SEL"]
        },
        {
          name: "REDES_CULTURALES",
          elements: ["REDES_CULTURALES_SEL", "RENDICION_CUENTAS_SEL", "MECANISMOS_DIFUSION_SEL", "ACCESO_CONSULTA_INFO_SEL"]
        },
        {
          name: "PROTECCION_AMBIENTE",
          elements: ["PLAN_AMBIENTAL_SEL"]
        }
      ]
    }
  ];

  const catScores = {};
  const subcatScores = {};

  categories.forEach(cat => {
    const values = (cat.questions || [])
      .map(q => Number(surveyData[q]))
      .filter(v => !isNaN(v));

    catScores[cat.name] = values.length
      ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
      : 0;

    subcatScores[cat.name] = {};
    if (cat.subcategories) {
      if (Array.isArray(cat.subcategories)) {
        // Para las subcategorías tipo array (Procesos y Comps)
        cat.subcategories.forEach(sub => {
          const subValues = (sub.elements || [])
            .map(q => Number(surveyData[q]))
            .filter(v => !isNaN(v));
          subcatScores[cat.name][sub.name] = subValues.length
            ? Math.round(subValues.reduce((a, b) => a + b, 0) / subValues.length)
            : 0;
        });
      } else {
        // Para las subcategorías tipo objeto (Estratégico, Admin)
        Object.entries(cat.subcategories).forEach(([sub, qs]) => {
          const subValues = qs.map(q => Number(surveyData[q])).filter(v => !isNaN(v));
          subcatScores[cat.name][sub] = subValues.length
            ? Math.round(subValues.reduce((a, b) => a + b, 0) / subValues.length)
            : 0;
        });
      }
    }
  });

  return { catScores, subcatScores };
};

function ResultsPage() {

  const [surveys, setSurveys] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // ----------------- Funciones de Nivel de Madurez -----------------
  const getMaturityLevel = (score) => {
    if (score === 0) return { level: "Inicial", definition: "Entidad carece del producto", ponderation: "0%" };
    if (score <= 65) return { level: "Básico", definition: "Entidad en desarrollo del producto", ponderation: "<=65%" };
    if (score <= 79) return { level: "Intermedio", definition: "Entidad implementa el producto", ponderation: "66-79%" };
    if (score <= 94) return { level: "Avanzado 1", definition: "Desarrollo conforme a lo planeado", ponderation: "80-94%" };
    return { level: "Avanzado 2", definition: "Mejora continua", ponderation: ">=95%" };
  };

  // ----------------- Funciones para API -----------------
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

  useEffect(() => { fetchData(); }, []);

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
    setSelectedSurvey(survey);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSurvey(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('es-ES', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 600, mb: 3 }}>
          Resultados del Formulario
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        {/* Tabla de resultados */}
        <TableContainer component={Paper} elevation={3} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Estado</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Fecha de Creación</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Fecha de Completado</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {surveys.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">No hay resultados disponibles</TableCell>
                </TableRow>
              ) : surveys.map(survey => (
                <TableRow key={survey._id}>
                  <TableCell>{survey._id.substring(0, 8)}...</TableCell>
                  <TableCell>
                    <Chip label={survey.status} color={survey.status === 'completed' ? 'success' : 'warning'} size="small" />
                  </TableCell>
                  <TableCell>{formatDate(survey.createdAt)}</TableCell>
                  <TableCell>{survey.completedAt ? formatDate(survey.completedAt) : '-'}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Ver detalles">
                      <IconButton size="small" onClick={() => handleView(survey)} color="primary"><VisibilityIcon /></IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar">
                      <IconButton size="small" onClick={() => handleDelete(survey._id)} color="error"><DeleteIcon /></IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog para detalles y gráficos */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg" fullWidth>
          <DialogTitle>
            Detalles de la Respuesta
            {selectedSurvey && <Typography variant="caption" color="text.secondary">ID: {selectedSurvey._id}</Typography>}
          </DialogTitle>
          <DialogContent dividers>
            {selectedSurvey && (
              <Box>
                {/* Niveles de madurez */}
                <Typography variant="h5" sx={{ mb: 2 }}>Niveles de Madurez</Typography>

                {(() => {
                  const { catScores, subcatScores } = calculateScores(selectedSurvey.surveyData);
                  const generalScore = Math.round(Object.values(catScores).reduce((a, b) => a + b, 0) / Object.values(catScores).length);

                  return (
                    <Box>
                      {/* Nivel general */}
                      <Typography variant="h6" sx={{ mb: 1 }}>Nivel General: {getMaturityLevel(generalScore).level} ({generalScore}%)</Typography>

                      {/* Nivel por categoría */}
                      <Typography variant="subtitle1">Por Categoría:</Typography>
                      {Object.entries(catScores).map(([cat, score]) => {
                        const lvl = getMaturityLevel(score);
                        return <Typography key={cat}>{cat}: {lvl.level} ({score}%) - {lvl.definition}</Typography>;
                      })}

                      {/* Gráfica por categoría */}
                      <Box sx={{ mt: 3, mb: 4 }}>
                        <Bar
                          data={{
                            labels: Object.keys(catScores),
                            datasets: [{ label: "Nivel por Categoría", data: Object.values(catScores), backgroundColor: "rgba(75,192,192,0.6)" }]
                          }}
                          options={{ responsive: true, plugins: { legend: { display: false } } }}
                        />
                      </Box>

                      {/* Gráfica por subcategoría */}
                      <Typography variant="subtitle1" sx={{ mt: 2 }}>Por Subcategoría:</Typography>
                      {Object.entries(subcatScores).map(([cat, subs]) => (
                        <Box key={cat} sx={{ mt: 2, mb: 3 }}>
                          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>{cat}</Typography>
                          <Bar
                            data={{
                              labels: Object.keys(subs),
                              datasets: [{ label: "Nivel Subcategoría", data: Object.values(subs), backgroundColor: "rgba(153,102,255,0.6)" }]
                            }}
                            options={{ responsive: true, plugins: { legend: { display: false } } }}
                          />
                        </Box>
                      ))}
                    </Box>
                  );
                })()}
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default ResultsPage;