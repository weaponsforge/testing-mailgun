const { SibApiV3Sdk } = require('../../utils/sendinblue-client')
const { composeEmailHtml, getContact, createContact } = require('./methods')

// Send an email
module.exports.post = async (req, res) => {
  const { email, subject, message } = req.body
  let result
  let contact
  let errMsg = ''

  try {
    // CHeck if contact exists
    contact = await getContact(email)
  } catch (err) {
    errMsg = err.message
  }

  // Create contact if it does not yet exist
  if (!contact) {
    try {
      contact = await createContact(email)
    } catch (err) {
      errMsg = err.message
    }
  }

  // Send a transactional email
  if (contact) {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    const emailContent = new SibApiV3Sdk.SendSmtpEmail()
    
    emailContent.to = email
    emailContent.subject = subject
    emailContent.htmlContent = composeEmailHtml(email, subject, message)
  
    try {
      result = await apiInstance.sendTransacEmail(emailContent)
      console.log(result)
    } catch (err) {
      const error = (err.response) ? JSON.parse(err.response.text) : null
      const msg = (error) ? error.message : err.message
      return res.status(500).send(msg)
    }
  
    return res.status(200).send('Email sent.')
  } else {
    return res.status(500).send(errMsg)
  }
}
