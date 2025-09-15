const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
   name :{ type: String, required: true },
    email :{ type: String, required: true },
    password :{ type: String, required: true },
    phone :{ type: Number, required: true },
    location : { type: String, required: true },
    created_at :{ type : Date , default:Date.now },
   role: { 
    type: String, 
    enum: ["buyer", "seller", "manager"], 
    required: true 
  },
    rating :{type:Number,default:0},
    verified : {type:Boolean  , default : false}
    
})

const user=mongoose.model("user",UserSchema)

module.exports=user

