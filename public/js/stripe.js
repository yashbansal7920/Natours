/*eslint-disable*/

import axios from 'axios';

const stripe = Stripe(
  'pk_test_51IyTdHSBR0Tq7kHmBonYJ7ilyhIRCn3HJgUW5zKt3FjlKi0iI2BhXXOPxFtEIXT3ixLraxgBbYweX2b8RZT91jtT00YYoUXx9v'
);

export const bookTour = async (tourId) => {
  // 1) Get checkout Session from API
  const session = await axios(
    `http://127.0.0.1:8000/api/v1/booking/checkout-session/${tourId}`
  );
  console.log(session);

  // 2) Create checkout Form + charge credit card
};
