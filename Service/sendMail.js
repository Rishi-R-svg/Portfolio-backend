import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.HOST_EMAIL_PASSWORD,
  },
});

// Wrap in an async IIFE so we can use await.


     const sendMail= async ({to,subject,text}) => {

 try {
       
  const info = await transporter.sendMail({
    from: process.env.HOST_EMAIL,
    to,
    subject,
    text,
    
  });
  console.log('email sended')
  

 } catch (error) {
   throw error
 }



 
  
};




export {sendMail}


