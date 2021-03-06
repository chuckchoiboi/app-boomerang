const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    authorUsername: {
        type: String,
    },
    questionTitle: {
        type: String,
        required: true,
        maxLength: 40,
    },
    questionBody: {
        type: String,
        required: true,
        maxLength: 200
    },
    topic: {
        type: [String],
        enum: ['education', 'game', 'entertainment', 'art', 'lifestyle', 'health', 'politics', 'finance', 'travel', 'sports', 'shopping', 'food']
    },
    answers: {
        type: [mongoose.Types.ObjectId],
        ref: 'Answer'
    },
    numOfAnswers: {
        type: Number,
        default: 0
    },
    answerSelected: {
        type: Boolean,
        default: false,
    }

}, {
    timestamps: true
}); 

const Question = mongoose.model( 'Question', questionSchema );

module.exports = Question;