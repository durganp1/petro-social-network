

const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


router
    .route('/:userId/friends/friendId');



module.exports = router;