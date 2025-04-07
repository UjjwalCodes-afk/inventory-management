// product.model.ts
import { Schema, model, Document } from 'mongoose';

export interface ProductType extends Document {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: Schema.Types.ObjectId;
}

const productSchema = new Schema<ProductType>({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

export const Product = model<ProductType>('Product', productSchema);
