import type { Context } from 'elysia';
import { UpdateQuery } from 'mongoose';
import { Product,ProductType } from '../Models/Product';

export const createProduct = async({body} : Context) => {
    const product = await Product.create(body);
    return product;
}

export const getProducts = async({query} : Context) => {
    const{page = 1, limit = 10, category,sort} = query;
    const filter : any = category ? {category} : {};
    const sortOption : any = sort ? {[sort] : 1} : {};

    const products = await Product.find(filter)
    .sort(sortOption)
    .skip((+page -1) * +limit)
    .limit(+limit);

    return products;
}

export const updateProduct = async({body,params} : Context) => {
    const updated = await Product.findByIdAndUpdate(params.id, body as UpdateQuery<ProductType>, {new : true});
    return updated;
}

export const deleteProducts = async({params} : Context) => {
    await Product.findByIdAndDelete(params.id);
    return { message: 'Deleted successfully' };
}