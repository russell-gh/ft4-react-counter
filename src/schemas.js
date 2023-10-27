import Joi from "joi";

export const location = { location: Joi.string().required().min(3) };

export const email = {
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
};
