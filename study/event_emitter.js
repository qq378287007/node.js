const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
});
eventEmitter.emit('start');

eventEmitter.on('start1', number => {
    console.log(`started ${number}`);
});
eventEmitter.emit('start1', 23);


eventEmitter.on('start2', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit('start2', 1, 100);

