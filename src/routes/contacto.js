const express = require('express');
const router = express.Router();

// RF-14, RF-15, RF-16: Formulario de contacto con validación
router.post('/', (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  // RF-15: Validación de campos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Correo electrónico inválido' });
  }
  if (!mensaje || mensaje.trim() === '') {
    return res.status(400).json({ error: 'El mensaje no puede estar vacío' });
  }

  // RF-16: Confirmación de envío
  res.json({ message: 'Tu mensaje fue recibido. Te contactaremos pronto.' });
});

module.exports = router;
