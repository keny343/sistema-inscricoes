const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL (variáveis de ambiente)
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

db.connect(err => {
  if (err) console.log("Erro ao conectar:", err);
  else console.log("MySQL conectado!");
});

// Rota teste
app.get("/", (req, res) => {
  res.send("Servidor online!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));