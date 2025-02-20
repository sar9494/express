import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from './router/user-router.js'
const url = "mongodb+srv://batbayarsaruul0:g2TvhBPGTCL8XnBN@cluster1.vfx1a.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster1"
const connectDb = async () => {
  try {
    await mongoose.connect(url)
    console.log("Successfully connected");
  } catch (e) {
    console.log("Error occured", e);
  }
}
connectDb()
const app = express()
const port = 5000
//g2TvhBPGTCL8XnBN
//batbayarsaruul0
//mongodb+srv://batbayarsaruul0:<db_password>@cluster1.vfx1a.mongodb.net/{database name}?retryWrites=true&w=majority&appName={Cluster name}

app.use(express.json())

app.use("/users", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})