import signUpService from "Service/signUp-service";
import signInService from "Service/signIn-service";
import { cleanDb } from "../helpers";

beforeEach(async () => {
  await cleanDb();
});

describe("SigIn user", ()=>{
    it("Delete session", async ()=>{
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
          };
      
          await signUpService.signUp(
            user.password,
            user.email,
            user.name
          );
    
          const respSignIn = await signInService.signIn(user.email, user.password)
    
          const respDelete = await signInService.deleteSession(respSignIn.token)
    
          expect(respDelete).toBe(true)
      })
      it("error when logging in", async ()=>{
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
          };
      
          await signUpService.signUp(
            user.password,
            user.email,
            user.name
          );
    
          await signInService.signIn(user.email, user.password)
    
          const respDelete = await signInService.deleteSession("fasdfasdfasdfasdf")
    
          expect(respDelete).toBe(false)
      })
})