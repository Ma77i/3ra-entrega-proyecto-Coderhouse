const express = require('express');

// Import Router
const { Router } = express;
const router = Router();

// controllers
const controller = require('../controllers/cart.controller')




//OBTENGO TODOS LOS CARRITOS
router.get("", controller.getAll)


//OBTENGO UN CARRITO POR ID
router.get("/:id/products", controller.getCartById)


//OBTENGO UN CARRITO POR USUARIO
router.get("/:id/products", controller.getCartByUser)


// AGREGO UN PRODUCTO AL CARRITO
router.post("/:id/products/:idprod", controller.postCart)


// BORRO UN CARRITO
router.delete('/:id', controller.deleteCart)


// BORRO UN PRODUCTO
router.delete('/:id/products/:product', controller.deleteProd)


// BORRO TODO
router.delete("", controller.deleteAll)


module.exports = router;