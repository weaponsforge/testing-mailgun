const { SibApiV3Sdk, contactsApi } = require('../../utils/sendinblue-client')

// Create a new contact
const createContact = async (email) => {
  let result

  if (!email) {
    throw new Error('Missing parameter')
  }

  const contactData = new SibApiV3Sdk.CreateContact()
  contactData.email = email

  try {
    result = await contactsApi.createContact(contactData)
  } catch (err) {
    const error = (err.response) ? JSON.parse(err.response.text) : null
    const msg = (error) ? error.message : err.message
    throw new Error(msg)
  }

  return result
}

const getContact = async (email) => {
  let result

  if (!email) {
    throw new Error('Missing parameter')
  }

  const contactData = new SibApiV3Sdk.CreateContact()
  contactData.email = email

  try {
    result = await contactsApi.getContactInfo(email)
  } catch (err) {
    const error = (err.response) ? JSON.parse(err.response.text) : null
    const msg = (error) ? error.message : err.message
    throw new Error(msg)
  }

  return result
}

const composeEmailHtml = (email, subject, message) => {
  if (!email || !subject || !message) {
    throw new Error('Missing parameters.')
  }

  return `<p>Hello ${email},</p>
  <p>${message}</p>
  <p>Thanks,</p>
  <p>Your KYP team</p>`
}

module.exports = {
  createContact,
  composeEmailHtml,
  getContact
}