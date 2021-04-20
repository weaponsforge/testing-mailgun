const mg = require('../../utils/mailgun-client')

// Send an email using mailgun
const email = async (req, res) => {
  const { message, email, subject } = req.body

  const data = {
    from: `admin@${process.env.MAILGUN_DOMAIN}`,
    to: email,
    subject,
    text: message
  }

  try {
    await mg.messages().send(data)
  } catch (err) {
    return res.status(500).send(err.message)
  }

  return res.status(200).send('Email sent.')
}

module.exports = email
