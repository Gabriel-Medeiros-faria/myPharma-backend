import  bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken'
import signInRepository from '../../Repositories/signIn-repository'
import signUpRepository from '../../Repositories/signUp-repository'
import dotenv from 'dotenv'
dotenv.config()

async function signIn(email: string, password: string){
    const user = await signUpRepository.findOne(email)

    if(user?.password === null || !user) throw {name: "Usuário não existe!"}

    const senhaHash = await bcrypt.compare(password, user?.password)
    if(!senhaHash) throw {name: "Senha incorreta!"}

    const session = await signInRepository.findOne( user._id )

        if (!session) {
            const token = jwt.sign({user}, `${process.env.JWT_SECRET}`)
            await signInRepository.createSession(user, token)
            return {
                id: user._id,
                name: user.name, 
                token: token,
                email: user.email
            }
        }
        else{
            await signInRepository.deleteSession(session.token)
            const token = jwt.sign({user}, `${process.env.JWT_SECRET}`)
            await signInRepository.createSession(user, token)
            return {
                id: user._id,
                name: user.name, 
                token: token,
                email: user.email
            }
        }
    
}

const signInService = {
    signIn
}

export default signInService