'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

    hostelName: { type: String, Required: 'Hostel name cannot be left blank.' },

    hostelTypes: { type: Object},
    
    owner: { type: Object},

    address: { type: String},

    landmark: { type: String},

    contactNo: { type: String},

    mobileNo: { type: String}

});

module.exports = mongoose.model('Hostels', Schema);