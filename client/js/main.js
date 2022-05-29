import { showAddForm } from "./addform.js";
import { addFormFields, comps } from "./constants.js";
import { showTasks } from "./tasklist.js";
import { loadHTMLComponent, onElementReady } from "./utils.js";

// const states = { pageState: "Add" };
let pageState = "Add";

function navbarButtonsListener() {
  onElementReady("#add-task-button", (element) => {
    element.click(() => {
      handlePageRequest("Add");
      showAddForm(addFormFields);
    });
  });
  onElementReady("#show-tasks-button", (element) => {
    element.click(() => {
      handlePageRequest("Show");
      showTasks();
    });
  });
}

function handlePageRequest(page) {
  if (page === pageState) return;

  pageState = page;
  pageState === "Add"
    ? loadHTMLComponent("main", comps.addform.url)
    : loadHTMLComponent("main", comps.tasklist.url);
}

function initSite() {
  let { tasklist, ...rest } = comps;
  rest = Object.values(rest);

  $("body").ready(() => {
    rest.forEach((e) => loadHTMLComponent(e.elementId, e.url));
    showAddForm(addFormFields);
    navbarButtonsListener();
  });
}

initSite();
