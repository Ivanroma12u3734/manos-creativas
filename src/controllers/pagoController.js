const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// RF-10: Datos de envío + RF-11: Pasarela de pago
const procesarPago = async (req, res) => {
  const { amount, paymentMethodId, datosEnvio } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // en centavos
      currency: 'mxn',
      payment_method: paymentMethodId,
      confirm: true,
      metadata: { ...datosEnvio }
    });
    res.json({ success: true, paymentIntentId: paymentIntent.id }); // RF-12
  } catch (err) {
    res.status(400).json({ success: false, error: err.message }); // RF-13
  }
};

module.exports = { procesarPago };
