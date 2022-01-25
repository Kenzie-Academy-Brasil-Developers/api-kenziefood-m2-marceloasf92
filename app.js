import { Carrinho } from "./src/models/carrinho.js";
import { CarrinhoControl } from "./src/controllers/carrinho.js";

const API = fetch('https://kenzie-food-api.herokuapp.com/product')
            .then(response => response.json())

const produtosLoja = await API


CarrinhoControl.add()
CarrinhoControl.add()
CarrinhoControl.add()

CarrinhoControl.remover()

export { produtosLoja }
