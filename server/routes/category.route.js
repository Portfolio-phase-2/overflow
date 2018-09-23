const express = require('express')
const router = express.Router()
const {createOne, getAll, getById, putById, deleteById} = require('../controllers/category.controller')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')

router.post('/', isLogin, isAdmin, createOne)
router.get('/', getAll)
router.get('/:id', getById)

module.exports = router
// By Asrul Harahap - 2018