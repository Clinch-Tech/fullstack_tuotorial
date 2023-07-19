import { validationResult } from "express-validator";
import { failureHandler } from "../../response.handler.js";

export const validator = (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors);

  if (errors && errors?.errors && errors?.errors?.length) {
    let validationErrors = errors.errors.reduce((a, c) => {
      if (!a.includes(c.msg)) {
        a.push(c.msg);
      }
      return a;
    }, []);
    return failureHandler(res, 400, `Validation failed`, {
      errors: validationErrors,
    });
  }
  return next();
};
