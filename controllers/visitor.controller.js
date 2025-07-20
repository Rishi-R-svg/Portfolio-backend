import {  visitor } from "../model/visitor.model.js"
import { sendMail } from "../Service/sendMail.js"

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
    newVisitor.save()

     sendMail(email,"Thankyou for Checking out  My Portfolio",`Hii, ${fullname} I'll contact you soon ;-)`)

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