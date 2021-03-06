const express = require('express')
const router = express.Router()

// middleware added to get requests to return oauth authentication to referrer
const returnPath = require('../middleware/returnPath')
const authRequired = require('../middleware/authRequired')

const ctrls = require('../controllers')

// http://localhost:3000/questions
router.post('/add', authRequired, ctrls.questions.addQuestion)
router.get('/show/:id', returnPath, ctrls.questions.showQuestion)
router.post('/answers/add/:id', authRequired, ctrls.questions.addAnswer)
router.put('/answers/select/update/:id', ctrls.questions.selectAnswer)
router.delete('/delete/:id', authRequired, ctrls.questions.deleteQuestion)
router.delete('/answers/delete/:id', authRequired, ctrls.questions.deleteAnswer)




module.exports = router