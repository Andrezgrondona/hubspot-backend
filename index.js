
require('dotenv').config();

const express = require('express');
const app = express();
const hubspotRoutes = require('./routes/hubspot');

app.use(express.json());

app.use('/hubspot', hubspotRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
