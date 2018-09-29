const Question = require("./models/Question");

const mongoose = require("mongoose");

const app = require("http").createServer();

const io = require("socket.io")(app);

app.listen(80);

mongoose.connect("mongodb://localhost/dop",{ useNewUrlParser: true }, (err)=>{
    if (err) throw err;
    console.log("Successfully connected");
});

io.on("connection", (socket)=>{
    socket.on("get question without answer", (err, data)=>{
        if (err) throw err;
        console.log("Successfuly client connected");
        sendQuestionsWithoutAnswer(socket);
    })
})


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
        });
    });
};

function sendQuestionsWithoutAnswer(socket){
    Question.find({answers:[]}).exec((err,docs)=>{
        if (err) throw err;
        socket.emit("questions without answer", {data:docs},(err)=>{
            if (err) throw err;
            console.log("Successfully send question without answer")
        })

    })
};

// let data = {
//     author: "Valik",
//     question: "Why i so fagot?"
// }
// addQuestion(data);


