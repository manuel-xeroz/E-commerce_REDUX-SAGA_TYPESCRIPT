require('dotenv').config();
const stripe = require('stripe')('sk_test_51LL4AsAtReNHYVQpOvA2oJ1xgqEZWaMARsuofGqa0eSqk0HdHRjLZ8Emz6rsWTyfE4kaI9UPrsA0Cl4mrxTty1ci00H6flhkZn');

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
      
    };
  }
};
