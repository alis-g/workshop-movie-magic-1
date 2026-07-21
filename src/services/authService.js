import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userRepository } from "../repositories/userRepository.js"



async function register(userData) {
    const hashPassword = await bcrypt.hash(userData.password, 10)
    return await userRepository.create({
        ...userData,
        password: hashPassword
    })
}

async function login(userData) {
    const user = await userRepository.findByEmail(userData.email)
    if(!user){
        throw new Error('Invalid username or password')
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password)

    if (!isPasswordValid){
        throw new Error('Invalid username or password')
    }

    const payload = {userId: user.id, email: user.email}

    const token = jwt.sign(payload, 'secret', {expiresIn: '1h'})

    return token
 
}

export const authService = {
    register,
    login
}