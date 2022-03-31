import { VitrineController } from "./controllers/Vitrine.js";
import { Filtros } from "./models/Filtros.js";
import { WriteController } from "./controllers/WriteController.js";
import { CarrinhoControl } from "./controllers/Carrinho.js";

const vitrinePrincipal = document.querySelector(".vitrinePrincipal");

// console.log(response);

// const response = await fetch(
//   "https://kenzie-food-api.herokuapp.com/my/product",
//   {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
//       "Content-Type": "application/json",
//     },
//   }
// )
//   .then((res) => res.json())
//   .then((res) => res)
//   .catch((error) => error);

async function getAPI() {
  const response = await fetch(`https://kenzie-food-api.herokuapp.com/products`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => error);
  console.log(response);
  return response;
}

const response = await getAPI();

VitrineController.criarTemplate(response);

const nav = document.getElementById("filtros");
const input = document.getElementById("input");
const campoPesquisa = document.querySelector(".campoPesquisa");

nav.addEventListener("click", async (e) => {
  let click = e.target;

  if (click.tagName === "BUTTON") {
    const response = await getAPI();
    if (click.id === "Todos") {
      VitrineController.criarTemplate(response);
    } else if (click.id === "Panificadora") {
      VitrineController.criarTemplate(Filtros.panificadora(response));
    } else if (click.id === "Frutas") {
      VitrineController.criarTemplate(Filtros.frutas(response));
    } else if (click.id === "Bebidas") {
      VitrineController.criarTemplate(Filtros.bebidas(response));
    }
  }
});

campoPesquisa.addEventListener("keyup", async (e) => {
  let valorBusca = input.value.toLowerCase().trim();

  if (valorBusca === "") {
    const response = await getAPI();
    VitrineController.criarTemplate(response);
  }
  if (e.key.length === 1) {
    const response = await getAPI();
    Filtros.busca(valorBusca, response);
  }
});

CarrinhoControl.add(response);

CarrinhoControl.remover();

const addProduto = document.getElementById("addProduto");
const boxPopUp = document.getElementById("boxPopUp");
const fecharPopUp = document.getElementById("fechar");
const submit = document.getElementById("submit");
const formProduto = document.getElementById("formProduto");

addProduto.addEventListener("click", () => {
  boxPopUp.classList.add("mostrar");
});
fecharPopUp.addEventListener("click", () => {
  boxPopUp.classList.remove("mostrar");
});

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  let data = {};

  const elements = formProduto.elements;
  console.log(elements);

  for (let i = 0; i < elements.length; i++) {
    let item = elements[i];
    if (item.name !== "") {
      data[item.name] = item.value;
      item = "";
    }
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].value = "";
  }

  await postAPI(data);
  const response = await getAPI();
  VitrineController.criarTemplate(response);
});

const edicaoButton = document.querySelector(".editarProdutoAPI");
const boxEditar = document.getElementById("boxEditar");
const fecharbox = document.getElementById("fecharEdicao");
const submitEdicao = document.getElementById("submitEdicao");
const formEdicao = document.getElementById("formEdicao");
let idProduto;

vitrinePrincipal.addEventListener("click", (e) => {
  if (e.target.classList.contains("editarProdutoAPI")) {
    boxEditar.classList.add("mostrar");

    idProduto = e.target.id;
  }
});
fecharbox.addEventListener("click", () => {
  boxEditar.classList.remove("mostrar");
});

async function postAPI(data) {
  const response = await fetch(
    "https://kenzie-food-api.herokuapp.com/my/product",
    {
      method: "post",
      headers: {
        Authorization:
          "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => error);
  return response;
}

async function deleteAPI(e) {
  if (e.target.classList.contains("deletarProdutoAPI")) {
    let id = Number(e.target.id);
    await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, {
      method: "delete",
      headers: {
        Authorization:
          "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);

    const response = await getAPI();
    VitrineController.criarTemplate(response);
  }
}
vitrinePrincipal.addEventListener("click", deleteAPI);

submitEdicao.addEventListener("click", async (e) => {
  e.preventDefault();

  let data = {};
  let elements = formEdicao.elements;

  for (let i = 0; i < elements.length; i++) {
    let item = elements[i];
    if (item.name !== "") {
      if (!!item.value) {
        data[item.name] = item.value;
      }
    }
  }

  if (Object.values(data).length !== 0) {
    patchAPI(data);
    boxEditar.classList.remove("mostrar");
    for (let i = 0; i < elements.length - 1; i++) {
      elements[i].value = "";
    }
  }
});

async function patchAPI(data) {
  await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${idProduto}`, {
    method: "PATCH",
    headers: {
      Authorization:
        "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY0MzEzMjQ5MywiZXhwIjoxNjQzOTk2NDkzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.H13WaX2GhKvVReo-_fRzF81hNHUYx2Ed34cfIOHR1mA",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => error);

  const response = await getAPI();
  VitrineController.criarTemplate(response);
}

WriteController.execute();

CarrinhoControl.iniciarCarrinho();
