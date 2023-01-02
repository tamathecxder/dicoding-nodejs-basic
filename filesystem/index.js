// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const fileReadCallBack = (error, data) => {
  if (error) {
    console.log('Gagal untuk memuat file!');
    return;
  }

  console.log(data);
}

const filePath = path.resolve(__dirname, 'notes.txt');

// Cara Asynchronous
fs.readFile(filePath, 'utf-8', fileReadCallBack); 

// Cara Synchronous
const data = fs.readFileSync('./filesystem/notes.txt', 'utf-8');
console.log(data);