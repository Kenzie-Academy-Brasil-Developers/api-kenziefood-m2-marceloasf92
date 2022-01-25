// const db = require("../mock/db.json")

class VitrineController {

    // static obterProdutos() {
    //     const db = Helpers.readData();
    //     return db;
    // }

    static criarTemplate(data) {

        const vitrinePrincipal = document.querySelector('.vitrinePrincipal')
              vitrinePrincipal.innerHTML = ""

        const listaProdutos = document.createElement('ul')
        listaProdutos.id = 'listaProdutos';
        vitrinePrincipal.appendChild(listaProdutos)

        data.forEach(({ id, nome, preco, categoria, descricao, imagem }) => {
            const li = document.createElement("li")

            li.innerHTML = `
            <figure>
                <img src="${imagem}" alt="${nome}">
                <figcaption>${categoria}</figcaption>
            </figure>
            <h2>${nome}</h2>
            <p>${descricao}</p>
            <div>
                <span>${preco}</span>
                <button id=${id}></button>
            </div>
        `

            vitrinePrincipal.appendChild(li)
        });



    }
}

export { VitrineController }