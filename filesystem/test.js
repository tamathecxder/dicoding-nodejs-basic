const fs = require('fs');

const fileReadCallBack = (error, data) => {
  if (error) {
    console.log("Gagal membaca data.");
    return;
  }

  console.log(data);
};

fs.readFile('README.md', "utf-8", fileReadCallBack);