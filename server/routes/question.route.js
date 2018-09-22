const express = require('express')
const router = express.Router()
const isLogin = require('../middlewares/isLogin')
const {createOne, getAll, getOne, getByTitle, getByTag, 
        getByUser, getByLogin, getByPopular, updateOne, deleteOne, voteOne, unvoteOne} = require('../controllers/question.controller')

router.post('/', isLogin, createOne)
router.get('/', getAll)
router.get('/:id', getOne)
router.get('/:title', getByTitle)
router.get('/:tag', getByTag)
router.get('/:user', getByUser)
router.get('/popular', getByPopular)
router.get('/me', isLogin, getByLogin)
router.put('/:id', isLogin, updateOne)
router.patch('/:id/vote', isLogin, voteOne)
router.patch('/:id/unvote', isLogin, unvoteOne)
router.delete('/:id', isLogin, deleteOne)

module.exports = router
// By Asrul Harahap - 2018