var express = require('express');
var app = express();
var employeeRoutes = express.Router();

// Require Employee model and controller in our routes module
var Employee = require('../models/Employee');
var EmployeeController = require('../controllers/EmployeeController')(Employee);

employeeRoutes.route('/employees').get(EmployeeController.GetAllEmployees);
employeeRoutes.route('/employees').post(EmployeeController.SaveEmployee);
employeeRoutes.route('/employees/:id').get(EmployeeController.GetEmployee);
employeeRoutes.route('/employees/:id').put(EmployeeController.UpdateEmployee);
employeeRoutes.route('/employees/:id').delete(EmployeeController.DeleteEmployee);

module.exports = employeeRoutes;
