import { createUser } from "../controller/users/create-user.js";
import { getUsers } from "../controller/users/get-users.js"
import { logInUser } from "../controller/logIn/logIn.js";
import express from 'express'

export const userRouter = express.Router();
userRouter.get('/product', getUsers)
userRouter.post('/product', createUser)
userRouter.post('/product/login', logInUser)
