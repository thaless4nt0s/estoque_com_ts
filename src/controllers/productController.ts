import { Request, Response } from "express";

// Schema
import { product } from '../models/product';

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
            return res.status(404).json({msg: `Nenhum produto encontrado`});
        }
        return res.status(200).json(produto);
    }catch(e: any){
        Logger.error(`Não foi possivel listar o produto: ${e.message}`);
        return res.status(404).json({msg: `Tente novamente mais tarde`});
    }
}

export async function updateProduct(req: Request, res: Response){
    try{
        const id = req.params.id;
        const data = req.body;
        const produto = await product.findById(id);
        if (!produto){
            return res.status(404).json({msg: `Não é possível atualizar o produto`});
        }

        await  product.updateOne({_id: id}, data);
        return res.status(200).json(data);
    }catch(e: any){
        Logger.error(`Não é possível atualizar o produto: ${e.message}`);
        return res.status(404).json({msg: `Falha ao atualizar, tente novamente mais tarde`});
    }
}

export async function deleteProduct(req: Request, res: Response){
    try{
        const id = req.params.id;
        const produto = await product.findById(id);
        if(!produto){
            return res.status(404).json({msg: `Erro ao excluir produto`});
        }
        await produto.delete();
        return res.status(200).json({msg: `Produto deletado com sucesso !!`});
    }catch(e: any){
        Logger.error(`Não é possivel deletar o produto: ${e.message}`);
        return res.status(404).json({msg: `Falha ao deletar, tente novamente mais tarde`});        
    }
}
