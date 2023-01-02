const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, "output.txt");

const writeableStream = fs.createWriteStream(filePath);

writeableStream.write("=== START ===\n");
writeableStream.write("Ini merupakan teks baris pertama\n");
writeableStream.write("Ini merupakan teks baris kedua\n");
writeableStream.end("=== END ===");