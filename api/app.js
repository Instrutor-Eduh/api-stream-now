import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import conectaBanco from "./config/dbConnect.js";

const app = express();
app.use(cors());
app.use(express.json());
app.set("json spaces", 2);
routes(app);

// 🔧 Conecta ao banco de forma segura
(async () => {
  try {
    await conectaBanco();
    console.log("✅ Banco conectado com sucesso");
  } catch (erro) {
    console.error("❌ Erro ao conectar ao banco:", erro);
  }
})();

// 🚀 exporta o app (sem listen)
export default app;
