var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Employees
var Employee = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ci: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  cellphone: {
    type: String
  },
  address: {
    type: String
  },
  created_by: {
    type: Date,
    default: Date.now
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);
