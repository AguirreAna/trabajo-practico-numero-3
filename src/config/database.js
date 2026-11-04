import mongoose from "mongoose";

// Inicializa la conexión a la base de datos MongoDB
export const startDB = async () => {
  try {
    const mongodbUri =
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tp-integrador-III";

    await mongoose.connect(mongodbUri);

    console.log("Conectado a la base de datos correctamente");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
    process.exit(1); // sirve para que el servidor no se conecte si la base de datos no está disponible 
  }
};