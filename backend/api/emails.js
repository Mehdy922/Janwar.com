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

export default router
