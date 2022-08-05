import express, { Router, Request, Response } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './controllers/productController';
import {createProvider, deleteProvider, findAllProviders, findProviderById, updateProvider} from './controllers/providerController';

const router = Router();

router.get("/", (req: Request, res: Response) =>{
    res.status(200).send("Funcionando !!");
}).post('/create/provider', createProvider)
.get("/provider", findAllProviders)
.post("/provider/:id", findProviderById)
.patch("/provider/:id", updateProvider)
.delete("/provider/:id", deleteProvider)
.post("/create/product", createProduct)
.get('/product', getAllProducts)
.get('/product/:id', getProductById)
.patch("/product/:id", updateProduct)
.delete("/product/:id", deleteProduct);

export default router;