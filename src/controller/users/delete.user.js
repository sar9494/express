import { Users } from "../../modules/users.modules.js";
export const deleteUser = async (req,res)=>{
    const {id,name}=req.body
    try {
        const newUser = await Users.deleteOne(
          {_id:id}
        )
        console.log(newUser);
        
        res.send(newUser).status(200)
      } catch (error) {
        console.log("Error occured", error);
        res.send().status(400)
      }
}