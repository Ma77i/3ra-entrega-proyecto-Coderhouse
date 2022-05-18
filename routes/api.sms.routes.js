// router
const router = require("express").Router()


// controllers
const orderController = require('../controllers/order.controller')




// /api/sms/
router.post('/:orderId', orderController.updateSendOrder)


module.exports = router