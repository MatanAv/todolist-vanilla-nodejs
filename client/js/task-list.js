import Task from "./task.js";
import { onElementReady } from "./utils.js";
import { fetchTasks } from "./api.js";

const taskToHTMLItem = (task) => {
  let taskHTML = `<li class="in-progress">`;
  taskHTML += `<ul>
  <li>${task.title}</li>
  <li>${task.deadline}</li>
  ${task.desc !== "" ? `<li>${task.desc}</li>` : ""}</ul></li>`;

  return taskHTML;
};

const tasklistToHTML = async () => {
  const todos = await fetchTasks();

  let tasksHTML = `<p id="task-count">There are ${todos.length} tasks in your list.</p>`;
  if (!todos.length) return tasksHTML;

  tasksHTML += `<div id="task-list"><ul>`;
  todos.forEach((task) => (tasksHTML += taskToHTMLItem(task)));
  tasksHTML += `</ul></div>`;

  return tasksHTML;
};

export const showTasks = async () => {
  const code = await tasklistToHTML();
  onElementReady("#show-tasks", (elem) => elem.html(code));
};
