'use strict';

var mongoose = require('mongoose'),
    Role = mongoose.model('Roles');

exports.roles = function(req, res) {
    Role.find({}, function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.add = function(req, res) {
    var new_role = new Role(req.body);
    console.log(req.body);
    new_role.save(function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.getrole = function(req, res) {
    Role.findById(mongoose.Types.ObjectId(req.query.roleId), function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.update = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.roleId);
    Role.findOneAndUpdate({ _id: id }, req.body, { new: true }, function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.delete = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.roleId);
    Role.remove({
        _id: id
    }, function(err, role) {
        if (err)
            res.send(err);
        res.json({ message: 'role deleted successfully' });
    });
};