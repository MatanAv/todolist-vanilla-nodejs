import Task from "./task";
import { Task_Status_Codes } from "./constants";

const { IN_PROGRESS, IN_LATE, COMPLETED } = Task_Status_Codes;

const tasks = [];

// TODO: FetchTasks

function ShowTasks(tasklist) {
  tasksHTML = "";

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
  taskHTML = "";

  switch (task.status) {
    case IN_PROGRESS:
      taskHTML = `<li class="in-progress">
          <ul>
            <li>${task.title}</li>
            <li>${task.date}</li>
            <li>${task.status}</li>
            ${task.desc !== "" && <li>task.status</li>}
          </ul>
        </li>`;
    case IN_LATE:
      taskHTML = `<li class="in-late">
          <ul>
            <li>${task.title}</li>
            <li>${task.date}</li>
            <li>${task.status}</li>
            ${task.desc !== "" && <li>task.status</li>}
          </ul>
        </li>`;
    default:
  }

  return taskHTML;
}
