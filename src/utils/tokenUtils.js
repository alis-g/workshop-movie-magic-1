import jwt from 'jsonwebtoken'


export function generateAuthToken(user){
    const payload = {id: user.id, email: user.email}
    const secret = 'secret'

    const token = jwt.sign(payload, secret, {expiresIn: '1h'})

    return token
}