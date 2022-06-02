import { handlePageRequest, onElementReady } from "./utils.js";
import { showAddForm } from "./addform.js";
import { showTasks } from "./tasklist.js";

export const setNavListeners = (app) => {
  onElementReady("#add-task-button", (element) => {
    element.click(() => {
      handlePageRequest(app, "Add");
      showAddForm();
    });
  });

  onElementReady("#show-tasks-button", (element) => {
    element.click(() => {
      handlePageRequest(app, "Show");
      showTasks();
    });
  });
};
