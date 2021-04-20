const email = require('./email')
const emailScheduled = require('./emailScheduled')

module.exports.post = email
module.exports.postScheduled = emailScheduled
