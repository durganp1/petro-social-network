

const router = require('express').Router();
const {} = require('../../controllers/thought-controller');


router
    .route('/');


router
    .route('/:thoughtId');


router
    .route('/:thoughtId/reactions');


router
    .route('/:thoughtId/reactions/:reactionId');



module.exports = router;