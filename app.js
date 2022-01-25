import { Carrinho } from "./src/models/carrinho.js";
import { CarrinhoControl } from "./src/controllers/carrinho.js";


const z = {
    "id": 1,
    "nome": "Mousse de morango com a fruta",
    "preco": 27.5,
    "categoria": "Frutas",
    "descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
    "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
    "createdAt": "2022-01-24T16:25:25.401Z",
    "updatedAt": "2022-01-24T16:25:25.401Z"
}
CarrinhoControl.add(z)
CarrinhoControl.add(z)
CarrinhoControl.add(z)
CarrinhoControl.remove()
