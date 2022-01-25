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
        let produtosfiltrados = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].categoria === valor) {
                produtosfiltrados.push(data[i])
            } else if (data[i].nome == valor) {
                produtosfiltrados.push(data[i])
            }
        }

        return produtosfiltrados
    }
}

export { Filtros }