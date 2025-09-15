const userService = require("../Service/UserServices")


const CreateNewUser= async (req,res)=>{

    const data=req.body
    try{
        await userService.CreateUser(data)
         res.status(201).json({ sucess : true , msg : "user has created"})
      }catch(error)
      {
          res.status(500).json({error})
      }
    
}
const getallusers=async(req,res)=>{
      try{
  const data= await userService.getAllUsers()
         res.status(200).json({ sucess : true , Users : [data]})
      }catch(error)
      {
          res.status(500).json({error})
      }
}
const DeleteUser=async(req,res)=>{
      try{
        const id = req.params.id
        await userService.DeleteUser(id)
         res.status(200).json({ sucess : true , msg : "user has deleted"})
      }catch(error)
      {
          res.status(500).json({error})
      }
}
const getUserById=async(req,res)=>{
      try{
        const id = req.params.id
        const myUser = await userService.getUserbyid(id)
        res.status(200).json({ sucess : true , User : myUser})
      }catch(error)
      {
          res.status(500).json({error})
      }
}
const updateUser=async(req,res)=>{
    try{
        const data = req.body
        await userService.updateUser(data)
res.status(200).json({sucess: true , msg:"user has updated"})
    }
    catch(err){
res.status(500).json({err})
    }
}


module.exports={CreateNewUser,getallusers,getUserById,DeleteUser,updateUser}