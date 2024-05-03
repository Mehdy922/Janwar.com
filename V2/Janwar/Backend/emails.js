// routes/email.js
import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router();



// Route to handle sending email
router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer with your email service provider
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'officialjanwar2024@gmail.com',
            pass: 'zsiquuzcvdawpxte'
        }
    });

    // Define email options
    let mailOptions = {
        from: 'officialjanwar2024@gmail.com',
        to: email,
        subject: 'Greetings from Team Janwar!',
        text: `Dear ${name},\n\nWe have received the following message from you:\n\n"${message}"\n\nWe thank you for contacting us. Rest assured that we endeavour to provide you with the best service we can and resolve your issues as soon as possible. :)\n\nRegards,\nThe Janwar Team`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

router.post('/send-pass',async (req,res)=>{

   
   let username = req.body.username;
   let email = req.body.email;
   let password = req.body.password;
    
    
    // Configure nodemailer with your email service provider
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'officialjanwar2024@gmail.com',
            pass: 'zsiquuzcvdawpxte'
        }
    });

    // Define email options
    let mailOptions = {
        from: 'officialjanwar2024@gmail.com',
        to: email,
        subject: 'Greetings from Team Janwar!',
        html: `
            <p>Dear ${username},</p>

            <p>We have received a password reset request from you:</p>

            <p>We thank you for contacting us. If you didn't initiate this request, please contact our team through email. Your password is:</p>

            <p><strong>${password}</strong></p>

            <p>Don't have a good day, have a great day :)</p>

            <p>Regards,</p>
            <p>The Janwar Team</p>
`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

export default router
