

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Ruta para obtener datos de personajes desde la API de Rick and Morty
router.get('/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de personajes desde Rick and Morty API' });
  }
});

// Ruta para obtener datos de ubicaciones desde la API de Rick and Morty
router.get('/locations', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location');
    const locations = response.data.results;
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de ubicaciones desde Rick and Morty API' });
  }
});



module.exports = router;

