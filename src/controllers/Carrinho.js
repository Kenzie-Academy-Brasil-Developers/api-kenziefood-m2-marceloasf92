import { Carrinho } from '../models/Carrinho.js'
import { WriteController } from '../controllers/WriteController.js'

class CarrinhoControl {

    static ProdutosNoCarrinho = [];

    static storage = localStorage.getItem('produtosNoCarrinho')

    static listaCarrinho = document.getElementById('listaCarrinho');

    static iniciarCarrinho() {
        const arr = JSON.parse(CarrinhoControl.storage)
        if (!!CarrinhoControl.storage) {
            CarrinhoControl.ProdutosNoCarrinho = [...arr]
            CarrinhoControl.ProdutosNoCarrinho.forEach(product => {
                Carrinho.criarCarrinho(product)
                const carrinhoVazio = document.querySelector('.carrinhoVazio')
                carrinhoVazio.style.display = "none"



            })

            const totalP = document.querySelector('.total')
            const quantidadeP = document.querySelector('.quantidade')

            const total = CarrinhoControl.ProdutosNoCarrinho.reduce(function (acc, { preco }) {
                acc = acc + preco;
                return acc;
            }, 0)
            totalP.innerText = `R$ ${total.toFixed(2)}`



            quantidadeP.innerText = CarrinhoControl.ProdutosNoCarrinho.length
        }
    }

    static async add(data) {

        const vitrinePrincipal = document.querySelector('.vitrinePrincipal')
        const totalP = document.querySelector('.total')
        const quantidadeP = document.querySelector('.quantidade')

        vitrinePrincipal.addEventListener('click', function (e) {
            let counter = 0;

            const click = e.target

            if (click.classList.contains('adicionarProduto')) {
                counter++
                if (counter === 1) {
                    const carrinhoVazio = document.querySelector('.carrinhoVazio')
                    carrinhoVazio.style.display = "none"
                    counter = 0
                }
                const idClicado = click.id
                const pegarProduto = data.filter(produtos => produtos.id == idClicado)
                CarrinhoControl.ProdutosNoCarrinho.push(pegarProduto[0])
                Carrinho.criarCarrinho(pegarProduto[0])

                const total = CarrinhoControl.ProdutosNoCarrinho.reduce(function (acc, { preco }) {
                    acc = acc + preco;
                    return acc;
                }, 0)
                totalP.innerText = `R$ ${total.toFixed(2)}`



                quantidadeP.innerText = CarrinhoControl.ProdutosNoCarrinho.length
            }
            WriteController.execute()
        })
    }

    static remover() {

        const listaCarrinho = document.getElementById('listaCarrinho')
        const totalP = document.querySelector('.total')
        const quantidadeP = document.querySelector('.quantidade')


        listaCarrinho.addEventListener('click', function (e) {
            let click = e.target

            if (click.classList.contains('btnCarrinho')) {

                const idClicado = click.id
                const acharProduto = CarrinhoControl.ProdutosNoCarrinho.filter(valor => valor.id == idClicado)
                CarrinhoControl.ProdutosNoCarrinho.splice(CarrinhoControl.ProdutosNoCarrinho.indexOf(acharProduto[0]), 1);

                let total = CarrinhoControl.ProdutosNoCarrinho.reduce(function (acc, { preco }) {
                        acc = acc + preco;
                    return acc;
                }, 0)

                totalP.innerText = `R$ ${total.toFixed(2)}`

                quantidadeP.innerText = CarrinhoControl.ProdutosNoCarrinho.length

                const a = click.parentNode.remove()
                if (CarrinhoControl.ProdutosNoCarrinho.length === 0) {
                    const carrinhoVazio = document.querySelector('.carrinhoVazio')
                    carrinhoVazio.style.display = "initial"

                    const listaCarrinho = document.getElementById('listaCarrinho');
                    listaCarrinho.style.display = "initial"

                }
            }
            WriteController.execute()
        })
    }

}
export { CarrinhoControl }