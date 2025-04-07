import {Schema, model} from 'mongoose';


export interface CategoryType extends Document {
  name?: string;
  description?: string;

}

const CategorySchema = new Schema({
    name : {type : String, required : true},
    description : {type : String}
}, {timestamps : true})


export const Category = model<CategoryType>('Categories', CategorySchema);