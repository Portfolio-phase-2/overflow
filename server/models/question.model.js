const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const User      = require('./user.model')

const questionSchema = new Schema({
    title: String,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }],
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
})

questionSchema.pre('save', function (next) {
    User.updateOne(
        {$push: {questions: this._id}}
    )
    .then(() => {
        next()
    })
    .catch(err => console.log(err))
})

questionSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: new Date()
        }
    })
})

questionSchema.pre('remove', function () {
    User.updateOne(
        {$pull: {questions: this._id}}
    )
    .then(() => {
        next()
    })
    .catch(err => console.log(err))
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question

// By Asrul Harahap - 2018