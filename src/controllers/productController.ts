import { Request, Response } from "express";

// Schema
import {product} from '../models/product';

export async function createProduct(req: Request, res: Response){
    const data = req.body;
    const createdProduct = await product.create(data);
    console.log(createdProduct);
    return res.status(200).json(createdProduct);
}

