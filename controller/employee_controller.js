const express=require('express');
const bodyparser = require("body-parser");
const app=express();

const employeeRouter=require('../handler/employee_handler');
app.use(bodyparser.json());
app.use('/employees',employeeRouter.getAllEmployee);
app.use('/employee',employeeRouter.getEmployee);
app.use('/addemployee',employeeRouter.addEmployee);
app.use('/updateemployee',employeeRouter.updateEmployee);
app.use('/deleteemployee',employeeRouter.deleteEmployee);


module.exports={app};