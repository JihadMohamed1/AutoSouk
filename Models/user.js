const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
   name :{ type: String, required: true },
    email :{
			type: String,
			required: [true, 'Email is required!'],
			trim: true,
			unique: [true, 'Email must be unique!'],
			minLength: [5, 'Email must have 5 characters!'],
			lowercase: true,
		},
    password : {
			type: String,
			required: [true, 'Password must be provided!'],
			trim: true,
			select: false,
		},
    phone :{ type: Number, required: true },
    location : { type: String, required: true },
   role: { 
    type: String, 
    enum: ["buyer", "seller", "manager"], 
    required: true 
  },
    rating :{type:Number,default:0},
    verified : {type:Boolean  , default : false},
    		verified: {
			type: Boolean,
			default: false,
		},
		verificationCode: {
			type: String,
			select: false,
		},
		verificationCodeValidation: {
			type: Number,
			select: false,
		},
		forgotPasswordCode: {
			type: String,
			select: false,
		},
		forgotPasswordCodeValidation: {
			type: Number,
			select: false,
		}
    
},{
		timestamps: true,
	}
)

const user=mongoose.model("user",UserSchema)

module.exports=user

