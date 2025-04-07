import Elysia from "elysia";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/categoryController";

export const categoryRoutes = new Elysia({prefix : '/categories'})
.post('/create', createCategory)
.get('/get', getCategories)
.get('/:id', getCategoryById)
.put('/update/:id',updateCategory)
.delete('/delete/:id', deleteCategory)