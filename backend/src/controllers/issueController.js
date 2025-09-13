const Issue = require("../models/Issue");

// Get all issues
exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().populate("department", "name");
    res.json({ success: true, data: issues });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create new issue
exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json({ success: true, data: issue });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update issue
exports.updateIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!issue) return res.status(404).json({ success: false, message: "Issue not found" });
    res.json({ success: true, data: issue });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete issue
exports.deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);
    if (!issue) return res.status(404).json({ success: false, message: "Issue not found" });
    res.json({ success: true, message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
