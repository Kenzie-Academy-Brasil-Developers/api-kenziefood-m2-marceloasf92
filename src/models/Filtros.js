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

        valor = valor.toLowerCase()
        valor = valor[0].toUpperCase() + valor.substr(1).trim()

        let produtosfiltrados = []


        let result = data.find(e => e.categoria.includes(valor))
        produtosfiltrados.push(result)


        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].categoria === valor) {
        //         produtosfiltrados.push(data[i])
        //     } else if (data[i].nome == valor) {
        //         produtosfiltrados.push(data[i])
        //     }
        // }


            VitrineController.criarTemplate(produtosfiltrados)
            produtosfiltrados = []
    }
}

export { Filtros }