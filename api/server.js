<<<<<<< HEAD
const Question = require("./DoP/api/models/Question");
=======
const Question = require("./models/Question");
>>>>>>> 9d39e1cdae13a61294845cdeb3218b93914ba09e

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