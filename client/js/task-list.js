import { onElementReady } from "./utils.js";
import { completeTask, fetchTasks } from "./api.js";
import { PAGE_SIZE, TODOS_NUM_COLS } from "./constants.js";
import { createPageButtons } from "./pages.js";

class TodosPage {
  constructor(page) {
    this.todos = [];
    this.totalTodos = 0;
    this.currPage = page;
  }
}

const pageData = new TodosPage(0);

const todoItemToHTML = (t) => {
  let itemHTML = `<div class="todo-item todo-in-time">`;
  itemHTML += `<ul><div class="todo-heading"><h4>${t.title}</h4></div>
  <div class="todo-content"><ul><li>${t.deadline}</li>
  ${t.desc !== "" ? `<li>${t.desc}</li>` : ""}</ul>
  <button id="${t.id}" class="btn-done" type="button">Done</button>
  </div></ul></div>`;

  return itemHTML;
};

const todoPageToHTML = async (pageNum) => {
  const data = await fetchTasks(pageNum);
  [pageData.todos, pageData.totalTodos] = [data.tasks, data.totalTodos];
  const [todos] = [data.tasks];

  let todoPageHTML = `<p id="task-count">There are <strong>${pageData.totalTodos}</strong>
   tasks in your list.</p>`;
  if (!todos.length) return todoPageHTML;

  todoPageHTML += `<div id="task-items">`;
  todos.forEach((task) => (todoPageHTML += todoItemToHTML(task)));
  todoPageHTML += `</div>`;

  todoPageHTML += createPageButtons(Math.ceil(pageData.totalTodos / PAGE_SIZE));

  return todoPageHTML;
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
  const code = await todoPageToHTML(pageNum);
  onElementReady("#tasks", (elem) => elem.html(code));
  onElementReady(".btn-done", setDoneButtonsListener);
  onElementReady(".page-btn", setPageButtonsListener);
};
