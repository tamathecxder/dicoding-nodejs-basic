const fs = require('fs');
const path = require('path');

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writeable stream
 */

const fileInputPath = path.resolve(__dirname, 'input.txt');

const readableStream = fs.createReadStream(fileInputPath, {
  highWaterMark: 15
});

const writeableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
  try {
    const text = `${readableStream.read()}`;

    writeableStream.write(text + '\n');
  } catch (error) {
    console.log(error);
  }
});
