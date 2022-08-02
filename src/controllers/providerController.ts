import { Request, Response } from "express";
import { provider } from '../models/provider';
import Logger from '../../config/logger';

export async function createProvider(req: Request, res: Response){
    try{
        const providerCreated = await provider.create(req.body);
        return res.status(200).json(providerCreated);
    }catch(e: any){
        Logger.error(`Erro ao criar fornecedor: ${e.message}`);
    }
};

export async function findAllProviders(req: Request, res: Response){
    try{
        const providers = await provider.find();
        return res.status(200).json(providers);
    }catch(e: any){
        Logger.error(`Erro ao buscar os fornecedores: ${e.message}`);
        return res.status(500).json({error: `Busque novamente mais tarde`})
    }
}

export async function findProviderById(req: Request, res: Response){
    try{
        const id = req.params.id;
        const fornecedor = await provider.findById(id);
        return res.status(200).json(fornecedor);
    }catch(e: any){
        Logger.error(`Erro ao encontrar o fornecedor em especifico: ${e.message}`);
        return res.status(404).json({error: "Tente novamente mais tarde"});
    }
}