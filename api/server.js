const Question = require("./models/Question");
const Answer = require("./models/Answers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dop",{ useNewUrlParser: true }, (err)=>{
    if (err) throw err;
    console.log("Successfully connected");
});

function addQuestion(data){
    let oneQuestion = new Question({
        author: data.author,
        question: data.question,
        answers:[]
    });

    oneQuestion.save((err)=>{
        if (err) throw err;
        console.log("")
    });
};

function addAnswer(data){
    Question.findById(data.id,(err, docs)=>{
        if(err) throw err;
        let answers = docs.answers;
        answers.push(data.answer);
        Question.findByIdAndUpdate(data.id, {answers: answers}, (err)=>{
            if (err) throw err;
            console.log('successfully updated');
        })
    })
}
let data = {
    id: "5baf414df61f5204dce711da",
    answer: "I come to talk"
};
addAnswer(data);