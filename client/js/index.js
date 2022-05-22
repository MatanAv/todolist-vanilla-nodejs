import { Paths } from "./constants.js";
import Task from "./task.js";

function LoadSiteComponents() {
  const { navURL, addformURL } = Paths;

  window.addEventListener("load", () => {
    InjectHTML("main", navURL);
    InjectHTML("main", addformURL);
  });
}

function InjectHTML(id, url) {
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

  // jQuery
  $(`#${id}`).load(url);
}

function InjectJSScript(elem) {
  elem.querySelectorAll("script").forEach((script) => {
    const newScript = document.createElement("script");
    Array.from(script.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
      newScript.appendChild(document.createTextNode(script.innerHTML));
      script.parentNode.replaceChild(newScript, script);
    });
  });
}

// function addTask() {}
// function deleteTask() {}

// const t = new Task("m", "n", "s", "d");
// console.log(t);

LoadSiteComponents();
