const express = require('express')
const router = express.Router()
const user = require('./user.route')
const question = require('./question.route')
const answer = require('./answer.route')
const tag = require('./tag.route')

router.use('/users', user)
router.use('/questions', question)
router.use('/answers', answer)
router.use('/tags', tag)
router.get('/', function(req, res) {
  res.send('talkasrulJS')
})

module.exports = router
// By Asrul Harahap - 2018