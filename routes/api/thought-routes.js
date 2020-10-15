

const router = require('express').Router();
const 
    { getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    addReaction,
    removeReaction,
    removeThought 
} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);


router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);


router
    .route('/:thoughtId/reactions')
    .post(addReaction);


router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction);



module.exports = router;