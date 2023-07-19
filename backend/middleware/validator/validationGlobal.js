import { check } from "express-validator";

export default function validationGlobal(body = []) {
  let checker = [];

  body?.forEach((element) => {
    switch (element) {
      case "title":
        checker.push(
          check("title", "title should be string with minnimum length of 3")
            .notEmpty()
            .isLength({ min: 4 })
        );
        break;
      case "description":
        checker.push(
          check(
            "description",
            "description should be string with minnimum length of 3"
          )
            .notEmpty()
            .isLength({ min: 4 })
        );
        break;

      case "email":
        checker.push(
          check("email", "email should be of correct format non empty sting.")
            .notEmpty()
            .isLength({ min: 4 })
            .withMessage("")
            .isEmail()
        );
        break;
    }
  });
  return checker;
}

export function validationGlobalOptional(body = []) {
  let checker = [];

  body?.forEach((element) => {
    switch (element) {
      case "title":
        checker.push(
          check("title", "title should be string with minnimum length of 3")
            .optional()
            .notEmpty()
            .isLength({ min: 4 })
        );
        break;
      case "description":
        checker.push(
          check(
            "description",
            "description should be string with minnimum length of 3"
          )
            .optional()
            .notEmpty()
            .isLength({ min: 4 })
        );
        break;

      case "email":
        checker.push(
          check("email", "email should be of correct format non empty sting.")
            .optional()
            .notEmpty()
            .isLength({ min: 4 })
            .isEmail()
        );
        break;
    }
  });
  return checker;
}
