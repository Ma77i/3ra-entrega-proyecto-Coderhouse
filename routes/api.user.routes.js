// Import router
const router = require('express').Router();

// Controllers
const { getAllUsers, getUserId, deleteAll, deleteOne } = require('../controllers/user.controller');



router.get("", getAllUsers) // GET all users
router.get("/:id", getUserId) // GET user by id
router.delete("", deleteAll) // DELETE all users
router.delete("/:id", deleteOne) // DELETE one user



module.exports = router