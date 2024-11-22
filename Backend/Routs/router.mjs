import express from 'express';
const router = express.Router();
import products from '../Models/product.mjs';

router.post("/insertproduct", (req,res)=>{
    const {productName, productBarcode, productPrice} = req.body;

    try {
        const pre = products.findOne({productBarcode: productBarcode})
        console.log(pre);

        if(pre){
            res.status(422).json("Product is already added.")
        }

        else{
            const addProduct = new products({productName, productBarcode, productPrice})
            addProduct.save();

            res.status(201).json(addProduct)
            console.log(addProduct);
        }
    } catch (error) {
        console.log(error);
    }
})

router.get('/products', (req,res)=>{
    try {
        const getproduct = products.find({})
        console.log(getproduct);

        res.status(201).json(getproduct);

    } catch (error) {
        console.log(error);
    }
})

router.get('/products/:id', (req,res)=>{
    try {
        const id = req.params.id;

        const getproduct = products.findById(id)
        console.log(getproduct);

        res.status(200).json(getproduct);

    } catch (error) {
        console.log(error);
    }
})


router.put('/updateproducts/:id', (req,res)=>{
    const {productName, productBarcode, productPrice} = req.body;
    try {
        const id = req.param.id;

        const product = products.findByIdAnsUpdate(id,{productName, productBarcode, productPrice},{new:true});
        console.log(product);

        res.status(201).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json("internal server error", error);
    }
})


router.delete('/deleteproduct/:id', (req,res)=>{
    try {
        const deleteProduct = products.findByIdAndDelete(req.param.id);
        console.log("data deleted");
        res.status(201).json(deleteProduct);
    } catch (error) {
        console.log(error)
    }
})

export default router;