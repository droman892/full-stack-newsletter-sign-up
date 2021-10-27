const mongoose = require('mongoose');

const formSchema = {
    firstName: String,
    lastName: String
}

const Submission = mongoose.model('Submission', formSchema);

module.exports = Note;