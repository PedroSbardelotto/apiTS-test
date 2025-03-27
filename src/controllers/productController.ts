import { Request, Response } from "express";
import * as productService from "../services/productService";

export const getAll = (req: Request, res: Response): void => {
    res.json(productService.getAllProducts());
};

export const getById = (req: Request, res: Response): void => {
    const product = productService.getProductById(parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ message: "Produto não encontrado" });
};

export const create = (req: Request, res: Response): void => {
    const { name, price } = req.body;
    if (!name || typeof price !== "number") {
        res.status(400).json({ message: "Nome e preço são obrigatórios" });
        return;
    }
    const product = productService.addProduct(name, price);
    res.status(201).json(product);
};

export const update = (req: Request, res: Response): void => {
    const { name, price } = req.body;
    const product = productService.updateProduct(parseInt(req.params.id), name, price);
    product ? res.json(product) : res.status(404).json({ message: "Produto não encontrado" });
};

export const remove = (req: Request, res: Response): void => {
    const product = productService.deleteProduct(parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ message: "Produto não encontrado" });
};
