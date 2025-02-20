import { Users } from "../../modules/users.modules.js";
export const createUser = async (req, res) => {
    const {name} = req.body
      try {
        const newUser = await Users.create(
          {name:name}
        );
        res.send(newUser).status(200)
      } catch (error) {
        console.log("Error occured", error);
        res.send().status(400)
      }
}