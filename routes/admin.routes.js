// router
const router = require("express").Router()


// import Models
const productsModel = require('../models/productsModel')
const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')


//import controllers 
const productController = require("../controllers/products.controller")
const orderController = require("../controllers/order.controller")


// middleware
const auth = require('../middlewares/auth')


// passport
const passport = require('passport')


// logger
const logger = require('../log/winston')



// GET admin index
router.get("/", auth, (req, res) => {
  const { firstname, lastname } = req.user
  res.render("admin/index", { name: `${firstname} ${lastname}` })
})



// GET users admin
router.get("/users", auth, async (req, res) => {

  const users = await userModel.find().lean()
  res.render("admin/users", { users })
})



// GET users add user
router.get("/addUser", auth, (req, res) => res.render("admin/addUser"))



// POST add user
router.post("/addUser",
    passport.authenticate("register", {
        successRedirect: "/addAvatar",
        failureRedirect: "/addUser",
        failureFlash: true
    })
)



// GET products admin
router.get("/products", auth, async (req, res) => {
  const products = await productsModel.find().lean()
  res.render("admin/products", { products: products } )
})



// GET add products
router.get("/addProduct", auth, (req, res) => res.render("admin/addProduct"))



// POST add product
router.post("/addProduct", productController.post)



// GET pedidos admin
router.get("/orders", auth, async (req, res) => {
  const orders = await orderModel.find().lean()
  res.render("admin/orders", { orders } )
})


// DELETE orders
router.delete("/orders", auth, orderController.deleteAllOrders)


module.exports = router