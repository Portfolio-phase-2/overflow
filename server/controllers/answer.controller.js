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
    }
}
