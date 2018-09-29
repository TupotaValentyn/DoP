import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:80');
function apiTest(cb) {
  socket.emit("get question without answer");
  socket.on("questions without answer", data=>cb(null, data)
  )}
export { apiTest };