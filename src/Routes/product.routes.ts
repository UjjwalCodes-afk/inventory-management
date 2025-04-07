import Elysia from "elysia";
import { createProduct, deleteProducts, getProducts, updateProduct } from "../controllers/product.controller";
import { exportCsv, importCsv } from "../controllers/csv.controller";

export const productRoutes = new Elysia({prefix : '/products'})
.get('/get', getProducts)
.post('/create', createProduct)
.put('/update/:id', updateProduct)
.delete('/delete/:id', deleteProducts)

.post('/import', importCsv)
.get('/export', exportCsv)