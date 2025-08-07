const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch((error) => console.error('❌ Erreur connexion MongoDB:', error));

// Routes de test
app.get('/', (req, res) => {
  res.json({ message: 'API Express fonctionne !' });
});

// Routes API (à ajouter plus tard)
app.use('/api/shows', require('./routes/shows'));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur Express démarré sur http://localhost:${PORT}`);
});

module.exports = app;
