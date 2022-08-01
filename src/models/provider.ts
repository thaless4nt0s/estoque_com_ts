import {model, Schema} from "mongoose";

/*
    Fornecedor{
        ID: chave primária
        name: String
    }
*/

const providerSchema = new Schema(
    {
        
        name: {type: String},
    }
);


export const provider = model("provider",providerSchema);