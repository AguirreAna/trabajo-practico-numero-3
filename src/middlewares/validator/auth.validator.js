import { body } from "express-validator";
import { UserModel } from "../../models/user.model.js";
import { validateResult } from "./validator.js";

export const registerValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("El username es obligatorio")
    .isLength({ min: 3, max: 20 })
    .withMessage("El username debe tener entre 3 y 20 caracteres")
    .isAlphanumeric()
    .withMessage("El username solo puede contener letras y números"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ingresar un email válido"),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
    ),

  body("role")
    .optional()
    .isIn(["user", "admin"])
    .withMessage("Rol inválido"),

  body("profile.firstName")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("El nombre solo puede contener letras"),

  body("profile.lastName")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("El apellido solo puede contener letras"),

  body("profile.birthDate")
    .optional()
    .isISO8601()
    .withMessage("Fecha inválida")
    .custom((value) => {
      const fecha = new Date(value);
      if (fecha > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser futura");
      }
      return true;
    }),

  body("profile.phone")
    .optional()
    .isLength({ min: 8, max: 15 })
    .withMessage("El teléfono debe tener entre 8 y 15 dígitos")
    .isNumeric()
    .withMessage("El teléfono solo puede contener números"),
];

export const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Email inválido"),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),
];

export const updateProfileValidation = [
  body("profile.firstName")
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("El nombre solo puede contener letras"),

  body("profile.lastName")
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("El apellido solo puede contener letras"),

  body("profile.birthDate")
    .optional()
    .isISO8601()
    .withMessage("Fecha inválida")
    .custom((value) => {
      const fecha = new Date(value);
      if (fecha > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser futura");
      }
      return true;
    }),

  body("profile.phone")
    .optional()
    .isLength({ min: 8, max: 15 })
    .withMessage("El teléfono debe tener entre 8 y 15 dígitos")
    .isNumeric()
    .withMessage("El teléfono solo puede contener números"),
];