import { onElementReady } from "./utils.js";
import { completeTask, fetchTasks } from "./api.js";

let currTodos = [];

const taskToHTMLItem = (task) => {
  let taskHTML = `<li class="task-item">`;
  taskHTML += `<ul>
  <li>${task.id}</li>
  <li>${task.title}</li>
  <li>${task.deadline}</li>
  ${task.desc !== "" ? `<li>${task.desc}</li>` : ""}
  <li><button id="${task.id}" class="btn-done" type="button">Done</button></li>
  </ul></li>`;

  return taskHTML;
};

const tasklistToHTML = async () => {
  currTodos = await fetchTasks();

  let tasksHTML = `<p id="task-count">There are ${currTodos.length} tasks in your list.</p>`;
  if (!currTodos.length) return tasksHTML;

  tasksHTML += `<div id="task-list"><ul>`;
  currTodos.forEach((task) => (tasksHTML += taskToHTMLItem(task)));
  tasksHTML += `</ul></div>`;

  return tasksHTML;
};

const handleTaskCompleted = async (e) => {
  const id = Number(e.delegateTarget.id);

  currTodos = await completeTask(id);
  alert(`Task ${id} has been successfully removed.`);

  showTasks();
};

const setDoneButtonsListener = (buttons) => {
  buttons.click((e) => handleTaskCompleted(e));
};

export const showTasks = async () => {
  const code = await tasklistToHTML();
  onElementReady("#show-tasks", (elem) => elem.html(code));
  onElementReady(".btn-done", setDoneButtonsListener);
};
