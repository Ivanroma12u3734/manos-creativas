const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Rutas
app.use('/api/productos', require('./routes/productos'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/contacto', require('./routes/contacto'));

app.listen(PORT, () => {
  console.log(`Servidor Manos Creativas corriendo en puerto ${PORT}`);
});

module.exports = app;
