import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    productName:{
        type : String,
        require: true
    },
    productBarcode:{
        type: Number,
        require: true
    },
    productPrice:{
        type: Number,
        require: true
    }
})

const products = mongoose.model("products", ProductSchema);
export default products;