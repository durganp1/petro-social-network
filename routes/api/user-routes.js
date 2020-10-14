

const router = require('express').Router();
const { createUser } = require('../../controllers/user-controller');

router
    .route('/').post(createUser);


router
    .route('/:userId');


router
    .route('/:userId/friends/friendId');



module.exports = router;