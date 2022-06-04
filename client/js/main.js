import { comps } from "./constants.js";
import { setNavListeners } from "./navbar.js";
import { loadHTMLComponent, onElementReady } from "./utils.js";
import { showAddForm } from "./add-form.js";
import AppState from "./app-state.js";

const app = new AppState();

function setButtonsListeners() {
  setNavListeners(app);
}

function initSite() {
  app.pageState = "Add";

  let { tasklist, ...rest } = comps;
  rest = Object.values(rest);

  $("body").ready(() => {
    rest.forEach((e) => loadHTMLComponent(e.elementId, e.url));
    showAddForm();
    setButtonsListeners();
  });
}

initSite();
