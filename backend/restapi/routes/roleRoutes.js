'use strict';

module.exports = function(app) {
    var role = require('../controllers/roleController');
    app.route('/roles')
        .get(role.roles)
        .post(role.add);
    app.route('/roles/:roleId')
        .get(role.getrole)
        .put(role.update)
        .delete(role.delete);

};