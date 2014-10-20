'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * A Validation functions
 */
var validateProperty = function(property) {
  return !property && property.length > 0;
};

/**
* TeamMember Schema
*/

var teamMemberSchema = new Schema({
  id : {
    type : Schema.Types.ObjectId
  },
  firstName : {
    type : String,
    require:true,
    trim:true,
    validate: [validateProperty, 'Please fill in your First name']
  },
  lastName : {
    type : String,
    require:true,
    trim:true,
    validate: [validateProperty, 'Please fill in your Last name']
  },
  aboutMe : {
    type : String,
    require:true,
    validate: [validateProperty, 'Please say something about yourself']
  },
  joiningDate : {
    type : Date
  },
  birthDate : {
    type : Date,
    require:true,
  },
  experience : {
    type : Number
  },
  email : {
    type : String,
    require:true,
    validate: [validateProperty, 'Please fill in your email'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  phoneNumber : {
    type : String,
    require:true,
    validate: [validateProperty, 'Please fill in your phone number'],
    match : [/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, 'Please fill a valid phone number']
  },
  skills : {
    type : Array
  },
  linkedIn : {
    type : String
  },
  facebook : {
    type : String
  },
  github : {
    type : String
  },
  twitter : {
    type : String
  },
  dribble : {
    type : String
  },
  portfolio : {
    type : String
  },
  hasTeamMembers  : [{
    type : mongoose.Schema.ObjectId, ref : 'Projects'
  }],
  lastUpdated : {
    type:Date,
    default:Date.now
  }
});

var teamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = {
  TeamMember : teamMember
};
