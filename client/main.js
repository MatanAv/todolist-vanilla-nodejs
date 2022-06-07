import { comps } from "./js/constants.js";
import { setNavListeners } from "./js/navbar.js";
import { loadHTMLComponent, onElementReady } from "./js/utils.js";
import { showAddForm } from "./js/add-form.js";
import AppState from "./js/app-state.js";

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
