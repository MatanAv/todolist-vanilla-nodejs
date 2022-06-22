let { todos } = require(`../data`);
const { PAGE_SIZE } = require(`../config`);

const getTodos = (req, res) => {
  const page = Number(req.query.page);

  let tasks = todos.filter((t) => !t.completed);
  const totalTodos = tasks.length;

  page * PAGE_SIZE < todos.length
    ? (tasks = tasks.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE))
    : res
        .status(400)
        .json({ success: false, msg: "Requested page doesn't exists." });

  res.status(200).json({ tasks, totalTodos });
};

const createTodos = (req, res) => {
  let task = req.body;

  if (!task.title || !task.deadline)
    return res.status(400).json({
      success: false,
      msg: `Task hasn't been added due to a problem`,
    });

  task.id = todos.length + 1;
  todos.push(task);
  res.status(201).json({ success: true, data: task });
};

const setTodoCompleted = (req, res) => {
  const id = Number(req.params.id);
  const completed = Boolean(req.params.id);

  todos = todos.map((t) => (t.id === id ? { ...t, completed } : t));

  const activeTodos = todos.filter((t) => !t.completed);

  res.status(200).json({ success: true, data: activeTodos });
};

module.exports = { getTodos, createTodos, setTodoCompleted };
