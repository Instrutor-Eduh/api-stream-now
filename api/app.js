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

// Conecta ao banco
await conectaBanco();

// 🚀 exporta o app (NÃO use app.listen)
export default app;
