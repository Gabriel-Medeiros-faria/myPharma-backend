import bcrypt from "bcrypt";
import signUpRepository from "../../Repositories/signUp-repository";

async function signUp(password: string, email: string, name: string) {
  const hashPassword = bcrypt.hashSync(password, 10);
  const user = await signUpRepository.findOne(email);

  if (user) return false;
  await signUpRepository.create(hashPassword, email, name);

  return true
}

const signUpService = {
  signUp,
};

export default signUpService;
