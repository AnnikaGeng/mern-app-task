const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

// create a task
// router.post("/", createTask);

// // get/read the task
// router.get("/", getTasks);

// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;