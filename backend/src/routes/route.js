import express from "express";
import auth from "../middleware/auth.js";

// Controllers
import * as issueController from "../controllers/issueController.js";
import * as departmentController from "../controllers/departmentController.js";
import * as statsController from "../controllers/statsController.js";
import * as userController from "../controllers/userController.js";

const router = express.Router();

/* ============================
   ISSUE ROUTES (/api/issues)
=============================== */
router.post("/issues", auth, issueController.createIssue);
router.get("/issues", auth, issueController.getIssues);
router.get("/issues/:id", auth, issueController.getIssueById);
router.put("/issues/:id", auth, issueController.updateIssue);
router.delete("/issues/:id", auth, issueController.deleteIssue);

/* ============================
   DEPARTMENT ROUTES (/api/departments)
=============================== */
router.post("/departments", auth, departmentController.createDepartment);
router.get("/departments", auth, departmentController.getDepartments);
router.put("/departments/:id", auth, departmentController.updateDepartment);
router.delete("/departments/:id", auth, departmentController.deleteDepartment);

/* ============================
   STATS ROUTES (/api/stats)
=============================== */
router.get("/stats/monthly", auth, statsController.getMonthlyStats);
router.get("/stats/trends", auth, statsController.getResolutionTrends);

/* ============================
   USER ROUTES (/api/users)
=============================== */
router.get("/users/me", auth, userController.getProfile);
router.put("/users/me", auth, userController.updateProfile);

export default router;
