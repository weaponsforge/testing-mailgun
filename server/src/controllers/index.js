const express = require('express')
const router = express.Router()

const mailerMailgun = require('./email-mailgun')

router.post('/mailgun', mailerMailgun.post)

module.exports = router