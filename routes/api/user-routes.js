

const router = require('express').Router();
const {} = require('../../controllers/user-controller');

router
    .route('/');


router
    .route('/:userId');


router
    .route('/:userId/friends/friendId');



module.exports = router;