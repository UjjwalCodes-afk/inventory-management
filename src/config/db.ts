import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URL = process.env.MONGO_URL as string;
export const connectDb = async() => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Database connected')
    } catch (error) {
        console.log(error);        
    }
}