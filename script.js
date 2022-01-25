// import { VitrineModel } from "./src/models/Vitrine.js";
import { VitrineController } from "./src/controllers/Vitrine.js"
// import { db } from "./src/mock/db.js";

const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(res => res.json())
    .then((res) => res)
    .catch((error) => error);

console.log(response);

VitrineController.criarTemplate(response)
