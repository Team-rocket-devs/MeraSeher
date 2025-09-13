const Department = require("../models/Department");

// Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json({ success: true, data: departments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create department
exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json({ success: true, data: department });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
