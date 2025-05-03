import express from 'express';
import connectDb from './database/connectDb.js';
import ProductsRoutes from './Routes/ProductsRoutes.js';

const app = express()
connectDb()


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use(express.json())
app.use('/products', ProductsRoutes)


app.listen(3000, ()=> {
    console.log("Server running at port 3000")
})