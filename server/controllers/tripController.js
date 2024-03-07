const Package = require("../models/Package");
// const Config = require("./../config/config.js");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const { amount } = req.body;

    const customer = await stripe.customers.create();
    const product = await stripe.products.create({
      name: "T-shirt",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 2000,
      currency: "CAD",
    });
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer: customer.id,
      return_url: `${
        process.env.CLIENT_PUBLIC_URL
          ? process.env.CLIENT_PUBLIC_URL
          : Config.CLIENT_PUBLIC_URL
      }/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    // console.log(session);
    // Return the session ID to the client
    res.status(201).json({
      status: 201,
      message: "success",
      data: { clientSecret: session.client_secret },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      data: error,
      message: "Internal Server Error",
    });
  }
};
const getReturnStatus = async (req, res) => {
  try {
    const { sessionId } = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // Return the session ID to the client
    // console.log(session);
    res.status(201).json({
      status: 201,
      message: "success",
      data: {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      data: error,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  createCheckoutSession,
  getReturnStatus,
};
