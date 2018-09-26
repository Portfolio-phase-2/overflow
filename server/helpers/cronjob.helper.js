const CronJob = require('cron').CronJob
const sgMail = require('@sendgrid/mail')

module.exports = function sendEmail(email) {
  new CronJob('*/1 */7 * * */6', function() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: email,
        from: 'talkasrul@gmail.com',
        subject: 'Halooo',
        text: 'I hope you write back',
        html: '<p>Please read or wrire in your account tanyaDONK for help people in this world</p>',
    }
    sgMail.send(msg)
  }, null, true, 'Asia/Jakarta');
}