const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
  // proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = // TODO 4

console.log(`Hai, ${yourName}`);