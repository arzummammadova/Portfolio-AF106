import express from 'express';
import 'dotenv/config';
import './src/db/dbConnection.js';
import productRouter from './src/routes/productRoutes.js';
import cors from 'cors';


const port = process.env.PORT || 5001;
const app = express();

app.use(cors())
app.use(express.json());
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    return res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
