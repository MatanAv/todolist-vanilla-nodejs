import { ShowAddForm } from "./addform.js";
import { addFormFields, comps } from "./constants.js";
import { LoadHTMLComponent, onElementReady } from "./utils.js";

// const states = { pageState: "Add" };
let pageState = "Add";

function NavbarButtonsListener() {
  onElementReady("#add-task-button", (element) => {
    element.click(() => {
      HandlePageRequest("Add");
      ShowAddForm(addFormFields);
    });
  });
  onElementReady("#show-tasks-button", (element) => {
    element.click(() => HandlePageRequest("Show"));
  });
}

function HandlePageRequest(page) {
  if (page === pageState) return;

  const [addformURL, tasklistURL] = [comps.addform.url, comps.tasklist.url];
  pageState = page;
  let url = pageState === "Add" ? addformURL : tasklistURL;

  LoadHTMLComponent("main", url);
}

function InitSite() {
  let { tasklist, ...rest } = comps;
  rest = Object.values(rest);

  $("body").ready(() => {
    rest.forEach((e) => {
      LoadHTMLComponent(e.loadToElem, e.url);
    });
    ShowAddForm(addFormFields);
    NavbarButtonsListener();
  });
}

InitSite();
