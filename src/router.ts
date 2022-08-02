import express, { Router, Request, Response } from 'express';
import createProvider from './controllers/providerController';

const router = Router();

router.get("/", (req: Request, res: Response) =>{
    res.status(200).send("Funcionando !!");
}).post('/create/provider', createProvider);

export default router;