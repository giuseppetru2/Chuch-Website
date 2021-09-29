
export default function (req, res) {
  let nodemailer = require('nodemailer')
  const dotenv = require('dotenv');
  dotenv.config();  
  
  const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'tministry239@gmail.com',
        pass: process.env.PASSWORD,
      },
      secure: true,
    })
    const mailData = {
      from:'tministry239@gmail.com' ,
      to: 'theking224@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
      transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })

    res.status(200)
  }