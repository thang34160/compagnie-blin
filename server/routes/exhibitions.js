const express = require('express');
const router = express.Router();
const Exhibition = require('../models/Exhibition');

// GET /api/exhibitions - get all exhibits
router.get('/', async (req, res) => {
  try {
    const exhibitions = await Exhibition.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: exhibitions.length,
      data: exhibitions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des exhibitions',
      error: error.message
    });
  }
});

module.exports = router;
