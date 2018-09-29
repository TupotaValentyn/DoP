const Question = require("./models/Question");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dop",{ useNewUrlParser: true });

let oneQuestion = new Question({
    author: "Oleksiy",
    question: "Some question this"
});

oneQuestion.save((err)=>{
    if (err) throw err;
    console.log("Successfully saved")
});