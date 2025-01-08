import mongoose from "mongoose";


mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log("connected to Mongo DB")
}).catch(()=>{
    console.log("error")
})