import { Router } from "express";
import { Product } from "../database/collections.js";


const router = Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        res.send(product);

    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const product = await Product.create(data);
        res.send({message: "Product created successfully", data});
        
    } catch (error) {
        res.status(500).send(error);
    }
    
})


router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = await Product.findByIdAndUpdate(id, data);
        res.send({message: "Product updated successfully", data});
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        res.send({message: "Product deleted successfully", product});
    } catch (error) {
        res.status(500).send(error);
    }
})


export default router;