import { VitrineController } from "./src/controllers/Vitrine.js"
import { Filtros } from "./src/models/Filtros.js"
import { CarrinhoControl } from "./src/controllers/Carrinho.js";

// const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
//     .then(res => res.json())
//     .then((res) => res)
//     .catch((error) => error);

// console.log(response);

const response =
    await fetch('https://kenzie-food-api.herokuapp.com/my/product', {
        method: "GET",
        headers: {
            Authorization: "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
            "Content-Type": "application/json",
        },
    })
        .then(res => res.json())
        .then((res) => res)
        .catch((error) => error);

VitrineController.criarTemplate(response)

const nav = document.getElementById("filtros")
const input = document.getElementById("input")
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


CarrinhoControl.add(response)

CarrinhoControl.remover()





