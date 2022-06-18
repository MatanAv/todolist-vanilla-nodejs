const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodos,
  setTodoCompleted,
} = require("../controllers/todos");

router.get("/", getTodos);
router.post("/", createTodos);
router.put("/:id", setTodoCompleted);

module.exports = router;
