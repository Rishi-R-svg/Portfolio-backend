import nodemailer from 'nodemailer'

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: "rishikumarsing2004@gmail.com",
    pass: "dzefgyjsmvgxvmgn",
  },
});

// Wrap in an async IIFE so we can use await.
   const sendMail= async (to,subject,text) => {
  const info = await transporter.sendMail({
    from: 'rishikumarsing2004@gmail.com',
    to,
    subject,
    text,
    
  });

  
};


export {sendMail}


