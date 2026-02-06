import SurveyDefinition from '../models/SurveyDefinition.js';

/**
 * Obtener definición activa del formulario
 */
export const getActiveSurveyDefinition = async (req, res, next) => {
  try {
    const definition = await SurveyDefinition.findOne({ isActive: true })
      .sort({ createdAt: -1 });

    if (!definition) {
      return res.status(404).json({
        success: false,
        message: 'No hay definición activa del formulario'
      });
    }

    res.status(200).json({
      success: true,
      data: definition
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Crear o actualizar definición del formulario
 */
export const createOrUpdateSurveyDefinition = async (req, res, next) => {
  try {
    const { name, version, definition, description, isActive } = req.body;

    // Si se marca como activa, desactivar las demás
    if (isActive) {
      await SurveyDefinition.updateMany(
        { name },
        { isActive: false }
      );
    }

    const surveyDefinition = await SurveyDefinition.findOneAndUpdate(
      { name, version },
      {
        name,
        version,
        definition,
        description,
        isActive: isActive !== undefined ? isActive : true
      },
      {
        new: true,
        upsert: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: 'Definición del formulario guardada exitosamente',
      data: surveyDefinition
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener todas las definiciones
 */
export const getAllSurveyDefinitions = async (req, res, next) => {
  try {
    const definitions = await SurveyDefinition.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: definitions
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener definición por ID
 */
export const getSurveyDefinitionById = async (req, res, next) => {
  try {
    const definition = await SurveyDefinition.findById(req.params.id);

    if (!definition) {
      return res.status(404).json({
        success: false,
        message: 'Definición no encontrada'
      });
    }

    res.status(200).json({
      success: true,
      data: definition
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Eliminar definición
 */
export const deleteSurveyDefinition = async (req, res, next) => {
  try {
    const definition = await SurveyDefinition.findByIdAndDelete(req.params.id);

    if (!definition) {
      return res.status(404).json({
        success: false,
        message: 'Definición no encontrada'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Definición eliminada exitosamente'
    });
  } catch (error) {
    next(error);
  }
};
