
class Carrinho {

    static listaCarrinho = document.getElementById('listaCarrinho');

    static DOM(produto) {

       const  {id, nome, preco, categoria, imagem} = produto;
      
       const criarLi        = document.createElement('li');
       const criarNome      = document.createElement('h2');
       const criarPreco     = document.createElement('p');
       const criarCategoria = document.createElement('p');
       const criarimagem    = document.createElement('img');
       const criarBtn       = document.createElement('button') 

       criarNome.innerText      = nome;
       criarPreco.innerText     = preco;
       criarCategoria.innerText = categoria;
       criarimagem.src          = imagem;


       criarLi.appendChild(criarimagem);
       criarLi.appendChild(criarNome);
       criarLi.appendChild(criarCategoria);
       criarLi.appendChild(criarPreco);
       criarLi.appendChild(criarBtn)
       this.listaCarrinho.appendChild(criarLi);

    }
}

export { Carrinho }