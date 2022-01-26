import { VitrineController } from "./src/controllers/Vitrine.js"
import { Filtros } from "./src/models/Filtros.js"

const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(res => res.json())
    .then((res) => res)
    .catch((error) => error);

console.log(response);

VitrineController.criarTemplate(response)

const nav = document.getElementById("filtros")
const input = document.getElementById("input")
const pesquisa = document.getElementById("pesquisa")
const campoPesquisa = document.querySelector('.campoPesquisa')


nav.addEventListener("click", (e) => {
    let click = e.target

    if (click.tagName === "BUTTON") {
        if (click.id === "Todos") {
            VitrineController.criarTemplate(response)

        } else if (click.id === "Panificadora") {
            VitrineController.criarTemplate(Filtros.panificadora(response))

        } else if (click.id === "Frutas") {
            VitrineController.criarTemplate(Filtros.frutas(response))

        } else if (click.id === "Bebidas") {
            VitrineController.criarTemplate(Filtros.bebidas(response))

        }
    }
})

campoPesquisa.addEventListener("keyup", (e) => {
    if (e.key.length === 1) {
        let valorBusca = input.value.toLowerCase().trim()

        Filtros.busca(valorBusca, response)
    }

})

campoPesquisa.addEventListener("keyup", (e) => {

    console.log(e);


    let valorBusca = input.value.toLowerCase().trim()

    if (valorBusca === '') {

        VitrineController.criarTemplate(response)
    }
    if (e.key.length === 1) {

        Filtros.busca(valorBusca, response)
    }

})


import { CarrinhoControl } from "./src/controllers/Carrinho.js";

CarrinhoControl.add(response)

CarrinhoControl.remover()

const addProduto = document.getElementById("addProduto")
const boxPopUp = document.getElementById("boxPopUp")
const fecharPopUp = document.getElementById("fechar")
const submit = document.getElementById("submit")
const formProduto = document.getElementById("formProduto")

addProduto.addEventListener("click", () => {
    boxPopUp.classList.add("mostrar")
})
fecharPopUp.addEventListener("click", () => {
    boxPopUp.classList.remove("mostrar")
})
submit.addEventListener("click", (e) => {
    e.preventDefault()
    let data = {};

    const elements = formProduto.elements;


    for (let i = 0; i < elements.length; i++) {
        let item = elements[i];
        // O "name" é um atributo HTML
        if (item.name !== "") {
            data[item.name] = item.value;
        }
    }
 console.log(formProduto.elements[0].value)
 console.log(data)
})
