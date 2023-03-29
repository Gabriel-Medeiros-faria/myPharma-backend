import { sessionsCollection } from "../../dataBase/db";

async function createSession(user: any, token: string){
    return sessionsCollection.insertOne({userId: user._id, email: user.email, name: user.name, token}) 
}

const signInRepository = {
    createSession
}

export default signInRepository