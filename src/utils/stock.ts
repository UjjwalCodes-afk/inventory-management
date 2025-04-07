import { Product } from "../Models/Product"

export const updateStock = async(productId : string, quantity : number) => {
    const product = await Product.findById(productId);
    if (!product || product.stock === undefined || product.stock < quantity) {
        throw new Error('Out of stock');
    }
    product.stock -= quantity;
    await product.save();
    return product;
}