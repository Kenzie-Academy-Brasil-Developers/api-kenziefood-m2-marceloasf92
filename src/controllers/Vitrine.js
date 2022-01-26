class VitrineController {


    static criarTemplate(data) {
        console.log(data);
        const vitrinePrincipal = document.querySelector('.vitrinePrincipal')
        vitrinePrincipal.innerHTML = ""

        data.forEach(({ id, nome, preco, categoria, descricao, imagem }) => {

            const listaProdutos = document.createElement('ul')
            listaProdutos.id = 'listaProdutos';
            vitrinePrincipal.appendChild(listaProdutos)

            const li = document.createElement("li")

            li.innerHTML = `
            <figure>
                <img src="${imagem}" alt="${nome}">
                <figcaption class="${categoria}">${categoria}</figcaption>
            </figure>
            <h2>${nome}</h2>
            <p>${descricao}</p>
            <div>
                <span>R$ ${preco.toFixed(2)}</span>
                <button id=${id} class=adicionarProduto></button>
                <button id=${id} class=deletarProdutoAPI></button>
                <button id=${id} class=editarProdutoAPI></button>
            </div>
                        `


            listaProdutos.appendChild(li)




        });



    }
}

export { VitrineController }