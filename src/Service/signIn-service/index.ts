import jwt from 'jsonwebtoken'
import signInRepository from '../../Repositories/signIn-repository'
import signUpRepository from '../../Repositories/signUp-repository'
import dotenv from 'dotenv'
dotenv.config()

async function signIn(email: string){
    const user = await signUpRepository.findOne(email)
    if(!user) throw {name: 'Usuário não existe!'}
    const token = jwt.sign({user}, `${process.env.JWT_SECRET}`)
    await signInRepository.createSession(user, token)
}

const signInService = {
    signIn
}

export default signInService