const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.send('talkasrulJS')
})

module.exports = router
// By Asrul Harahap - 2018