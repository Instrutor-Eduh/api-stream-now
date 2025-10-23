import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routes from "./routes";
import conectaBanco from "./config/dbConnect.js";

const app = express();
app.use(cors());
app.use(express.json());
app.set('json spaces', 2);
routes(app);

// Conexão com o Banco
await conectaBanco();

const porta = process.env.PORTA;
const end = process.env.END;
app.listen(porta, () => console.log(`🚀 Endereço: ${end}:${porta}`));