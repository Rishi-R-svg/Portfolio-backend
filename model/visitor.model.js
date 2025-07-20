import mongoose from "mongoose";


const visitorSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required:true

    },

    quarries:{
        type: String,
        required:true
    }


},{timestamps:true})


export const visitor = mongoose.model('visitors', visitorSchema)