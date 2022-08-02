import mongoose from "mongoose";
import config from 'config';
import Logger from './logger';

async function connect(){
    const db = config.get<string>("url");
    try {
        await mongoose.connect(db);
        Logger.info(`Conectado com sucesso ao banco de dados !!`)
    } catch (e: any) {
        Logger.error(`Erro ao conectar com o banco de dados: ${e.message}`);
    }
}

export default connect;