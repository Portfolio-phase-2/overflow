const express = require('express')
const router = express.Router()
const isLogin = require('../middlewares/isLogin')
const {createOne, getOne, updateOne, voteOne, unvoteOne} = require('../controllers/answer.controller')

router.post('/:question', isLogin, createOne)
router.get('/:id', getOne)
router.put('/:id', isLogin, updateOne)
router.patch('/:id/vote', isLogin, voteOne)
router.patch('/:id/unvote', isLogin, unvoteOne)

module.exports = router
// By Asrul Harahap - 2018