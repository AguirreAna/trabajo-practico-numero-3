// importaciones 
import "dotenv/config";
import express from "express";
import { startDB } from "./src/config/database.js";

// inicializacion de express
const app = express();
const PORT = process.env.PORT || 3000;

// conexion a la base de datos y arranque del servidor
app.listen(PORT, async () => {
  await startDB();
  console.log(`Servidor listo en el puerto ${PORT}`);
});