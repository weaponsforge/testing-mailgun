const express = require('express')
const router = express.Router()

const mailgun = require('./mailgun')
const { contacts, emails } = require('./sendinblue')

// ----- MAILGUN -----
router.post('/mailgun', mailgun.post)
router.post('/mailgun/scheduled', mailgun.postScheduled)

// ----- SENDINBLUE -----
router.get('/sendinblue/contacts', contacts.get)
router.post('/sendinblue/contactsCreate', contacts.post)
router.post('/sendinblue', emails.post)

module.exports = router
