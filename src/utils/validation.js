import Joi from "joi";
import { email, location } from "../schemas";

export const validate = async (type, data) => {
  let schema;

  if (type === "location") {
    schema = location;
  }

  if (type === "email") {
    schema = email;
  }

  const _joi = Joi.object(schema);

  try {
    await _joi.validateAsync(data);
    return;
  } catch (errors) {
    const errorsMod = {};
    errors.details.map((error) => {
      console.log(error);
      errorsMod[error.context.key] = error.message;
    });
    return errorsMod;
  }
};
