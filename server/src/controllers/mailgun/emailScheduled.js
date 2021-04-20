const moment = require('moment')
const mg = require('../../utils/mailgun-client')

// Send email within an interval time using mailgun
// interval = int; time interval in hours
// starttime = string; starting time to send subsequent messages in HH:MM:SS format
// maxhrs = int; max hours to send messages with interval
const emailScheduled = async (req, res) => {
  const { message, email, subject, interval, starttime, maxhrs } = req.body
  
  if (!message || !email || !subject) {
    return res.status(400).send('Missing parameter.')
  }

  const DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ"
  const maxHrs = maxhrs || 72
  const intervalHrs = interval || 6

  const now = moment()
  const mails = []

  const data = {
    from: `admin@${process.env.MAILGUN_DOMAIN}`,
    to: email,
    subject: '${subject} #1',
    text: message,
    'o:deliverytime': moment().format(DATE_RFC2822)
  }

  try {
    // Send initial message now
    await mg.messages().send(data)
  } catch (err) {
    res.status(500).send(err.message)
    return
  }

  // Send subsequent messages
  const time = starttime
    ? moment(`${now.format('ddd, DD MMM YYYY')} ${starttime}`)
    : now

  for (let i = 1; i < maxHrs / intervalHrs; i += 1) {
    let sendTime = moment(time).add(i * intervalHrs, 'hours')
  
    console.log(sendTime.format(DATE_RFC2822))
    mails.push(mg.messages().send(data))
  }

  try {
    await Promise.all(mails)
  } catch (err) {
    return res.status(500).send(err.message)
  }

  return res.status(200).send('Email sent.')
}

module.exports = emailScheduled
