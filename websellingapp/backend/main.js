import { connectDB } from './db/product.connect.js';
import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';
import path from 'path'

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products', productRoutes)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`);
})