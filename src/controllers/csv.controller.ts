import fs from 'fs';
import csv from 'csv-parser';
import {Parser} from 'json2csv';
import { Product } from '../Models/Product';

export const importCsv = async({body} : any) => {
    const results : any = [];

    return new Promise((resolve,reject) => {
        fs.createReadStream(body.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async() => {
            await Product.insertMany(results);
            resolve({message : 'Csv imported successfully'})
        })
    })
}

export const exportCsv = async() => {
    const products = await Product.find({}).lean();
    const parser = new Parser();
    const csv = parser.parse(products);
    fs.writeFileSync('products.csv', csv);
    return {message  : 'Exported as csv file'}
}