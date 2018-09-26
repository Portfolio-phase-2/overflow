const express = require('express')
const router = express.Router()
const {signup, signin, getAll, getOne} = require('../controllers/user.controller')
const {facebook} = require('../controllers/facebook.controller')
const isLogin = require('../middlewares/isLogin')

router.post('/signup', signup)
router.post('/fb', facebook)
router.post('/signin', signin)
router.get('/one', isLogin, getOne)
router.get('/', getAll)

module.exports = router
// By Asrul Harahap - 2018