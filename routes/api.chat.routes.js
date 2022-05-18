const { Router } = require("express")

const controller = require("../controllers/chat.controller")
const router = Router()



router.get("", controller.get)
router.post("", controller.post)
router.get("/:id", controller.getById)
router.delete("/:id", controller.deleteById)
router.delete("", controller.deleteAll)


module.exports = router