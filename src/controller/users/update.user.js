import {Users} from '../../modules/users.modules.js'
export const updateUser = async (req,res)=>{
    const {id,name}=req.body;
    console.log("mamaf");
    
    try {
        const users = await Users.findOneAndUpdate({_id:id},{$set:{name:name}},{new:true})
        console.log(users);
        
        res.send(users).status(200)
    } catch (error) {
        console.log("Error occured while updating user" , error);
    }
}