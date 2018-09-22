const express = require('express')
const router = express.Router()
const isLogin = require('../middlewares/isLogin')
const {getUserLogin, signin, signup, updateUser} = require('../controllers/user.controller')

router.get('/', isLogin, getUserLogin)
router.post('/signin', signin)
router.post('/signup', signup)
router.patch('/', isLogin, updateUser)

module.exports = router
// By Asrul Harahap - 2018