import { prisma } from "../lib/prisma.js"

async function create (userData){
    const user = await prisma.user.create({
        data: {
            email: userData.email,
            password: userData.password
        }
    })
    return user
}

export const userRepository = {
    create
}