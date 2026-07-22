import bcrypt from 'bcrypt'
import { userRepository } from "../repositories/userRepository.js"
import { generateAuthToken } from '../utils/tokenUtils.js'



async function register(userData) {
    const hashPassword = await bcrypt.hash(userData.password, 10)
    const user = await userRepository.create({
        ...userData,
        password: hashPassword
    })

    const token = generateAuthToken(user)

    return token
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


    const token = generateAuthToken(user)

    return token
 
}

export const authService = {
    register,
    login
}