var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employee = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  birthday: {
    type: Date
  },
  email: {
    type: String
  },
  ci: {
    type: String
  },
  phone: {
    type: String
  },
  cellphone: {
    type: String
  },
  address: {
    type: String
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);
