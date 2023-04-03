import { ObjectId } from "mongodb";
import { sessionsCollection } from "../../dataBase/db";

async function createSession(user: any, token: string){
    return sessionsCollection.insertOne({userId: user._id, email: user.email, name: user.name, token}) 
}

async function findOne(token: string){
    return sessionsCollection.findOne({token})
}

async function deleteSession(token: string) {
    return sessionsCollection.deleteOne({token: token})
}
const signInRepository = {
    createSession,
    findOne,
    deleteSession
}

export default signInRepository