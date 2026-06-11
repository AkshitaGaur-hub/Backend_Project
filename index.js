// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
import connectDB from "./src/db/index.js"

// database is always in another continent 
// async await necessary
// function connectDB(){}

dotenv.config({
    path: './env'
})
connectDB()




// Approacg 1
// import express from "express"
// const app = express()
// ( async () => {
//     try{
//     await mongoose.connect(`${process.env.
//         MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) =>{
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () =>{
//             console.log(`App is listening onport ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.error("error: ", error)
//         throw error
//     }
// })()