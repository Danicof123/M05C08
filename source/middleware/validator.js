const { body } = require("express-validator");

const validator = [
  body("name", "Ingrese un nombre").exists().isLength({ min: 1, max: 20 }),

  body("color", "Ingrese un color").exists().isLength({ min: 1, max: 20 }),

  body("email", "Ingrese un email").exists().isEmail(),
];

module.exports = validator;
