var nodemailer = require('nodemailer');
require('dotenv').config()

module.exports.PostApplication = (req,res,next)=>{
    const {FirstName, LastName, Email, PhoneNo, age, time,date}= req.body;
    
    // let otp = Math.floor(Math.random() * 10000);
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure:true,
        port:465,
        auth: {
          user: "chitranshu.arya9873@gmail.com",
          pass: process.env.PASSWORD
        }
    });
    var mailOptions = {
        from: "chitranshu.arya9873@gmail.com",
        to: "chitranshu.arya9873@gmail.com",
        subject: `New Appointment application`,
        text: `${FirstName} ${LastName} appointment is conformed on date: ${date} at ${time} `
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });  
    
}