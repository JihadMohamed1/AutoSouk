const express = require("express")
const mongoose = require("mongoose")
const app=express()
const cors = require("cors")
app.use(cors())
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded());

const userRouter=require("./Routers/UserRouters")
const carRouter=require("./Routers/CarRouters")
app.use("/user",userRouter)
app.use("/car",carRouter)


mongoose.connect(process.env.mongoose_url)
.then((res)=>{app.listen(8080,()=>{console.log("app is runing")})})
.catch((err)=>{console.log(err)})

app.get("/",(req,res)=>{
    res.send("<h2> Bienvneue dans notre app Express</h2>");
 });