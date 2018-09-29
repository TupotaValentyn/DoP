const mongoose = require("mongoose");

const answers = mongoose.Schema({
    answers:[String],
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"questions"
    }
});

const Answers = mongoose.model("answers", answers);

module.exports = Answers;