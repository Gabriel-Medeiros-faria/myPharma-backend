import signUpService from "Service/signUp-service";
import signInService from "Service/signIn-service";
import { cleanDb } from "../helpers";
import cartService from "Service/cart-service";
import { ObjectId } from "mongodb";

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
  
});

describe("Validate cart", () => {
  it("Validade product add to cart", async () => {
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
    const product = {
      id: new ObjectId("507f191e810c19729de860ea"),
      name: "Dipirona",
      price: 10,
      image: "imagem do dipirona",
      amount: 10,
      userId: respSignIn.id,
    };

    const resp = await cartService.postProductToCart(
      product.id.toString(),
      product.name,
      product.price,
      product.image,
      product.amount,
      product.userId
    );
    expect(resp).toBe(true);
  });

  it("Validade product update to cart", async () => {

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

    const product = {
      id: new ObjectId("507f191e810c19729de860ea"),
      name: "Dipirona",
      price: 10,
      image: "imagem do dipirona",
      amount: 10,
      userId: respSignIn.id,
    };
    await cartService.postProductToCart(
      product.id.toString(),
      product.name,
      product.price,
      product.image,
      product.amount,
      product.userId
    );
    const resp = await cartService.postProductToCart(
      product.id.toString(),
      product.name,
      product.price,
      product.image,
      product.amount,
      product.userId
    );
    expect(resp).toBe(true);
  });

  it("delete product to cart", async()=>{

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

    const product = {
        id: new ObjectId("507f191e810c19729de860ea"),
        name: "Dipirona",
        price: 10,
        image: "imagem do dipirona",
        amount: 10,
        userId: respSignIn.id,
      };
      await cartService.postProductToCart(
        product.id.toString(),
        product.name,
        product.price,
        product.image,
        product.amount,
        product.userId
      );
      const respDeleteProduct = await cartService.deleteProductToCart(product.id.toString())
      expect(respDeleteProduct).toBe(true)
  })
});
