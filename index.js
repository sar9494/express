const express = require('express')
const app = express()
const port = 5000
var user = [
    {
        firstName:"tim",
        secondName:"tam",
        password:"12345678"
    },
    {
        firstName:"tim",
        secondName:"tam",
        password:"12345678"
    }
]
app.use(express.json())

app.get('/user', (req, res) => {
  res.send(user)
})
  app.put('/user', (req, res) => {
    user=user.filter((el)=>(el.firstName!=="tim"&&el.secondName=="tam"))
    res.send(user)
  })
  app.post('/user', (req, res) => {
    const {firstName,secondName} = req.body
    console.log(firstName,secondName);
    
    user.map((el)=>{
        if(firstName!==el.firstName&&secondName!==el.secondName){
            user.push({firstName:firstName,secondName:secondName})
        }
    })
    res.send(user);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})