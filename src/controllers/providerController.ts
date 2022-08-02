import { Request, Response } from "express";
import { provider } from "../models/provider";
import Logger from '../../config/logger';

export default async function createProvider(req: Request, res: Response){
    try{
        const providerCreated = await provider.create(req.body);
        res.status(200).json(providerCreated);
    }catch(e: any){
        Logger.error(`Erro ao criar fornecedor: ${e.message}`);
    }
};