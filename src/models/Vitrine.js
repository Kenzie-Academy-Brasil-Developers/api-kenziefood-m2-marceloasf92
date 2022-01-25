// import {db} from "../mock/db.js"
class VitrineModel {
    constructor({nome, preco, categoria, descricao, imagem}) {
        this.id = getMaxId() + 1;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    // getMaxId(){
    //     let maxId = 0;
    //     db.products.forEach(product => {
    //         if (product.id > maxId) {
    //             maxId = product.id
    //         }
    //     })
    //     return maxId
    // }

    // salvarProduto(){
    //     db.push(this)
    // }
    

    

}

export { VitrineModel }