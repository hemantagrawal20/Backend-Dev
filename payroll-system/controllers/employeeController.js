const employees = require("../data");

// CREATE
exports.createEmployee = async(req, res, next) => {
    try {
        const { name, email, department, basicSalary, joiningDate } = req.body;

        const newEmployee = {
            id: employees.length + 1,
            name,
            email,
            department,
            basicSalary,
            joiningDate,
        };

        employees.push(newEmployee);

        res.status(201).json(newEmployee);
    } catch (error) {
        next(error);
    }
};

// GET ALL
exports.getEmployees = async(req, res, next) => {
    try {
        res.status(200).json(employees);
    } catch (error) {
        next(error);
    }
};

// GET BY ID
exports.getEmployeeById = async(req, res, next) => {
    try {
        const employee = employees.find(
            (emp) => emp.id === parseInt(req.params.id)
        );

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

// UPDATE
exports.updateEmployee = async(req, res, next) => {
    try {
        const employee = employees.find(
            (emp) => emp.id === parseInt(req.params.id)
        );

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        Object.assign(employee, req.body);

        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

// DELETE
exports.deleteEmployee = async(req, res, next) => {
    try {
        const index = employees.findIndex(
            (emp) => emp.id === parseInt(req.params.id)
        );

        if (index === -1) {
            return res.status(404).json({ message: "Employee not found" });
        }

        employees.splice(index, 1);

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        next(error);
    }
};