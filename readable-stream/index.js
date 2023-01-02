const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'articles.txt');

const readableStream = fs.createReadStream(filePath, {
  highWaterMark: 10
});

readableStream.on('readable', () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on('end', () => {
  console.log('Done');
});