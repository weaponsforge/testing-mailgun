const moment = require('moment')
const mg = require('../../utils/mailgun-client')

// Send email within an interval time using mailgun
// interval = int; time interval in hours
// starttime = string; starting time to send subsequent messages in HH:MM:SS format
// maxhrs = int; max hours to send messages with interval
const emailScheduled = async (req, res) => {
  const { message, email, subject, interval, starttime, maxhrs } = req.body
  
  if (!interval || !maxhrs) {
    return res.status(400).send('Missing time parameter.')
  }

  if (parseInt(maxhrs) > 72) {
    return res.status(400).send('Max hours cannot exceed 72 hrs.')
  }

  if (parseInt(interval) < 1 || parseInt(interval) > parseInt(maxhrs)) {
    return res.status(400).send('Invalid time interval or max hours.')
  }

  const DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ"
  const maxHrs = parseInt(maxhrs) || 72
  const intervalHrs = parseInt(interval) || 6
  const startTime = starttime || '10:00:00'

  const now = moment()
  const mails = []

  const data = {
    from: `admin@${process.env.MAILGUN_DOMAIN}`,
    to: email,
    subject: `${subject} #1`,
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
  const nowFormatted = moment().format('YYYY-MM-DD')
  const time = startTime
    ? moment(`${nowFormatted} ${startTime}`)
    : now

  for (let i = 1; i < maxHrs / intervalHrs; i += 1) {
    let sendTime = moment(time).add(i * intervalHrs, 'hours')
  
    console.log(`${i} :: ${sendTime.format(DATE_RFC2822)}`)
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
