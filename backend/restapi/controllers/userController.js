'use strict';
var multer = require('multer');
var mongoose = require('mongoose'),
    User = mongoose.model('Users');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

exports.users = function(req, res) {
    User.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.add = function(req, res) {
    var new_user = new User(req.body);
    console.log("Going to add user:");
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


exports.searchEmail = function(req, res) {
    console.log("Check Email id of User : " + req.query.emailId);
    var query = { email: req.query.emailId }
    User.find(query, function(err, user) {
        if (err)
            res.send(err);
        console.log(user);
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

exports.search = function(req, res) {
    console.log("Search User : " + req.query.keyword);
    //var query = { userName: req.query.keyword };
    var query = { userName: new RegExp('^.*' + req.query.keyword + '.*$', "i") }
    console.log("query : " + JSON.stringify(query));
    User.find(query, function(err, user) {
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

exports.saveImage = function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
}