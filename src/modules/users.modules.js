import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,require:true},
    id:{type:String,require:true}
})

export const Users = mongoose.model("users",userSchema)