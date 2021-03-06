import { VitrineController } from "../controllers/Vitrine.js"

class Filtros {

    static panificadora(data) {
        let produtosfiltrados = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].categoria === "Panificadora") {
                produtosfiltrados.push(data[i])
            }
        }
        return produtosfiltrados
    }

    static frutas(data) {
        let produtosfiltrados = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].categoria === "Frutas") {
                produtosfiltrados.push(data[i])
            }
        }

        return produtosfiltrados
    }

    static bebidas(data) {
        let produtosfiltrados = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].categoria === "Bebidas") {
                produtosfiltrados.push(data[i])
            }
        }

        return produtosfiltrados
    }

    static busca(valor, data) {
        
        console.log(valor);

        let produtosfiltrados = []

        data.map(function(e){
            if(e.categoria.toLowerCase().includes(valor)){
                return produtosfiltrados.push(e)
            }
            if(e.nome.toLowerCase().includes(valor)){
                return produtosfiltrados.push(e)
            }
        })

        if (produtosfiltrados.includes('undefined') || produtosfiltrados.length === 0) {
            VitrineController.criarTemplate(data) 
        }else{
            VitrineController.criarTemplate(produtosfiltrados)
        }

    }
}

export { Filtros }