import User from '../models/User'

export const signup = async (req, res) => {
    const {username, email, password, roles} = req.bodyM

    new User({
        username,
        email,
        password: User.encryptPassword(password)
    })

    res.json('signup')
}

export const signin = async (req, res) => {
    res.json('signin')
}

export default model ('User', userSchmena)