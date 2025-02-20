import express from 'express'
import bcrypt from 'bcrypt';
import fs from 'fs'

import { createUser } from '../controller/users/create.user.js'
export const Authentication = express.Router()

const validateSignUp = (req, res, next) => {
    const { email, password } = req.body
    if (!email) {
        res.status(400).json({
            error: "Bad Request",
            message: "Email required"
        })
    } else if (!password) {
        res.status(400).json({
            error: "Bad Request",
            message: "Password required"
        })
    } else { next() }
}
const validateLogIn =async (req, res, next) => {
    const { email, password } = req.body
    try {
        var users = JSON.parse(fs.readFileSync('src/db/users.json'))
        const here = users.find((el) => el.email === email)
        console.log(here);
        
        if (here) {
            const decryptpass=await bcrypt.compare(password,here.password)
            if(decryptpass){
                res.status(400).json({
                    success: true,
                    message: "User logged in"
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Wrong password"
                })
            }
            
        } else {
            res.status(400).json({
                error: "Bad Request",
                message: "User not found"
            })
        }
    } catch (e) {
        res.status(500).json({
            error: "",
            message: `${e}`
        })
    }
}
Authentication.post('/signUp', validateSignUp, createUser)
Authentication.post('/login', validateLogIn, createUser)
