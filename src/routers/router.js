/** @format */

import express from "express";
import UserRouters from "./user.js";
import BlogRouters from "./blogs.js";
import DashboardRouters from "./dashboard.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to Backend of Blog App</h1>`);
});

router.use("/user", UserRouters);
router.use("/blogs", BlogRouters);
router.use("/dashboard", DashboardRouters);

export default router;
