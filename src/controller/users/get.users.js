import { Users } from "../../modules/users.modules.js";
export const getUsers = async (req,res)=>{
    try {
        const userData = await Users.find();
        res.send(userData).status(200)
      } catch (error) {
        console.log("Error occured", error);
        res.send().status(400)
      }
}