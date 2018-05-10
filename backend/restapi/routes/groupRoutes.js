'use strict';

module.exports = function(app) {
    var group = require('../controllers/groupController');
    app.route('/groups')
        .get(group.groups)
        .post(group.add);
    app.route('/groups/:groupId')
        .get(group.getgroup)
        .put(group.update)
        .delete(group.delete);

};