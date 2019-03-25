const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { email, password } = require('../data/gmailConfig.json');

router.post('/', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>From</h3>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password
      }
    })

    let mailOptions = {
      from: req.body.email,
      to: email,
      subject: req.body.subject,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) { 
       return res.status(500).json({
          error: err.message
        })
      }
      res.json({
        info
      })
    })

    transporter.close();


  })
  
  
})

module.exports = router;
