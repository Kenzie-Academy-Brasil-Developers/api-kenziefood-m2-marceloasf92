import { Carrinho } from '/src/models/carrinho.js'
import { produtosLoja } from '/app.js'
import { ProdutosNoCarrinho } from '../mock/produtosNoCarrinho.js'
class CarrinhoControl {


    static async add() {

        const productClicado = 5
        const array = await produtosLoja
        const pegarProduto = array.filter(produtos => produtos.id === productClicado)
        ProdutosNoCarrinho.push(pegarProduto[0])
        console.log(ProdutosNoCarrinho)
        Carrinho.DOM(pegarProduto[0])


    }


    /// SUPOSTAMENTE PARA FUNCIONAR COM O TODO \\\
    // static async add() {

    //         window.addEventListener('click', function(e) {
    //             const click          = e.target
    //             const productClicado = click.parentNode.id
    //             const array          = await produtosLoja
    //             const pegarProduto   = array.filter(produtos => produtos.id === productClicado)

    //             Carrinho.DOM(pegarProduto[0])

    //       })

    //   }

    static remover() {

        const list = document.getElementById('listaCarrinho')

        list.addEventListener('click', function (e) {

            let click = e.target
            // const productClicado = click.parentNode.id
            const productClicado = 5

            if (click.tagName == 'BUTTON') {

                const acharProduto = ProdutosNoCarrinho.filter(valor => valor.id === productClicado)
                ProdutosNoCarrinho.splice(ProdutosNoCarrinho.indexOf(acharProduto[0]), 1);
                console.log(ProdutosNoCarrinho)
                const a = click.parentNode.remove()

            }

        })
    }

}
export { CarrinhoControl }