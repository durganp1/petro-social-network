

const { User, Thought } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.userId })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    createUser(req, res) {
        User.create(req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId}, req.body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with that id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
};


module.exports = userController;