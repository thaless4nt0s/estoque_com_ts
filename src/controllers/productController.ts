import { Request, Response } from "express";

// Schema
import {product} from '../models/product';

//Logs de erro
import Logger from '../../config/logger';

export async function createProduct(req: Request, res: Response){
    try{
        const data = req.body;
        const createdProduct = await product.create(data);
        return res.status(200).json(createdProduct);
    }catch(e: any){
        Logger.error(`Não foi possível criar o produto: ${e.message}`);
        return res.status(404).json({msg: `Tente novamente mais tarde`});
    }
}

