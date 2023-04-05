import { userCollection, sessionsCollection, productCollection, cartCollection } from "dataBase/db";

export async function cleanDb() {
    await userCollection.deleteMany({})
    await sessionsCollection.deleteMany({})
    await productCollection.deleteMany({})
    await cartCollection.deleteMany({})
  }