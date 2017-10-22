'use strict';

var EmployeeCtrl = Employee => {
    var EmployeeObj = {};

    EmployeeObj.GetAllEmployees = (req, res) => {
        Employee.find((err, employees) => {
            if(err) res.json(err);
            res.json(employees);
        });
    }

    EmployeeObj.SaveEmployee = (req, res) => {
        var employee = new Employee(req.body);
        employee.save()
            .then(employee => {
                res.status(200).json(employee);
            })
            .catch(err => {
                res.status(400).json("Unable to save to database");
            });
    }

    EmployeeObj.GetEmployee = (req, res) => {
        var id = req.params.id;
        Employee.findById(id, (err, employee) => {
            res.json(employee);
        });
    }

    EmployeeObj.UpdateEmployee = (req, res) => {
        Employee.findById(req.params.id, (err, employee) => {
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
                    res.json(employee);
                })
                .catch(err => {
                    res.status(400).json("Unable to update the database");
                });
            }
        });
    }

    EmployeeObj.DeleteEmployee = (req, res) => {
        Employee.findByIdAndRemove({_id: req.params.id}, (err, employee) => {
            if(err) res.json(err);
            res.status(200).json({ message: 'Successfully deleted' });
        });
    }
    return EmployeeObj;
}

module.exports = EmployeeCtrl;
