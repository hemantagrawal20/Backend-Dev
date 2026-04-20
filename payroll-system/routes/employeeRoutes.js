const express = require("express");
const router = express.Router();
const employees = require("../data");


// ================= HOME PAGE =================
router.get("/", (req, res) => {
    res.render("home", { employees });
});


// ================= ADD USER PAGE =================
router.get("/add", (req, res) => {
    res.render("employeeForm");
});


// ================= CREATE EMPLOYEE =================
router.post("/add", (req, res) => {
    const { name, gender, department, salary, startDate, profile } = req.body;

    const newEmployee = {
        id: employees.length + 1,
        name,
        gender,
        department,
        salary,
        startDate,
        profile
    };

    employees.push(newEmployee);

    res.redirect("/");
});


// ================= EDIT PAGE =================
router.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.send("Employee not found");
    }

    res.render("employeeEdit", { employee });
});


// ================= UPDATE EMPLOYEE =================
router.post("/update/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const { name, gender, department, salary, startDate, profile } = req.body;

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.send("Employee not found");
    }

    // Update values
    employee.name = name;
    employee.gender = gender;
    employee.department = department;
    employee.salary = salary;
    employee.startDate = startDate;
    employee.profile = profile;

    res.redirect("/");
});


// ================= DELETE EMPLOYEE =================
router.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        employees.splice(index, 1);
    }

    res.redirect("/");
});


module.exports = router;