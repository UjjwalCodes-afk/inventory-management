import type { Context } from "elysia";
import { Category, CategoryType } from "../Models/Category";
import { UpdateQuery } from "mongoose";
export const createCategory = async({body} : Context) => {
    const category = await Category.create(body);
    return category;
}

export const getCategories = async() => {
    const category = await Category.find({});
    return category;
}


export const getCategoryById = async({params} : Context) => {
    const category = await Category.findById(params.id);
    if(!category) return {message : 'Category not found'};
    return category;
}

export const updateCategory = async({params,body} : Context) => {
    const update = await Category.findByIdAndUpdate(params.id, body as UpdateQuery<CategoryType>, {new : true});
    return update;
}

export const deleteCategory = async({params} : Context) => {
    await Category.findByIdAndDelete(params.id);
    return { message: 'Category deleted successfully' };
}