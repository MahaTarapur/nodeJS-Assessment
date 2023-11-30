const Product = require('../models/products');

// ! CREATING/ADDING PRODUCT
let addProduct = async (req, res, next) => {
    try {
        let product = await Product.create(req.body);
        res.status(201).json({ error: "false", message: "Product added Successfully" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "true", message: err.errors.id.message })

    }
}

// ! FETCHING PRODUCT BASED ON ID
let getProduct = async (req, res, next) => {
    let { id } = req.params
    try {
        let product = await Product.findOne({id});
        if (!product) {
           return res.status(404).json({ error: "true", message: `No Product Found with id ${id}` })

        }
        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json({ error: "true", message: `Product with given id is not found` })
    }
}

// ! FETCHING ALL PRODUCTS WITH PAGINATION ADN FILTER
let getProducts = async (req, res, next) => {
    try {
        let{page,pagesize,productName,category}=req.query
        let queryObject={}
        if(productName)
        {
            queryObject.productName=productName
        }
        if(category)
        {
            queryObject.category=category
        }
        let allproducts=Product.find(queryObject)
        if(!page && !pagesize)
        {
            console.log("hi");
            allproducts=await allproducts
            return res.status(200).json({count:allproducts.length,error:false,
            message:"Products fetched successfully",data:allproducts})
        }
        let newPage=page || 1;
        let newpageSize=pagesize || 4;
        let newskip=(newPage-1)*newpageSize

        allproducts=await allproducts.skip(newskip).limit(newpageSize)
        res.status(200).json({count:allproducts.length,error:false,
        message:"Products fetched successfully",data:allproducts})

        let products = await allproducts
        res.status(200).json(products)
    }
    catch (err) {
        console.log(err)
    }
}


// ! DELETING PRODUCT BASED ON ID
let deleteProduct = async (req, res, next) => {
    let { id } = req.params
    try {
        let deletedProduct = await Product.findOneAndDelete({id});
        if (!deletedProduct) {
            return res.status(400).json({ error: "true", message: `No Product Found with id ${id}` })
        }
        res.status(201).json({ error: "false", message: `Product ${deletedProduct.id} deleted Successfully` })
    }
    catch (err) {
        console.log(err.message)
        res.status(400).json({ error: "true", message: `Product with given id is not found` })
    }
}

module.exports = {
    addProduct,
    getProducts,
    getProduct,
    deleteProduct
}