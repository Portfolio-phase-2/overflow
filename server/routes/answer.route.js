const express = require('express')
const router = express.Router()
const {createOne, deleteById, upvote, downvote} = require('../controllers/answer.controller')
const isLogin = require('../middlewares/isLogin')

router.post('/:question', isLogin, createOne)
router.delete('/:id', isLogin, deleteById)
router.patch('/:id/vote', isLogin, upvote)
router.patch('/:id/unvote', isLogin, downvote)

module.exports = router
// By Asrul Harahap - 2018