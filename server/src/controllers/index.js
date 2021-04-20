const express = require('express')
const router = express.Router()

// Middleware
const { validEmailParams } = require('../middleware')

// Routes
const mailgun = require('./mailgun')
const { contacts, emails } = require('./sendinblue')

// ----- MAILGUN -----
router.post('/mailgun', validEmailParams, mailgun.post)
router.post('/mailgun/scheduled', validEmailParams, mailgun.postScheduled)

// ----- SENDINBLUE -----
router.get('/sendinblue/contacts', contacts.get)
router.post('/sendinblue/contactsCreate', contacts.post)
router.post('/sendinblue', validEmailParams, emails.post)

module.exports = router
