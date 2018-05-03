'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

    userName: { type: String, Required: 'User name cannot be left blank.' },

    email: { type: String, Required: 'User email cannot be left blank.' },

    password: { type: String, Required: 'User password cannot be left blank' }

});

module.exports = mongoose.model('Users', Schema);