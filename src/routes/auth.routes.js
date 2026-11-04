import { Router } from "express";
import {
  register,
  login,
  getProfile,
  updateProfile,
  logout,
} from "../controllers/auth.controller.js";
import {
  loginValidation,
  registerValidation,
  updateProfileValidation,
} from "../middlewares/validator/auth.validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const authRouter = Router();

// Registro de usuario con perfil embebido (público)
authRouter.post("/auth/register", registerValidation, register);

// Login con JWT enviado como cookie segura (público)
authRouter.post("/auth/login", loginValidation, login);

// Obtener perfil del usuario autenticado
authRouter.get("/auth/profile", authMiddleware, getProfile);

// Actualizar el perfil embebido del usuario autenticado
authRouter.put(
  "/auth/profile",
  authMiddleware,
  updateProfileValidation,
  updateProfile,
);

// Logout limpiando la cookie de autenticación
authRouter.post("/auth/logout", authMiddleware, logout);
