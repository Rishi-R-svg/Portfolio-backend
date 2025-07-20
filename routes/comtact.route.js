import express from "express"
import { controllVisitor } from "../controllers/visitor.controller.js";


const route = express.Router();


route.post('/contact', controllVisitor)



export {route}