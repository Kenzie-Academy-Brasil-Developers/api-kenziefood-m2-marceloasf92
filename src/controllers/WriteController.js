import { CarrinhoControl } from "../controllers/Carrinho.js"

class WriteController {
    static execute() {
        const produtos = CarrinhoControl.ProdutosNoCarrinho

        localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtos))
    }
}

export {WriteController} 