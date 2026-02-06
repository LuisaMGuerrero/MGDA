import { body, validationResult } from 'express-validator';

/**
 * Middleware para manejar errores de validación
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Errores de validación',
      errors: errors.array()
    });
  }
  next();
};

/**
 * Validación para crear/actualizar survey
 */
export const validateSurvey = [
  body('surveyData')
    .exists().withMessage('surveyData es requerido')
    .isObject().withMessage('surveyData debe ser un objeto'),
  body('status')
    .optional()
    .isIn(['draft', 'completed']).withMessage('status debe ser draft o completed'),
  handleValidationErrors
];

/**
 * Validación para crear/actualizar definición de survey
 */
export const validateSurveyDefinition = [
  body('name')
    .exists().withMessage('name es requerido')
    .isString().withMessage('name debe ser un string')
    .trim()
    .notEmpty().withMessage('name no puede estar vacío'),
  body('definition')
    .exists().withMessage('definition es requerido')
    .isObject().withMessage('definition debe ser un objeto'),
  body('version')
    .optional()
    .isString().withMessage('version debe ser un string'),
  body('isActive')
    .optional()
    .isBoolean().withMessage('isActive debe ser un booleano'),
  handleValidationErrors
];
