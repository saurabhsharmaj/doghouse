'use strict';

var mongoose = require('mongoose'),
    Group = mongoose.model('Groups');

exports.groups = function(req, res) {
    Group.find({}, function(err, group) {
        if (err)
            res.send(err);
        res.json(group);
    });
};

exports.add = function(req, res) {
    var new_group = new Group(req.body);
    console.log(req.body);
    new_group.save(function(err, group) {
        if (err)
            res.send(err);
        res.json(group);
    });
};

exports.getgroup = function(req, res) {
    Group.findById(mongoose.Types.ObjectId(req.query.groupId), function(err, group) {
        if (err)
            res.send(err);
        res.json(group);
    });
};

exports.update = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.groupId);
    Group.findOneAndUpdate({ _id: id }, req.body, { new: true }, function(err, group) {
        if (err)
            res.send(err);
        res.json(group);
    });
};

exports.delete = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.groupId);
    Group.remove({
        _id: id
    }, function(err, group) {
        if (err)
            res.send(err);
        res.json({ message: 'group deleted successfully' });
    });
};