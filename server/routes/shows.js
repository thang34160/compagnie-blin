const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

// GET /api/shows - Récupérer tous les shows
router.get('/', async (req, res) => {
  try {
    const shows = await Show.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: shows.length,
      data: shows
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des shows',
      error: error.message
    });
  }
});

// GET /api/shows/:id - Récupérer un show par ID
router.get('/:id', async (req, res) => {
  try {
    const show = await Show.findById(req.params.id);
    if (!show) {
      return res.status(404).json({
        success: false,
        message: 'Show non trouvé'
      });
    }
    res.json({
      success: true,
      data: show
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du show',
      error: error.message
    });
  }
});

// POST /api/shows - Créer un nouveau show
router.post('/', async (req, res) => {
  try {
    const show = new Show(req.body);
    const savedShow = await show.save();
    res.status(201).json({
      success: true,
      message: 'Show créé avec succès',
      data: savedShow
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erreur lors de la création du show',
      error: error.message
    });
  }
});

// PUT /api/shows/:id - Mettre à jour un show
router.put('/:id', async (req, res) => {
  try {
    const show = await Show.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!show) {
      return res.status(404).json({
        success: false,
        message: 'Show non trouvé'
      });
    }
    res.json({
      success: true,
      message: 'Show mis à jour avec succès',
      data: show
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erreur lors de la mise à jour du show',
      error: error.message
    });
  }
});

// DELETE /api/shows/:id - Supprimer un show
router.delete('/:id', async (req, res) => {
  try {
    const show = await Show.findByIdAndDelete(req.params.id);
    if (!show) {
      return res.status(404).json({
        success: false,
        message: 'Show non trouvé'
      });
    }
    res.json({
      success: true,
      message: 'Show supprimé avec succès'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du show',
      error: error.message
    });
  }
});

// GET /api/shows/search/:query - Rechercher des shows
router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const shows = await Show.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } }
      ]
    });
    res.json({
      success: true,
      count: shows.length,
      data: shows
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la recherche',
      error: error.message
    });
  }
});

module.exports = router;
