const mongoose = require("mongoose");

const question = mongoose.Schema({
    author: String,
    question: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model("Questions", question);

module.exports = Question;