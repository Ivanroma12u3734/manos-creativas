const express = require('express');
const router = express.Router();
const { poolPromise } = require('../../config/db');

// RF-03: Listado de productos
router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Productos WHERE stock > 0');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// RF-04: Filtro por categoría
router.get('/categoria/:id', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('categoriaId', req.params.id)
      .query('SELECT * FROM Productos WHERE categoriaId = @categoriaId AND stock > 0');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// RF-05: Detalle de producto
router.get('/:id', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', req.params.id)
      .query('SELECT * FROM Productos WHERE id = @id');
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
