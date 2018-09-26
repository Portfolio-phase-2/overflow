const Answer = require('../models/answer.model')

module.exports = {

    createOne: (req, res) => {
        let newAnswer = {
            answer: req.body.answer,
            question: req.params.question,
            owner: req.decoded._id,
        }
        let answer = new Answer(newAnswer)
        answer.save()
        .then( response => res.status(201).json(response))
        .catch( err => res.status(500).json(err))
    },

    deleteById: (req, res) => {
        Answer.findById({_id: req.params.id, owner: req.decoded._id})
        .then(result => {
            let answer = new Answer({_id: result._id})
            answer.remove()
            .then( response => res.status(200).json(response))
            .catch( err => res.status(500).json(err))
        })
        .catch( err => res.status(500).json(err))
    },
    upvote: (req, res) => {
        let id = req.params.id
        Answer
        .updateOne({_id:id}, { $push: { vote: req.decoded._id }, $pull: { unvote: req.decoded._id } })
        .then( response => {
            res.status(200).json({
                err: false,
                "message": "Success for vote a Answer"
            })
        })
        .catch( err => {
            res.status(500).json({
                err: true,
                "message": err.message,
            })
        })  
    },

    downvote: (req, res) => {
        let id = req.params.id
        Answer
        .updateOne({_id:id}, { $push: { unvote: req.decoded._id }, $pull: { vote: req.decoded._id } })
        .then( response => {
            res.status(200).json({
                err: false,
                "message": "Success for unvote a Answer"
            })
        })
        .catch( err => {
            res.status(500).json({
                err: true,
                "message": err.message,
            })
        })  
    },
}
