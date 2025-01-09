import mongoose from "mongoose";
import 'dotenv/config'


const url=process.env.MONGO_URL

mongoose.connect(url).then(()=>{
    console.log("connected to Mongo DB")
}).catch(()=>{
    console.log("error")
})