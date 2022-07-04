import { onElementReady } from "./utils.js";
import { completeTask, fetchTasks } from "./api.js";
import { PAGE_SIZE } from "./constants.js";
import { createPageButtons } from "./pages.js";

class TodosPage {
  constructor(page) {
    this.todos = [];
    this.totalTodos = 0;
    this.currPage = page;
  }
}

const pageData = new TodosPage(0);

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

const tasklistToHTML = async (pageNum) => {
  const data = await fetchTasks(pageNum);
  [pageData.todos, pageData.totalTodos] = [data.tasks, data.totalTodos];
  const [todos] = [data.tasks];

  let tasksHTML = `<p id="task-count">There are <strong>${pageData.totalTodos}</strong>
   tasks in your list.</p>`;
  if (!todos.length) return tasksHTML;

  tasksHTML += `<div id="task-items"><ul>`;
  todos.forEach((task) => (tasksHTML += taskToHTMLItem(task)));
  tasksHTML += `</ul></div>`;

  return tasksHTML;
};

const handleTaskCompleted = async (e) => {
  const id = Number(e.delegateTarget.id);

  pageData.todos = await completeTask(id);
  alert(`Task ${id} has been successfully removed.`);

  pageData.page = 0;
  showTasks(0);
};

const handlePageClicked = (pageNum) => {
  showTasks(pageNum - 1);
};

const setDoneButtonsListener = (buttons) => {
  buttons.click((e) => handleTaskCompleted(e));
};

const setPageButtonsListener = (buttons) => {
  buttons.click((e) => handlePageClicked(Number(e.target.innerText)));
};

export const showTasks = async (pageNum) => {
  const code = await tasklistToHTML(pageNum);
  onElementReady("#tasks", (elem) => elem.html(code));
  onElementReady(".btn-done", setDoneButtonsListener);
  onElementReady("#task-pages", (elem) =>
    elem.html(createPageButtons(Math.ceil(pageData.totalTodos / PAGE_SIZE)))
  );
  onElementReady(".page-btn", setPageButtonsListener);
};
