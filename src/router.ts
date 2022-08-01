import express, { Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) =>{
    res.status(200).send("Funcionando !!");
})

export default router;