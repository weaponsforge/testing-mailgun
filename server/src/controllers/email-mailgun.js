require('dotenv').config()
const mailgun = require('mailgun-js')
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
})

// Send email using mailgun
module.exports.post = async (req, res) => {
  const { message, email, subject } = req.body
  console.log(req.body)

  if (!message || !email || !subject) {
    return res.status(400).send('Missing parameter.')
  }

  const data = {
    from: `admin@${process.env.MAILGUN_DOMAIN}`,
    to: process.env.SENDING_EMAIL_ADDRESS,
    subject,
    text: message
  }

  try {
    await mg.messages().send(data)
    console.log('done')
  } catch (err) {
    return res.status(500).send(err.message)
  }

  return res.status(200).send('Email sent.')
}
