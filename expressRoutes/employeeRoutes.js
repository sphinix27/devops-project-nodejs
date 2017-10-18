var express = require('express');
var app = express();
var employeeRoutes = express.Router();

// Require Employee model in our routes module
var Employee = require('../models/Employee');

// Defined store route
employeeRoutes.route('/employees').post(function (req, res) {
  var employee = new Employee(req.body);
      employee.save()
    .then(employee => {
    res.status(200).json({'employee': 'Employee added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
employeeRoutes.route('/employees').get(function (req, res) {
  Employee.find(function (err, employees){
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

// Defined edit route
employeeRoutes.route('/employees/:id').get(function (req, res) {
  var id = req.params.id;
  Employee.findById(id, function (err, employee){
      res.json(employee);
  });
});

//  Defined update route
employeeRoutes.route('/employees/:id').put(function (req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    if (!employee)
      return next(new Error('Could not load Document'));
    else {
      employee.name = req.body.name;
      employee.lastname = req.body.lastname;
      employee.birthday = req.body.birthday;
      employee.email = req.body.email;
      employee.ci = req.body.ci;
      employee.phone = req.body.phone;
      employee.cellphone = req.body.cellphone;
      employee.address = req.body.address;

      employee.save().then(employee => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
employeeRoutes.route('/employees/:id').delete(function (req, res) {
  Employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = employeeRoutes;
