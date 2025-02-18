import fs from'fs'

export const createUser = (req, res) => {
    var users=JSON.parse(fs.readFileSync('src/db/users.json'))
    var isHere = false
    const { firstName, secondName ,password} = req.body
console.log(users);

    users.map((el) => {
        if (el.firstName === firstName && el.secondName === secondName) {
            console.log('-----', el)
            isHere = true
        }
    })
    if (isHere) {
        isHere = false
        res.send("log in ")
    } else {
        users.push({ firstName: firstName, secondName: secondName,password:password })
        fs.writeFileSync('src/db/users.json',JSON.stringify(users))
        isHere = false
        res.send(users)
    }
}