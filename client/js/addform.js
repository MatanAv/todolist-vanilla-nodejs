import { onElementReady } from "./utils.js";

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
  let form = addFields(fields);
  form += `<input type="submit" value="Add">`;
  return form;
};

export const showAddForm = async (formFields) =>
  onElementReady("#add-form", (elem) => elem.html(createForm(formFields)));
