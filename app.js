const cpuInformation = process.memoryUsage();

console.log(cpuInformation); // menampilkan informasi penggunaan CPU

/**
 * output:
 * 
 * {
    rss: 20070400,
    heapTotal: 5001216,
    heapUsed: 4190432,
    external: 325499,
    arrayBuffers: 11214
  }
 */


const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello, ${firstName} ${lastName}`);