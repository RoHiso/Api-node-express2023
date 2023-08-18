const express = require('express')
const userController = require ('../controllers/user-controller')
const {isAuthenticated} = require('../middleware/authentication')

const router = express.Router()

router.get('/obtener-todos', isAuthenticated ,userController.getAllUser)
router.get('/obtener-por-id/:id', isAuthenticated ,userController.getById)
router.post('/crear', userController.createUser)
router.put('/editar/:id', userController.editUser)
router.delete('/eliminar/:id', userController.deleteUser)
router.post('/login', userController.login)

module.exports = router