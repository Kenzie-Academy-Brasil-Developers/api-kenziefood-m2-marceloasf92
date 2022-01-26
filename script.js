import { VitrineController } from "./src/controllers/Vitrine.js"
import { Filtros } from "./src/models/Filtros.js"
import { CarrinhoControl } from "./src/controllers/Carrinho.js";

// const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
//     .then(res => res.json())
//     .then((res) => res)
//     .catch((error) => error);

// console.log(response);

async function getAPI() {
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
    return response;
}

const response = await getAPI()

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
submit.addEventListener("click", async (e) => {
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

    console.log(data);

    await postAPI(data)
    const response = await getAPI()
    VitrineController.criarTemplate(response)

})

const edicaoButton = document.querySelector(".editarProdutoAPI")
const boxEditar = document.getElementById("boxEditar")
const fecharbox = document.getElementById("fecharEdicao")
const submitEdicao = document.getElementById("submitEdicao")
const formEdicao = document.getElementById("formEdicao")

edicaoButton.addEventListener("click", () => {
    boxEditar.classList.add("mostrar")
})
fecharbox.addEventListener("click", () => {
    boxEditar.classList.remove("mostrar")
})

async function postAPI(data) {
    const response =
        await fetch('https://kenzie-food-api.herokuapp.com/my/product', {
            method: "post",
            headers: {
                Authorization: "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res) => res)
            .catch((error) => error);
    return response
}


const deletarProdutoAPI = document.querySelector('.deletarProdutoAPI');
async function deleteAPI(e) {
    

    if (e.target.classList.contains('deletarProdutoAPI')) {
        let id = Number(e.target.id)
        await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, {
            method: "delete",
            headers: {
                Authorization: "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
            },
        })
            .then(res => res.json())
            .then((res) => res)
            .catch((error) => error);

        const response = await getAPI()
        VitrineController.criarTemplate(response)
        id = null;
    }

}
deletarProdutoAPI.addEventListener('click', deleteAPI)



