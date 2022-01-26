class Carrinho {

    static listaCarrinho = document.getElementById('listaCarrinho');

    static criarCarrinho(produto) {

        listaCarrinho.style.display = 'block'
        //VERIFICAR ESSA FUNCIONABILIDADE DO DISPLAY

       const  {id, nome, preco, categoria, imagem} = produto;
      
       const criarLi        = document.createElement('li');

       const div = document.createElement('div')
       const criarNome      = document.createElement('h2');
       const criarPreco     = document.createElement('p');
       const criarCategoria = document.createElement('p');
       div.appendChild(criarNome);
       div.appendChild(criarCategoria);
       div.appendChild(criarPreco);


       const criarimagem    = document.createElement('img');
       const criarBtn       = document.createElement('button') 
       criarBtn.classList.add('removerProduto')

       criarNome.innerText      = nome;
       criarPreco.innerText     = preco;
       criarCategoria.innerText = categoria;
       criarimagem.src          = imagem;


       criarLi.appendChild(criarimagem);
       criarLi.appendChild(div);
       criarLi.appendChild(criarBtn)
       this.listaCarrinho.appendChild(criarLi);

    }
}

export { Carrinho }