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

function getFAQ () {
  socket.emit("get faq")
}

function faqResult (cb) {
  socket.on('faq', timestamp => cb(null, timestamp));
}

function sendAnswer(data){
  socket.emit('add answer', {id: data.id, answer: data.answer})
}

function userQuestion() {
  socket.emit('user question', {author: 'valik'})
}

function finalResult (cb) {
  socket.on('user question', timestamp => cb(null, timestamp))
}

export { apiTest, valueData, getQuestion, getFAQ, faqResult,sendAnswer, finalResult, userQuestion};