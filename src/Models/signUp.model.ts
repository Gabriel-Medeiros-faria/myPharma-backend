import joi from "joi"

export const signUpSchema = joi.object({
    password: joi.string().required(),
    email: joi.string().email().required(),
    name: joi.string().required()
})