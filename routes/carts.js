const express = require('express');
const cartsRepo = require('../repositories/carts');


const router = express.Router();

// Receive a post request to add an item to a cart 
router.post('/cart/products', async (req, res) => {
  // Figure out the cart
  let cart;
  if (!req.session.cartId) {
    // We don't have a card, we need to create one, and store the cart id on the req.session.cartId'
    
    const cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    // We have a cart! Lets it from the repository
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  console.log(cart);
  // Either increment quantity for existing product


  res.send('Product added to a cart');
})

// Receive a GET request to show all items in cart

// Receive 



module.exports = router;

