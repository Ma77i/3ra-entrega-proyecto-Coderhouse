
// Controllers
const { getAllUsers, getUserId, deleteAll, deleteOne } = require('../controllers/user.controller');


// Import router
const Router = require('express').Router;
const router = Router()


// GET all users
router.get('/', getAllUsers)

// GET user by id
router.get('/:id', getUserId)

// DELETE all users
router.delete("", deleteAll)

// DELETE one user
router.delete("/:id", deleteOne)



module.exports = router