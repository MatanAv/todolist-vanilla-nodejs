import { onElementReady } from "./utils.js";
import { completeTask, fetchTasks } from "./api.js";
import { createPageButtons } from "./pages.js";
import { TASKS_PER_PAGE } from "./constants.js";

class TodosPage {
  constructor(page) {
    this.tasks = [];
    this.totalTodos = 0;
    this.currPage = page;
  }
}

const pageData = new TodosPage(0);

const checkIfTaskLate = (date) => {
  const [d, now] = [new Date(date), new Date("2022-07-06")];
  return d < now ? "todo-late" : "todo-in-time";
};

const todoItemToHTML = (t) => {
  let itemHTML = `<div class="todo-item ${checkIfTaskLate(t.deadline)}">`;
  itemHTML += `<ul><div class="todo-heading"><h4>${t.title}</h4></div>
  <div class="todo-content"><ul>
  ${t.desc !== "" ? `<li class="item-desc"><p>${t.desc}</p></li>` : ""}
  <li class="item-date">${t.deadline}</li>
  <button id="${t.id}" class="btn btn-done" type="button">Done</button></ul>
  </div></ul></div>`;

  return itemHTML;
};

const todoPageToHTML = async (pageNum) => {
  const data = await fetchTasks(pageNum);
  [pageData.tasks, pageData.totalTodos] = [data.tasks, data.totalTodos];
  const [tasks] = [data.tasks];

  let todoPageHTML = `<p id="task-count">There are <strong>${pageData.totalTodos}</strong>
   tasks in your list.</p>`;
  if (!tasks.length) return todoPageHTML;

  todoPageHTML += `<div id="task-items">`;
  tasks.forEach((task) => (todoPageHTML += todoItemToHTML(task)));
  todoPageHTML += `</div>`;

  todoPageHTML += createPageButtons(
    Math.ceil(pageData.totalTodos / TASKS_PER_PAGE),
    pageData.currPage
  );

  return todoPageHTML;
};

const handleTaskCompleted = async (e) => {
  const id = Number(e.delegateTarget.id);

  pageData.tasks = await completeTask(id);
  alert(`Task ${id} has been successfully removed.`);

  pageData.page = 0;
  showTasks(0);
};

const handlePageClicked = (pageNum) => {
  pageData.currPage = pageNum - 1;
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
