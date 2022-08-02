import express, { Router, Request, Response } from 'express';
import {createProvider, findAllProviders} from './controllers/providerController';

const router = Router();

router.get("/", (req: Request, res: Response) =>{
    res.status(200).send("Funcionando !!");
}).post('/create/provider', createProvider)
.get("/provider", findAllProviders)
;

export default router;