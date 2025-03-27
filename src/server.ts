import dotenv from "dotenv";
import express from "express";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;
