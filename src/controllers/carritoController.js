// RF-06: Agregar productos al carrito
// RF-07: Modificar cantidades
// RF-08: Eliminar productos
// RF-09: Resumen del pedido

let carrito = [];

const agregar = (req, res) => {
  const { productoId, nombre, precio, cantidad } = req.body;
  const existente = carrito.find(item => item.productoId === productoId);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({ productoId, nombre, precio, cantidad });
  }
  res.json({ message: 'Producto agregado al carrito', carrito });
};

const modificar = (req, res) => {
  const { productoId, cantidad } = req.body;
  const item = carrito.find(i => i.productoId === productoId);
  if (item) item.cantidad = cantidad;
  res.json({ carrito });
};

const eliminar = (req, res) => {
  carrito = carrito.filter(i => i.productoId !== req.params.id);
  res.json({ message: 'Producto eliminado', carrito });
};

const resumen = (req, res) => {
  const subtotal = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  res.json({ carrito, subtotal, total: subtotal });
};

module.exports = { agregar, modificar, eliminar, resumen };
