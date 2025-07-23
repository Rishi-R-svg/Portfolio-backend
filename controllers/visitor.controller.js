import {  visitor } from "../model/visitor.model.js"
import { sendMail } from "../Service/sendMail.js"
import dotenv from 'dotenv'

dotenv.config()

 const controllVisitor = async (req,res)=>{
    

    try {
        
    const {fullname, email, quarries} = req.body
     
    if ( !fullname && !email && !quarries) {
         return  res.status(404).send({
            success:false,
            message: "fill all the details"
        }) }


     
    //  existing email check 

    const existingVisitor  =  await visitor.findOne({ email })

    if (existingVisitor) {
        return res.status(400).send({
            success:false,
            message:`You've already sent quarries with this email try to send with another email`
        })
    }



    // Creating New User

    const newVisitor = new visitor({fullname,email,quarries})

      await newVisitor.save()

    // Sending email to new registered user


    try {
        
    


    const emailDAta = {
        name: fullname,
        email: email,
        subject: "New Portfolio Visitor Quarry",
        message: quarries,
       
    }


      await sendMail({
        to: process.env.HOST_EMAIL,
        subject : emailDAta.subject,
        text: `New vistior quarry 

       VISITOR DETAILS:
       
       Name: ${fullname}
       Email: ${email}
       
       QUERY/MESSAGE:
       
       ${quarries}
       
       
       QUICK ACTIONS:
       
       Reply directly to: ${email}
       
       `

    })
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error
        })
    }


    await sendMail({
         to: email,
        subject: "Thank you for contacting me! - Rishi Kumar Singh",
        text: `
Hi ${fullname},

Thank you for reaching out through my portfolio!


YOUR MESSAGE HAS BEEN RECEIVED


I have received your query and will get back to you within 24-48 hours.

Your Query: "${quarries}"



In the meantime, feel free to explore more of my work or connect with me on social media.

Looking forward to connecting with you!

Best regards,
Rishi Kumar Singh

--
This is an automated response. Please do not reply to this email.`
    })
















      return res.status(201).send({
        success: true,
        message:'visitor added succesfully',
        visitordata: newVisitor

     })


    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Internal server error"
        })
    }
    


 }



 export {controllVisitor}