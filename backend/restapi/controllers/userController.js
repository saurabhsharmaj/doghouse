'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.users = function(req, res) {
    User.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.add = function(req, res) {
    var new_user = new User(req.body);
    console.log(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.login = function(req, res) {
    var user = new User(req.body);
    User.find({ email: user.email, password: user.password }, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.getuser = function(req, res) {
    console.log("Get User : " + req.query.userId + " ## " + mongoose.Types.ObjectId(req.query.userId));
    User.find({ "_id": mongoose.Types.ObjectId(req.query.userId) }, function(err, user) {
        if (err)
            res.send(err);
        console.log(user);
        res.json(user);
    });
};

exports.update = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.userId);
    User.findOneAndUpdate({ _id: id }, req.body, { new: true }, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.userId);
    console.log("#DELETE# user id :" + id);
    User.remove({
        _id: id
    }, function(err, user) {
        if (err)
            res.send(err);
        console.log("#delete# user:" + user);
        res.json({ message: 'User deleted successfully' });
    });
};