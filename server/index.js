const express = require("express");
const path = require("path");
const { PORT } = require("./config");
const { todos } = require("./data");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/todos", (req, res) => {
  const params = req.params;

  let tasks = todos.filter((t) => !t.completed);

  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
