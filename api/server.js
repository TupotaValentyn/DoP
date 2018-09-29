const Question = require("./models/Question");

const mongoose = require("mongoose");

const app = require("http").createServer();

const Faq = require("./models/Faq");

const io = require("socket.io")(app);

app.listen(80);

mongoose.connect("mongodb://Valik:qwer1234@ds052978.mlab.com:52978/dop",{ useNewUrlParser: true }, (err)=>{
    if (err) throw err;
    console.log("Successfully connected");
});

io.on("connection", (socket)=>{
    console.log("Successfully client connected");

    socket.on("get question without answer", (err, data)=>{
        if (err) throw err;
        sendQuestionsWithoutAnswer(socket);
    })

    socket.on("get question of this user", (err, data)=>{
        if (err) throw err;
        sendQuestionOfThisUser(socket, data.author)
    })

    socket.on("add question", (err, data)=>{
        if (err) throw err;
        addQuestion(data);
    })

    socket.on("add answer", (err, data)=>{
        if (err) throw err;
        addAnswer(data);
    })

    socket.on("get faq", (err, data)=>{
        if (err) throw err;
        sendFaq(socket);
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
    showNotification(socket, data.author);
};

function sendQuestionsWithoutAnswer(socket){
    Question.find({answers:[]}).exec((err,docs)=>{
        if (err) throw err;
        console.log(docs)
        socket.emit("questions without answer", {data:docs},(err)=>{
            console.log("Successfully send question without answer")
        })

    })
};
function sendQuestionOfThisUser(socket, author){
    Question.find({author:author}).exec((err, docs)=>{
        if(err) throw err;
        console.log(docs)
        socket.emit("questions of this user", {data:docs})
    })
}

function sendFaq(socket){
    Faq.find((err, docs)=>{
        console.log(docs);
        if (err) return console.log(err);
        socket.emit("faq", {data:docs})
    })
}

function showNotification(socket, author){
    socket.emit("show notification", {author:author})
}

let data = {
    author: "Valik",
    question: "You help me?",
    answers: []
}
 // function search(phrase){
 // Question.find(
 //         { $text : { $search : phrase } },
 //         { score : { $meta: "textScore" } }
 //     )
 //         .sort({ score : { $meta : 'textScore' } })
 //         .exec(function(err, results) {
 //             console.log(results)
 //         });
 // }
 //
 // search("you me");
