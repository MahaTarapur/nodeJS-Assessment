const mongoose = require('mongoose');

let productSchema=new mongoose.Schema({
    id:{
        type:String,
        required:{value:true,message:"id Required"}
    },
    productName:{
        type:String,
        required:{value:true,message:"Product Name Required"}
    },
    productCategory:{
        type:String,
        required:{value:true,message:"Product Category Required"}
    },
    imgUrl:{
        type:String,
        required:{value:true,message:"Image url Required"}
    },
    productDescription:{
        type:String,
        required:{value:true,message:"Product Description Required"}
    },})


module.exports=mongoose.model("Product",productSchema)