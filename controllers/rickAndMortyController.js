

const express = require('express');
const axios = require('axios');
const router = express.Router();


const rickAndMortyApiBaseUrl = 'https://rickandmortyapi.com/api/';

// Ruta para consultar datos de personajes de la API
router.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(`${rickAndMortyApiBaseUrl}character`);
    const characters = response.data.results;
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de personajes desde Rick and Morty API' });
  }
});

// Ruta para consultar datos de ubicaciones de la API
router.get('/locations', async (req, res) => {
  try {
    const response = await axios.get(`${rickAndMortyApiBaseUrl}location`);
    const locations = response.data.results;
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de ubicaciones desde Rick and Morty API' });
  }
});

module.exports = router;
