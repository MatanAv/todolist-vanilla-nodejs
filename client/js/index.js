// import Task from "./task.js";
import { paths, scripts } from "./constants.js";

// const { IN_PROGRESS, IN_LATE, COMPLETED } = taskStatusCodes;

function LoadSiteComponents() {
  const { navURL, addformURL } = paths;

  window.addEventListener("load", () => {
    InjectHTMLPage("navbar", navURL);
    InjectHTMLPage("main", addformURL);
  });
}

function LoadScript(url, isModule = true) {
  let head = document.getElementsByTagName("head")[0];
  // let body = document.getElementsByTagName("body")[0];
  let script = document.createElement("script");
  script.type = isModule ? "module" : "text/javascript";
  script.src = url;
  head.appendChild(script);
  // body.appendChild(script);
}

function LoadAllScripts() {
  scripts.forEach((script) => LoadScript(script));
}

function InjectHTMLPage(id, url) {
  $(`#${id}`).load(url);
  /*   XML
  const xhttp = new XMLHttpRequest();
  xhttp.onload = () => {
    const elem = document.getElementById(id);
    elem.innerHTML += xhttp.responseText;
    InjectJSScript(elem);
  };

  xhttp.open("GET", url);
  xhttp.send();
  */
}

// function addTask() {}
// function deleteTask() {}

LoadAllScripts();
LoadSiteComponents();

// --- //

// const tasks = [
//   new Task("a1", "txt", IN_PROGRESS, "d"),
//   new Task("a2", "txt", IN_PROGRESS, "d"),
//   new Task("a3", "txt", IN_PROGRESS, "d"),
// ];

// console.log(tasks);
