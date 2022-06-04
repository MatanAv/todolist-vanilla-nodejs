import Task from "./task.js";
import { taskStatusCodes } from "./constants.js";
import { onElementReady } from "./utils.js";
const { IN_PROGRESS, IN_LATE, COMPLETED } = taskStatusCodes;

const tasks = [];

function taskToHTMLItem(task) {
  let taskHTML = "";

  switch (task.status) {
    case IN_PROGRESS:
      taskHTML = `<li class="in-progress">`;
      break;
    case IN_LATE:
      taskHTML = `<li class="in-late">`;
      break;
    default:
  }

  taskHTML += `<ul>
  <li>${task.title}</li>
  <li>${task.status}</li>
  <li>${task.deadline}</li>
  ${task.desc !== "" ? `<li>${task.desc}</li>` : ""}</ul></li>`;

  return taskHTML;
}

function tasklistToHTML() {
  let tasksHTML = `<p id="task-count">There are ${tasks.length} tasks in your list.</p>`;
  if (!tasks.length) return tasksHTML;

  tasksHTML += `<div id="task-list"><ul>`;

  // TODO: filter should be in server
  const activeTasks = tasks.filter((task) => task.status !== COMPLETED);
  activeTasks.forEach((task) => (tasksHTML += taskToHTMLItem(task)));

  tasksHTML += `</ul></div>`;

  return tasksHTML;
}

export const showTasks = async () =>
  onElementReady("#show-tasks", (elem) => elem.html(tasklistToHTML()));
