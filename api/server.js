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
    sendQuestionsWithoutAnswer(socket);
    console.log("Successfully client connected");

    socket.on("get question without answer", ()=>{
        sendQuestionsWithoutAnswer(socket);
    })

    socket.on("get question of this user", (data)=>{
        sendQuestionOfThisUser(socket, data.author)
    })

    socket.on("add question", (data)=>{
        console.log("Прийшло");
        console.log(data.author);
        if(data.author != undefined) {
            addQuestion(data);
        }
    })

    socket.on("add answer", (data)=>{
        addAnswer(data);
    })

    socket.on("get faq", ()=>{
        sendFaq(socket);
    })
})


function addQuestion(data){
    let oneQuestion = new Question({
        author: data.author,
        question: data.question,
        answers:[]
    });

    oneQuestion.save(()=>{
        console.log("")
    });
};

function addAnswer(data){
    Question.findById(data.id,(err,docs)=>{
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
        console.log(docs)
        socket.emit("questions without answer", {data:docs},(err)=>{
            console.log("Successfully send question without answer")
        })

    })
};
function sendQuestionOfThisUser(socket, author){
    Question.find({author:author}).exec((err,docs)=>{
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
Question.find({answers:[]}).exec((err,docs)=>{
    console.log(docs)
    })