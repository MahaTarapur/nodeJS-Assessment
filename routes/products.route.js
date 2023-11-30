const express = require('express');
const {
    addProduct,
    getProducts,
    getProduct,
    deleteProduct
} = require('../controllers/index');
    
let router=express.Router();


router.post("/products",addProduct);
router.get("/products",getProducts);
router.get("/products/:id",getProduct);
router.delete("/products/:id",deleteProduct);

module.exports=router