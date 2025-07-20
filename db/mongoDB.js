import mongoose from "mongoose";



const connectDB = async ()=> {

    try {
        
        await mongoose.connect(process.env.MONGODB_URL)
        
        console.log("MONGODB CONNECTED")


    } catch (err) {
        console.log('failed to connect with DB',err)
    }



}


export {connectDB}