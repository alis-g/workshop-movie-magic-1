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

async function findByEmail(email) {
    const user = await prisma.user.findUnique({
        where:{email}
    })

    return user
}

export const userRepository = {
    create,
    findByEmail
    
}