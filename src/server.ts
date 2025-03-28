import dotenv from "dotenv";
import express from "express";
import app from "./app"; // Importa o app configurado
import { products } from "./models/productModel";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});