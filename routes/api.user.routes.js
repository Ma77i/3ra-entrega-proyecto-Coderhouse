
// Controllers
const { getAllUsers, getUserId, deleteAll } = require('../controllers/user.controller');


// Import router
const Router = require('express').Router;
const router = Router()


// /api/user
router.get('/', getAllUsers)

// /api/user/:id
router.get('/:id', getUserId)

router.delete("", deleteAll)

module.exports = router