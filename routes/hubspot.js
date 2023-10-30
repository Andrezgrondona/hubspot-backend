

const express = require('express');
const axios = require('axios');
const router = express.Router();
const hubspotControllers = require('../controllers/hubspotController');

// Configuramos  el access token
const hubspotApiBaseUrl = 'https://api.hubapi.com/crm/v3/';
const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;


router.get('/hello', (req, res) => {
  res.json({ message: 'Hola desde Vercel' });
});


// Ruta para obtener datos de contactos desde HubSpot
router.get('/contacts', async (req, res) => {
  try {
    const response = await axios.get(`${hubspotApiBaseUrl}objects/contacts`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const contacts = response.data.results;
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de contactos desde HubSpot' });
  }
});


// Ruta para obtener datos de compañías ("companies") en HubSpot
router.get('/companies', async (req, res) => {
  try {
    const response = await axios.get(`${hubspotApiBaseUrl}objects/companies`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      // busca el nombre de la compañia  "RickAndMorty" 
      companiesData = response.data.results.filter(company => company.properties.name === "RickAndMorty");

      // mapeamos las propiedades
      const filteredCompanies = companiesData.map(company => ({
        "name": company.properties.name,
        "Dimension": company.properties.dimension || "",
        "Location ID": company.properties.location_id || "",
        "Location's Type": company.properties.location_type || ""
      }));

      res.json(filteredCompanies);
    } else {
      res.status(500).json({ error: 'Error al obtener datos de compañías desde HubSpot' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});



//Post data properties contacts - hubspot (controller)
router.post('/webhook/hubspot', hubspotControllers.getCharacterData);

//Post data properties companies - hubspot (controller)
router.post('/webhook/hubspot/companies', hubspotControllers.getLocationData);


module.exports = router;

