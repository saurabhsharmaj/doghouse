'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

    roleName: { type: String, Required: 'Role name cannot be left blank.' },

    roleCode: { type: String },

    description: { type: String }
});

module.exports = mongoose.model('Roles', Schema);