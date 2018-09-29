import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:80');
function apiTest(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
export { apiTest };