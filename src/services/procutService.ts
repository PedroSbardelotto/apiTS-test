import { Product, products } from "../models/productModel";

export const getAllProducts = (): Product[] => products;

export const getProductById = (id: number): Product | undefined => {
    return products.find(p => p.id === id);
};

export const addProduct = (name: string, price: number): Product => {
    const id = products.length + 1;
    const newProduct = new Product(id, name, price);
    products.push(newProduct);
    return newProduct;
};

export const updateProduct = (id: number, name: string, price: number): Product | null => {
    const product = getProductById(id);
    if (!product) return null;
    product.name = name;
    product.price = price;
    return product;
};

export const deleteProduct = (id: number): Product | null => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    return products.splice(index, 1)[0];
};
