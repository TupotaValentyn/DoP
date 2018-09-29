const mongoose = require("mongoose");

const question = mongoose.Schema({
    author: String,
    question: String,
    answers: [String],
    created: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model("questions", question);

module.exports = Question;