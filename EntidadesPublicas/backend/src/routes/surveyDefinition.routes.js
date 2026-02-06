import express from 'express';
import {
  getActiveSurveyDefinition,
  createOrUpdateSurveyDefinition,
  getAllSurveyDefinitions,
  getSurveyDefinitionById,
  deleteSurveyDefinition
} from '../controllers/surveyDefinition.controller.js';
import { validateSurveyDefinition } from '../middleware/validators.js';

const router = express.Router();

/**
 * @route   GET /api/survey-definitions/active
 * @desc    Obtener definición activa del formulario
 * @access  Public
 */
router.get('/active', getActiveSurveyDefinition);

/**
 * @route   POST /api/survey-definitions
 * @desc    Crear o actualizar definición del formulario
 * @access  Public
 */
router.post('/', validateSurveyDefinition, createOrUpdateSurveyDefinition);

/**
 * @route   GET /api/survey-definitions
 * @desc    Obtener todas las definiciones
 * @access  Public
 */
router.get('/', getAllSurveyDefinitions);

/**
 * @route   GET /api/survey-definitions/:id
 * @desc    Obtener definición por ID
 * @access  Public
 */
router.get('/:id', getSurveyDefinitionById);

/**
 * @route   DELETE /api/survey-definitions/:id
 * @desc    Eliminar definición
 * @access  Public
 */
router.delete('/:id', deleteSurveyDefinition);

export default router;
