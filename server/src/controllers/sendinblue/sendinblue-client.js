require('dotenv').config()
const SibApiV3Sdk = require('sib-api-v3-sdk')
const client = SibApiV3Sdk.ApiClient.instance

const key = client.authentications['api-key']
key.apiKey = process.env.SENDINBLUE_API_KEY

const contactsApi = new SibApiV3Sdk.ContactsApi()

module.exports = {
  SibApiV3Sdk,
  contactsApi
}
