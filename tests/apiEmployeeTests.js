'use strict'

let mongoose = require('mongoose');
let Employee = require('../app/models/Employee');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Employees', () => {
    beforeEach(done => {
        Employee.remove({}, err => {
            done();
        });
    });

    /**
     * Test the /GET route
     */
    describe('/GET employees', () => {
        it('it should GET all the employees', (done) => {
            chai.request(server)
                .get('/api/employees')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
            });
        });
    });

    /**
     * Test the /POST route
     */
    describe('/POST employee', () => {
        it('it should POST an employee', (done) => {
            let employee = {
                name: "John",
                lastname: "Doe",
                birthday: "2001-12-21",
                email: "johndoe@example.com",
                ci: "10203040",
                phone: "(591) 823-3641 x1171",
                cellphone: "1-940-764-3780",
                address: "3721 Skiles Prairie"
            }

            chai.request(server)
                .post('/api/employees')
                .send(employee)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('lastname');
                    res.body.should.have.property('birthday');
                    res.body.should.have.property('email');
                    res.body.should.have.property('ci');
                    done();
            });
        });
    });

    /**
     * Test the /GET/:id route
     */
    describe('/GET/:id', () => {
        it('it should GET an employee by the given id', (done) => {
            let employee = new Employee({
                name: "John",
                lastname: "Doe",
                birthday: "2001-12-21",
                email: "johndoe@example.com",
                ci: "10203040",
                phone: "(591) 823-3641 x1171",
                cellphone: "1-940-764-3780",
                address: "3721 Skiles Prairie"
            })
            employee.save((err, employee) => {
                chai.request(server)
                    .get('/api/employees/' + employee.id)
                    .send(employee)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('lastname');
                        res.body.should.have.property('birthday');
                        res.body.should.have.property('email');
                        res.body.should.have.property('ci');
                        done();
                });
            });
        });
    });

    /**
     * Test the /PUT/:id route
     */
    describe('/PUT/:id employee', () => {
        it ('it should update an employee given the id', (done) => {
            let employee = new Employee({
                name: "John",
                lastname: "Doe",
                birthday: "2001-12-21",
                email: "johndoe@example.com",
                ci: "10203040",
                phone: "(591) 823-3641 x1171",
                cellphone: "1-940-764-3780",
                address: "3721 Skiles Prairie"
            })
            employee.save((err, employee) => {
                chai.request(server)
                    .put('/api/employees/' + employee.id)
                    .send({
                        name: "JohnUpdated",
                        lastname: "DoeUpdated",
                        birthday: "2010-12-21",
                        email: "johndoe@example.com",
                        ci: "40302010",
                        phone: "(591) 823-3641 x1171",
                        cellphone: "1-940-764-3780",
                        address: "3721 Skiles Prairie"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql('JohnUpdated');
                        done();
                    });
            });
        });
    });

    /**
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id employee', () => {
        it('it should DELETE an employee given the id', (done) => {
            let employee = new Employee({
                name: "John",
                lastname: "Doe",
                birthday: "2001-12-21",
                email: "johndoe@example.com",
                ci: "10203040",
                phone: "(591) 823-3641 x1171",
                cellphone: "1-940-764-3780",
                address: "3721 Skiles Prairie"
            })
            employee.save((err, employee) => {
                chai.request(server)
                .delete('/api/employees/' + employee.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Successfully deleted');
                  done();
                });
          });
        });
    });
});
