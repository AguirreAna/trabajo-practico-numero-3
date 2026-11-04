// importaciones 
import dotenv from "dotenv";
import express from "express";
import { startDB } from "./src/config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./src/routes/auth.routes.js";
import { categoryRouter } from "./src/routes/category.routes.js";
import { eventRouter } from "./src/routes/event.routes.js";
import { userRouter } from "./src/routes/user.routes.js";

dotenv.config();

// inicializacion de express
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//rutas
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", eventRouter);
app.use("/api", categoryRouter);

// conexion a la base de datos y arranque del servidor
app.listen(PORT, async () => {
  await startDB();
  console.log(`Servidor listo en el puerto ${PORT}`);
});