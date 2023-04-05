import signUpService from "Service/signUp-service";
import { cleanDb } from "../helpers";

beforeEach(async () => {
  await cleanDb();
});

describe("Create user", () => {
  it("valid user", async () => {
    const user = {
      password: "12345",
      email: "gabriel13@email.com",
      name: "Gabriel",
    };

    const resp = await signUpService.signUp(
      user.password,
      user.email,
      user.name
    );
    expect(resp).toBe(true);
  });

  it("invalid user", async () => {
    const user = {
      password: "12345",
      email: "gabriel13@email.com",
      name: "Gabriel",
    };

    await signUpService.signUp(user.password, user.email, user.name);
    const resp = await signUpService.signUp(
      user.password,
      user.email,
      user.name
    );
    expect(resp).toBe(false);
  });
});
