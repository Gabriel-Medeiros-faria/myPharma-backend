import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const mongoClient = new MongoClient(`${process.env.MONGO_URI}`);

(async()=>{
    try {
        await mongoClient.connect()
        console.log("MongoDb Conectado")
    } catch (err) {
        console.log(err)
    }
})

const db = mongoClient.db("myPharma")
export const userCollection = db.collection("users")
export const sessionsCollection = db.collection("sessions")
export const productCollection = db.collection("products")
export const cartCollection = db.collection("cart")