// Check if required email parameters are present
const validEmailParams = async (req, res, next) => {
  const { message, email, subject } = req.body

  if (!message || !email || !subject) {
    console.log(email, message, subject)
    return res.status(400).send('Missing parameter.')
  }
  
  next()
}

module.exports = validEmailParams
