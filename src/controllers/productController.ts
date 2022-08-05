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

export async function getAllProducts(req: Request, res: Response){
    try{
        const products = await product.find();
        if(!products){
            return res.status(404).json({msg: `Nenhum produto encontrado`});
        }
        return res.status(200).json(products);
    }catch(e: any){
        Logger.error(`Não foi possível listar os produtos`);
        return res.status(404).json({msg: `Tente novamente mais tarde`});
    }
}

export async function getProductById(req: Request, res: Response){
    try{
        const id = req.params.id;
        const produto = await product.findById(id);
        if(!produto){
            return res.status(404).json({msg: `Nenum produto encontrado`});
        }
        return res.status(200).json(produto);
    }catch(e: any){
        Logger.error(`Não foi possivel listar o produto`);
        return res.status(404).json({msg: `Tente novamente mais tarde`});
    }
}

