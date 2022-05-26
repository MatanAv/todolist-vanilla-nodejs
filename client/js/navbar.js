import { paths } from "./constants.js";
const { addformURL, tasklistURL } = paths;

let pageState = "Add"; // This is the initial state

$("#add-task-button").click(() => LoadPage("Add"));
$("#show-tasks-button").click(() => LoadPage("Show"));

function LoadPage(page) {
  console.log("here");
  if (page === pageState) return;

  pageState = page;
  let url = page === "Add" ? addformURL : tasklistURL;

  $("main").load(url);
}
