import { Carrinho } from '/src/models/carrinho.js'

class CarrinhoControl {


    static add(value) {
        
      Carrinho.DOM(value)
     
    }

    static remove() {

        const list = document.getElementById('listaCarrinho')

        list.addEventListener('click', function (e) {

            let click = e.target

            if (click.id === '257') {

                const a = click.parentNode.remove()
            }
        })
    }

}
export { CarrinhoControl }