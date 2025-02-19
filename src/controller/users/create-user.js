import fs from 'fs'
import bcrypt from 'bcrypt';
export const createUser = (req, res) => {
    const { email, password } = req.body
    try {
        var users = JSON.parse(fs.readFileSync('src/db/users.json'))
        const here = users.find((el) => el.email === email)
        const hashPassword = bcrypt.hashSync(password, 8);
        if (!here) {
            users.push({ email: email, password: hashPassword })
            res.status(201).json({
                success: true,
                user: email
            })
        } else {
            res.status(400).json({
                error: "Bad Request",
                message: "User signed up"
            })
        }
        fs.writeFileSync('src/db/users.json',JSON.stringify(users))
    } catch (e) {
        res.status(500).json({
            error: "",
            message: `Error while creating user ${e}`
        })
    }
}