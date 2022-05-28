import { onElementReady } from "./utils.js";

const AddFields = (fields) => {
  let flds = "";

  fields.forEach((f) => {
    flds +=
      f.type !== "textarea"
        ? `<div class="field">
        <label for="${f.lbl.toLowerCase()}">${f.lbl}:</label>
        <input id="${f.lbl.toLowerCase()}" name="${f.lbl.toLowerCase()}" type="${
            f.type
          }" required>
      </div>`
        : `<div class="field">
      <label for="${f.lbl.toLowerCase()}">${f.lbl}:</label>
      <textarea id="${f.lbl.toLowerCase()}" name="${f.lbl.toLowerCase()}" rows="1" cols="10"></textarea></div>`;
  });

  return flds;
};

const CreateForm = (fields) => {
  let form = AddFields(fields);
  form += `<input type="submit" value="Add">`;
  return form;
};

export const ShowAddForm = async (formFields) => {
  onElementReady("#add-form", (form) => form.html(CreateForm(formFields)));
};
