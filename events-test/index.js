const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// 1# fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
}

// #2 fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedHandle = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
}

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', onCoffeeOrderedHandle);

// memicu event 'coffee-order' terjadi
myEventEmitter.emit('coffee-order', { name: "Tubruk", price: 25000 });