import { addFormFields } from "./constants.js";
import { onElementReady } from "./utils.js";
import Task from "./task.js";

const addFields = (fields) => {
  let flds = "";

  Object.entries(fields).forEach((f) => {
    let [label, lowerLabel, type] = [f[0], f[0].toLowerCase(), f[1].type];
    flds +=
      type !== "textarea"
        ? `<div class="field">
        <label for="${lowerLabel}">${label}:</label>
        <input id="${lowerLabel}" name="${lowerLabel}" type="${type}" required>
      </div>`
        : `<div class="field">
      <label for="${lowerLabel}">${label}:</label>
      <textarea id="${lowerLabel}" name="${lowerLabel}" rows="1" cols="10"></textarea></div>`;
  });

  return flds;
};

const createForm = (fields) => {
  let formHTML = addFields(fields);
  formHTML += `<input id="submit" type="submit" value="Submit">`;
  return formHTML;
};

export const showAddForm = async () => {
  onElementReady("#add-form", (elem) => {
    elem.html(createForm(addFormFields));
    elem.submit((e) => {
      e.preventDefault();
      handleTaskSubmit();
    });
  });
};

const handleTaskSubmit = () => {
  let task = {};

  Object.keys(addFormFields).forEach((lbl) => {
    const lowerlbl = lbl.toLowerCase();
    const elem = $(`${"#" + lowerlbl}`);
    task[lowerlbl] = elem.val();
  });

  task = new Task(task.title, task.description, task.deadline);
  // task = JSON.stringify(new Task(task.title, task.description, task.deadline));
  // TODO: 1. post it
  console.log(task);
  // $.post(dbURL, task, () => alert("Task has been added successfully."));
};
