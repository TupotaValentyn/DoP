import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:80');
function apiTest(data) {
  socket.emit("add question",{data:data.author, guestion:data.question});
  }

function valueData(data ){
  socket.emit("add question", data)
}

export { apiTest, valueData };