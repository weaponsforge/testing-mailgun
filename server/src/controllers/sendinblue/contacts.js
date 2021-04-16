const { createContact, getContact } = require('./utils')

// Get contact info using email
// Returns {"email":"some_email@gmail.com","id":5, ... }
module.exports.get = async (req, res) => {
  const { email } = req.query
  let result

  if (!email) {
    return res.status(400).send('Missing parameter.')
  }

  try {
    result = await getContact(email)
    console.log(result)
  } catch (err) {
    return res.status(500).send(err.message)
  }

  return res.status(200).json(result)
}

// Create a new contact
// Returns { id: <NUMBER> }
module.exports.post = async (req, res) => {
  const { email } = req.body
  let result

  if (!email) {
    return res.status(400).send('Missing parameter.')
  }

  try {
    result = await createContact(email)
  } catch (err) {
    return res.status(500).send(err.message)
  }

  return res.status(200).json(result)
}
