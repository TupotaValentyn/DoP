const mongoose = require("mongoose");


const faq = mongoose.Schema({
    question: String,
    answers: String
    }
});

const Faq = mongoose.model("faq", faq);

module.exports = Faq;