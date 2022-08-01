import express from 'express'

//Arquivo de rotas
import router from './router';

//Configurações globais
import config from 'config'
const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use("/api/", router);

app.listen( port , async () =>{
    console.log(`Rodando na porta 3000`);
})