const express = require('express')
const router = express.Router()

const users = require('./user.route')
const categories = require('./category.route')
const articles = require('./article.route')
const comments = require('./comment.route')

router.use('/users', users)
router.use('/categories', categories)
router.use('/articles', articles)
router.use('/comments', comments)

router.get('/', function(req, res) {
  res.send('ASRUL HARAHAP - BLOG API')
})

module.exports = router
// By Asrul Harahap - 2018