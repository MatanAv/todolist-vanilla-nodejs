import { comps } from "./constants.js";

export function loadHTMLComponent(id, url) {
  $(`#${id}`).load(url);
}

export function onElementReady(id, cb) {
  let element = $(id);
  !element.length ? setTimeout(() => onElementReady(id, cb), 0) : cb(element);
}

export function handlePageRequest(app, page) {
  if (page === app.pageState) return;

  app.pageState = page;
  page === "Add"
    ? loadHTMLComponent("main", comps.addform.url)
    : loadHTMLComponent("main", comps.tasklist.url);
}
