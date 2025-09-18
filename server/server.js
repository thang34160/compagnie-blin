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

// Connexion to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch((error) => console.error('❌ Erreur connexion MongoDB:', error));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API Express fonctionne !' });
});

// API route
app.use('/api/shows', require('./routes/shows'));
app.use('/api/exhibitions', require('./routes/exhibitions'));

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Serveur Express démarré sur http://localhost:${PORT}`);
});

module.exports = app;
