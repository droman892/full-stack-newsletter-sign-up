const mongoose = require('mongoose');

const formSchema = {
    firstName: String,
    lastName: String,
    phoneNum: Number,
    email: String,
    checkbox1: String,
    checkbox2: String,
    checkbox3: String,
    checkbox4: String,
    checkbox5: String,
    radioMarked: String,
    comments: String
}

const Submission = mongoose.model('Submission', formSchema);

module.exports = Submission;