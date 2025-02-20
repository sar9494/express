import { createUser } from "../controller/users/create.user.js";
import { getUsers } from "../controller/users/get.users.js"
import {deleteUser} from "../controller/users/delete.user.js"
import { updateUser } from "../controller/users/update.user.js";
// import { logInUser } from "../controller/logIn/logIn.js";
import express from 'express'

export const userRouter = express.Router();
userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.delete('/',deleteUser)
userRouter.put('/',updateUser)
// userRouter.post('/login', logInUser)
