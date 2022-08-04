import express, { Router, Request, Response } from 'express';
import { createProduct } from './controllers/productController';
import {createProvider, deleteProvider, findAllProviders, findProviderById, updateProvider} from './controllers/providerController';

const router = Router();

router.get("/", (req: Request, res: Response) =>{
    res.status(200).send("Funcionando !!");
}).post('/create/provider', createProvider)
.get("/provider", findAllProviders)
.post("/provider/:id", findProviderById)
.patch("/provider/:id", updateProvider)
.delete("/provider/:id", deleteProvider)
.post("/create/product", createProduct);

export default router;