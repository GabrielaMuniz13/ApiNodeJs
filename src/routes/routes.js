const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const RegistrationController = require('../controllers/Cadastro')
const LoginController = require('../controllers/Login');

router.post('/Cadastro', RegistrationController.Cadastro)
router.get('/Login',    LoginController.Login)

module.exports = router