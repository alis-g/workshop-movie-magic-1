import bcrypt from 'bcrypt'
import { userRepository } from "../repositories/userRepository.js"

async function register(userData) {
    const hashPassword = await bcrypt.hash(userData.password, 10)
    return await userRepository.create({
        ...userData,
        password: hashPassword
    })
}


export const authService = {
    register
}