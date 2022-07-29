import { addFormFields } from "./constants.js";
import { onElementReady } from "./utils.js";
import { postTask } from "./api.js";
import Task from "./task.js";

const addFields = (fields) => {
  let flds = `<div id="form-flds">`;

  Object.entries(fields).forEach((f) => {
    let [label, lowerLabel, type] = [f[0], f[0].toLowerCase(), f[1].type];
    flds +=
      type !== "textarea"
        ? `<div class="field">
        <label for="${lowerLabel}">${label}:</label>
        <input id="${lowerLabel}" class="user-input" name="${lowerLabel}" type="${type}" required>
      </div>`
        : `<div class="field">
      <label for="${lowerLabel}">${label}:</label>
      <textarea id="${lowerLabel}" class="user-input" name="${lowerLabel}"></textarea></div>`;
  });

  flds += `</div>`;

  return flds;
};

const createForm = (fields) => {
  let formHTML = addFields(fields);
  formHTML += `<div class="form-submit">
  <input class="btn" id="submit" type="submit" value="Submit"></div>`;
  return formHTML;
};

const handleTaskSubmit = () => {
  let task = {};

  Object.keys(addFormFields).forEach((lbl) => {
    const lowerlbl = lbl.toLowerCase();
    const elem = $(`${"#" + lowerlbl}`);
    task[lowerlbl] = elem.val();
    elem.val("");
  });

  task = new Task(task.title, task.description, task.deadline);

  postTask(task);
  alert("Your task has been successfully added.");
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
