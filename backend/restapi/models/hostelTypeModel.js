'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

    typeName: { type: String, Required: 'Hostel Type name cannot be left blank.' },

    typeCode: { type: String },

    description: { type: String}

});

module.exports = mongoose.model('HosteTypes', Schema);