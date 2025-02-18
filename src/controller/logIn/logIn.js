import fs from "fs"
export const logInUser = (req,res) =>{
    var users = JSON.parse(fs.readFileSync('src/db/users.json'))
    const {firstName,secondName,password} = req.body
    var truePassword = ""
    users.map((el)=>{
        if(el.firstName===firstName&&el.secondName===secondName){
            if(el.password===password){
                truePassword="y"
            }
            else{
                truePassword='n'
            }
        }
    })
    if(truePassword==='y'){
        
    }
    res.send(users)
}