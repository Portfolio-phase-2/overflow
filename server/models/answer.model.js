const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('./question.model')

const answerSchema = new Schema({
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    content: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    votes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    unvotes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true
});

answerSchema.pre('save', function (next) {
    Question.updateOne(
        {$push: {answers: this._id}}
    )
    .then(() => {
        next()
    })
    .catch(err => console.log(err))
})

answerSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: new Date()
        }
    })
})

answerSchema.pre('remove', function () {
    Question.updateOne(
        {$pull: {answers: this._id}}
    )
    .then(() => {
        next()
    })
    .catch(err => console.log(err))
})

const Question = mongoose.model('Question', answerSchema);
module.exports = Question

// By Asrul Harahap - 2018