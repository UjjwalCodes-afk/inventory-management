import Elysia from "elysia";
import dotenv from 'dotenv';
import { connectDb } from "./config/db";
import { productRoutes } from "./Routes/product.routes";
import { categoryRoutes } from "./Routes/categoryRoutes";

dotenv.config();


const PORT = process.env.PORT as string;


const app = new Elysia()

.use(productRoutes)
.use(categoryRoutes)
.get('/', () =>  'Inventory System Running 🚀')



connectDb();

//okay
app.listen(PORT);

console.log(`🚀 Server is running at http://localhost:${PORT}`);

