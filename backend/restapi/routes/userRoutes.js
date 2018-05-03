'use strict';

module.exports = function(app) {
    var user = require('../controllers/userController');
    app.route('/users')
        .get(user.users)
        .post(user.add);
    app.route('/users/:userId')
        .get(user.getuser)
        .put(user.update)
        .delete(user.delete);
    app.route('/login')
        .post(user.login);
};