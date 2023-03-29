import { userCollection } from "../../dataBase/db"

async function create(hashPassword: string, email: string, name: string ){
    return userCollection.insertOne({ password: hashPassword, email , name})
}

async function findOne(email: string){
    return userCollection.findOne({email: email})
}

const signUpRepository = {
    create,
    findOne
}

export default signUpRepository