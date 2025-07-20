import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/mongoDB.js";
import { route } from "./routes/comtact.route.js";
import cors from "cors"

dotenv.config()

const app = express();

connectDB()

const port = process.env.PORT || 4000

app.use(cors())

app.use(express.json())


app.use('/api/v1',route)



app.listen(port,()=>{
  console.log(`SERVER IS RUNNIG ON : ${port}`)
})



