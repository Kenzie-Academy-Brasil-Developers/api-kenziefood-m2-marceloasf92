class Carrinho {

    static listaCarrinho = document.getElementById('listaCarrinho');

    static criarCarrinho(produto) {

        Carrinho.listaCarrinho.style.display = 'block'

        const { id, nome, preco, categoria, imagem } = produto;

        const criarLi = document.createElement('li');

        const div = document.createElement('div')
        const criarNome = document.createElement('h2');
        const criarPreco = document.createElement('p');
        const criarCategoria = document.createElement('p');
        div.appendChild(criarNome);
        div.appendChild(criarCategoria);
        div.appendChild(criarPreco);


        const criarimagem = document.createElement('img');
        const criarBtn = document.createElement('button')
        criarBtn.classList.add('removerProduto')
        criarBtn.id = id

        criarNome.innerText = nome;
        criarPreco.innerText = `R$ ${preco.toFixed(2)}`;
        criarCategoria.innerText = categoria;
        criarimagem.src = imagem;

        criarBtn.className = 'btnCarrinho'
        criarCategoria.className = 'categoriaCarrinho'
        criarPreco.className = 'precoCarrinho'

        criarLi.appendChild(criarimagem);
        criarLi.appendChild(div);
        criarLi.appendChild(criarBtn)
        Carrinho.listaCarrinho.appendChild(criarLi);

    }
}

export { Carrinho }