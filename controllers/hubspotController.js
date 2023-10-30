

const axios = require('axios');

// Controlador para la ruta '/webhook/hubspot'
exports.getCharacterData = async (req, res) => {
  try {
    //traemos el  "Character ID" o "id"
    const hubspotCharacterId = req.body['Character ID'] || req.body['id'] || 3

    // Verificar si el "Character ID" se ha obtenido correctamente
    if (!hubspotCharacterId) {
      return res.status(400).json({ error: 'Character ID o id no encontrado en la solicitud' });
    }

    const rickAndMortyApiUrl = `https://rickandmortyapi.com/api/character/${hubspotCharacterId}`;

    const response = await axios.get(rickAndMortyApiUrl);

    // Verificar si la solicitud a la API, de no ser asi enviamos el status
    if (response.status === 200) {
      
      const rickAndMortyCharacterData = response.data;

      const filteredData = {
        "id": rickAndMortyCharacterData.id,
        "name": rickAndMortyCharacterData.name,
        "status": rickAndMortyCharacterData.status,
        "species": rickAndMortyCharacterData.species,
        "type": rickAndMortyCharacterData.type,
        "gender": rickAndMortyCharacterData.gender,
      };

      res.json(filteredData);
    } else {
      res.status(500).json({ error: 'Error al obtener datos de Rick and Morty API' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
};

// Controlador para la ruta '/webhook/hubspot/companies'
exports.getLocationData = async (req, res) => {
  try {
    // obtener el "Location ID"
    const locationId = req.body.locationId || 5; 

    const rickAndMortyLocationApiUrl = `https://rickandmortyapi.com/api/location/${locationId}`;

   
    const response = await axios.get(rickAndMortyLocationApiUrl);

    // Verificar si la solicitud a la API 
    if (response.status === 200) {
      // Obtener los datos de ubicación 
      const locationData = response.data;

    
      const filteredData = {
        "Location ID": locationData.id,
        "name": locationData.name,
        "Location's Type": locationData.type,
        "Dimension": locationData.dimension,
      };

      res.json(filteredData);
    } else {
      res.status(500).json({ error: 'Error al obtener datos de ubicación desde la API de Rick and Morty' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
};
