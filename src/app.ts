import express from 'express'

//Arquivo de rotas
import router from './router';

//Banco de dados
import db from '../config/database';

//Configurações globais
import config from 'config'

//Logger
import Logger from '../config/logger';

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use("/api/", router);

app.listen( port , async () =>{
    await db();
    Logger.info(`Conectado com sucesso na porta ${port}`)
})