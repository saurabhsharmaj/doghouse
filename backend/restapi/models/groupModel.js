'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

    groupName: { type: String, Required: 'Group Name cannot be left blank.' },

    description: { type: String}

});

module.exports = mongoose.model('Groups', Schema);