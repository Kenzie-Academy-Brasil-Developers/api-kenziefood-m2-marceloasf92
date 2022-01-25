// import { VitrineModel } from "./src/models/Vitrine.js";
import { VitrineController } from "./src/controllers/Vitrine.js"
// import { db } from "./src/mock/db.js";
import {filtros} from "./src/models/Filtros.js"

const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(res => res.json())
    .then((res) => res)
    .catch((error) => error);

console.log(response);

VitrineController.criarTemplate(response)

const nav = document.getElementById("filtros")
const input = document.getElementById("input")
const pesquisa = document.getElementById("pesquisa")
// const campoPesquisa = document.querySelector('.campoPesquisa')


nav.addEventListener("click", (e) => {
    let click = e.target

    if(click.tagName === "BUTTON"){
        if(click.id === "Todos"){
            VitrineController.criarTemplate(response)

        }else if(click.id === "Panificadora"){
            VitrineController.criarTemplate(filtros.panificadora(response))

        }else if(click.id === "Frutas"){
            VitrineController.criarTemplate(filtros.frutas(response))
            
        }else if(click.id === "Bebidas"){
            VitrineController.criarTemplate(filtros.bebidas(response))
            
        }
    }
})

pesquisa.addEventListener("Click", (e) => {
    let valorBusca = input.value.toLowerCase()
    valorBusca = valorBusca[0].toUpperCase() + valorBusca.substr(1)
    VitrineController.criarTemplate(filtros.busca(valorBusca, response))
})
