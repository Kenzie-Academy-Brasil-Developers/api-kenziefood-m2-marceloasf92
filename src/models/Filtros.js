import { db } from "../mock/db.js";

class filtros{

    static panificadora(){
    let produtosfiltrados = []
        for(let i = 0; i < db.length; i++){
            if(db[i].categoria === "Panificadora"){
                produtosfiltrados.push(db[i])
            }
        }
        return produtosfiltrados
    }

    static frutas(){
        let produtosfiltrados = []
            for(let i = 0; i < db.length; i++){
                if(db[i].categoria === "Frutas"){
                    produtosfiltrados.push(db[i])
                }
            }

            return produtosfiltrados
        }

    static bebidas(){
        let produtosfiltrados = []
            for(let i = 0; i < db.length; i++){
                if(db[i].categoria === "Bebidas"){
                    produtosfiltrados.push(db[i])
                }
            }

            return produtosfiltrados
        }

    static busca(valor){
        let produtosfiltrados = []
        console.log(valor)
        for(let i = 0; i < db.length; i++){
            if(db[i].categoria === valor){
                produtosfiltrados.push(db[i])
            }else if(db[i].nome == valor){
                produtosfiltrados.push(db[i])
            }
        }

        return produtosfiltrados
    }
}

export {filtros}