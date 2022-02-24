const express = require("express");

const getAllEmployee = express.Router();
const getEmployee = express.Router();
const addEmployee = express.Router();
const updateEmployee = express.Router();
const deleteEmployee = express.Router();
const Emp = require("../models/emp");
const utility = require("../utility/utility");

getAllEmployee.get("/", async (req, res) => {
  try {
    const emp = await Emp.find();
    res.json(emp);
    const obj = emp;

    utility.printlog(utility.dateTime + " " + JSON.stringify(obj) + "\r\n");
  } catch (err) {
    res.send(`Error` + err);
    utility.printlog(utility.dateTime + " " + err + "\r\n");
  }
});

getEmployee.get("/:id", async (req, res) => {
  try {
    const emp = await Emp.findById(req.params.id);
    res.json(emp);
    const obj = emp;

    utility.printlog(utility.dateTime + " " + JSON.stringify(obj) + "\r\n");
  } catch (err) {
    utility.printlog(utility.dateTime + " " +err+ "\r\n");
    res.send("data not found");
    console.log(err);
  }
});

addEmployee.post("/", async (req, res) => {
  console.log(req.body)
  const emp = new Emp({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await emp.save();
    res.json(a1);
  } catch (error) {
    res.send("Error");
  }
});

updateEmployee.patch("/:id", async (req, res) => {
  try {
    const emp = await Emp.findById(req.params.id);
    emp.sub = req.body.sub;
    emp.name = req.body.name;
    emp.tech = req.body.tech;
    const e = await emp.save();
    res.json(e);
  } catch (err) {
    res.send("data not found");
  }
});

deleteEmployee.delete("/:id", async (req, res) => {
  try {
    const emp = await Emp.findById(req.params.id);

    await emp.delete();
    res.send(`Sucssesfully deleated :` + req.params.id);
  } catch (err) {
    res.send("data not found");
  }
});

module.exports = {
  getAllEmployee,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
