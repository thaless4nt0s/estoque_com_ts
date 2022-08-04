import {model, Schema, Mongoose} from 'mongoose'

/*
    produto:{
        ID: Chave primária
        nome: String
        preco: float
        quantidade: inteiro
        fornecedor: provider
    }
*/

const productSchema = new Schema(
    {
        name: {type: String},
        price: {type: Number},
        amount: {type: Number},
        provider: {
            type: Schema.Types.ObjectId,
            ref: "provider",
            required: true
        }
    }
);

export const product = model('product', productSchema);