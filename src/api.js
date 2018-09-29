import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:80');
function apiTest(cb) {
  socket.on('questions without answer', timestamp => cb(null, timestamp));
  }

function valueData(data){
  socket.emit("add question", {author:data.author, question: data.question})
}

function getQuestion (){
  socket.emit('get question without answer')
}

export { apiTest, valueData, getQuestion };