const express = require("express")
const mongoose = require("mongoose")
const app=express()
const cors = require("cors")
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
app.use(cors())
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded());
app.use(helmet());
app.use(cookieParser());


const authRouter = require('./Routers/AuthRouter');
const userRouter=require("./Routers/UserRouters")
const carRouter=require("./Routers/CarRouters")
app.use('/api/auth', authRouter);
app.use("/api/user",userRouter)
app.use("/api/car",carRouter)


mongoose.connect(process.env.mongoose_url)
.then((res)=>{app.listen(process.env.PORT,()=>{console.log("app is runing")})})
.catch((err)=>{console.log(err)})

app.get("/",(req,res)=>{
    res.send("<h2> Bienvneue dans notre app Express</h2>");
 });