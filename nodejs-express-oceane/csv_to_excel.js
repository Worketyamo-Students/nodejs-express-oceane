// import fs from 'fs'
// const readStream = fs.createReadStream('database.csv');
// const writeStream = fs.createWriteStream('database.xlsx');
// readStream.pipe(writeStream);
const path = require('path');
const {convert} = require('@aternus/csv-to-xlsx');
let source = path.join(__dirname, 'database.csv');
let destination = path.join(__dirname, 'databases.xlsx');
try {
    convert(source, destination);
    console.log('Conversion completed successfully');
}catch (error) {
    console.error('Error during conversion:', error);
}
//convertir un fchier csv en xlsx
// const fs = require('fs');
// const csv = require('csv-parser');
// const xlsx = require('xlsx');    
// const workbook = xlsx.utils.book_new();
// const csvFilePath = 'database.csv';  