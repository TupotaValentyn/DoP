const mongoose = require("mongoose");


const faq = mongoose.Schema({
    question: String,
    answer: String
    });

const Faq = mongoose.model("faqs", faq);

module.exports = Faq;