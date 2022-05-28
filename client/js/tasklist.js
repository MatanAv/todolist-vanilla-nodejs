import Task from "./task.js";
import { taskStatusCodes } from "./constants.js";
const { IN_PROGRESS, IN_LATE, COMPLETED } = taskStatusCodes;

console.log("in tasklist.js");

const tasks = [];

// TODO: FetchTasks

function ShowTasks(tasklist) {
  let tasksHTML = "";

  const activeTasks = tasklist.filter((task) => {
    task.status !== COMPLETED;
  });

  tasklist.forEach((task) => {
    tasksHTML += TaskToHTMLItem(task);
  });

  return tasksHTML;
}

function SetTaskCompleted(task) {
  task.status(COMPLETED);
}

function TaskToHTMLItem(task) {
  let taskHTML = "";

  switch (task.status) {
    case IN_PROGRESS:
      taskHTML = `<li class="in-progress">
          <ul>
            <li>${task.title}</li>
            <li>${task.date}</li>
            <li>${task.status}</li>
            ${task.desc !== "" ? `<li>${task.status}</li>` : ""}
          </ul>
        </li>`;
    case IN_LATE:
      taskHTML = `<li class="in-late">
          <ul>
            <li>${task.title}</li>
            <li>${task.date}</li>
            <li>${task.status}</li>
            ${task.desc !== "" ? `<li>${task.status}</li>` : ""}
          </ul>
        </li>`;
    default:
  }

  return taskHTML;
}
