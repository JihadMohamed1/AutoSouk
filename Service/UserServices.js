const user=require('../Models/user')
const bcrypt=require("bcrypt")

const getAllUsers=async()=>{
    return await user.find()
}

const CreateUser = async (data) =>{
    console.log("here in services",data)
       const password=data.password
    const selt=await bcrypt.genSalt()
    const HashedPassword=await bcrypt.hash(password,selt)
    data.password=HashedPassword

   const NewUser = new user ({
  name:data.name,
  email: data.email,
  password: data.password,
  phone: data.phone,
  location: data.location,
  role: data.role,
   })
   console.log("here in the end of services",data)
return await user.create(NewUser); 

}
const DeleteUser=async(id)=>{
return await user.deleteOne({_id:id})
}
const getUserbyid=async(id)=>{
const theuser = await user.findById({_id:id})
return theuser;
}
const updateUser=async(data)=>{
return await user.findByIdAndUpdate(data._id,data)

}


module.exports={CreateUser,getAllUsers,DeleteUser,getUserbyid,updateUser}