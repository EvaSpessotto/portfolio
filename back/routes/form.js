const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('../sql/config');

router.post('/', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'arxd3zximtdyn7ku@ethereal.email',
        pass: 'KMEhfVafqctGTttRCu'
      }
    })

    let mailOptions = {
      from: req.body.email,
      to: 'arxd3zximtdyn7ku@ethereal.email',
      replyTo: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
})

module.exports = router;
