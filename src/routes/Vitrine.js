const express = require("express");
const router = express.Router();
const VitrineController = require("../controllers/Vitrine");

router.get('/product', (req, res) => {
    const productId = VitrineController.obterProdutos(req);
    if (productId === undefined) {
        res.status(404).json({})
    } else {
        res.status(200).json(productId)
    }
})