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
* Projects Schema
*/

var projectSchema = new Schema({
  id : {
    type : Schema.Types.ObjectId
  },
  name : {
   type : String,
   require:true,
   trim:true,
   validate: [validateProperty, 'Please fill the project name']
  },
  description : {
    type : String
  },
  startDate : {
    type : Date
  },
  isActive : {
    type : Boolean
  },
  disciplines : {
    type : Array
  },
  galleryURLs : {
    type : Array
  },
  appStore : {
    type : String
  },
  playStore : {
    type : String
  },
  website : {
    type : String
  },
  smallLogo : {
    type : String
  },
  hasTeamMembers  :  [{
    type : mongoose.Schema.ObjectId,
    ref : 'TeamMember'
  }],
  lastUpdated : {
    type:Date,
    default:Date.now
  }
});

var projects = mongoose.model('Projects', projectSchema);

module.exports = {
  Projects : projects
};
