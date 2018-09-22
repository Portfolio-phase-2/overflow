const express = require('express')
const router = express.Router()
const isLogin = require('../middlewares/isLogin')
const {createOne, deleteOne, getAll} = require('../controllers/tag.controller')

router.post('/', isLogin, createOne)
router.get('/', getAll)

module.exports = router
// By Asrul Harahap - 2018