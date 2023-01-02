// TODO 1
const { EventEmitter } = require('events');

const birthDayEventListener = (name) => {
  console.log(`Happy Birthday, ${name}`);
}

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on('birthday', birthDayEventListener);

// TODO 4
myEmitter.emit('birthday', "Yudistira");