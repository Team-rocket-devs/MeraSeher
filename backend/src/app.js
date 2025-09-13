import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import MemoryStore from "memorystore";
import connectDB from "./config/db.js";

// Routes
import issueRoutes from "./routes/issueRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Session config (only if needed)
const Store = MemoryStore(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret-key",
    resave: false,
    saveUninitialized: false,
    store: new Store({ checkPeriod: 86400000 }),
  })
);

// API Routes
app.use("/api/issues", issueRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

export default app;
