let { todos } = require(`../data`);

const getTodos = (req, res) => {
  // const {page} = req.params;

  let tasks = todos.filter((t) => !t.completed);

  // if (page * 5 < todos.length) tasks = todos.slice(page * 5, (page + 1) * 5);
  // else return;

  res.json(tasks);
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
