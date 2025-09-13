const Issue = require("../models/Issue");

// Get dashboard stats
exports.getStats = async (req, res) => {
  try {
    const totalIssues = await Issue.countDocuments();
    const resolvedIssues = await Issue.countDocuments({ status: "resolved" });
    const pendingIssues = await Issue.countDocuments({ status: "pending" });

    // Group by department
    const issuesByDepartment = await Issue.aggregate([
      { $group: { _id: "$department", count: { $sum: 1 } } }
    ]);

    res.json({
      success: true,
      data: {
        totalIssues,
        resolvedIssues,
        pendingIssues,
        issuesByDepartment
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
