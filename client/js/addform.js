import { addFormFields } from "./constants.js";

const AddFields = (formFields) => {
  let flds = "";

  formFields.forEach((f) => {
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

const CreateForm = (formFields) => {
  let form = AddFields(formFields);
  form += `<input type="submit" value="Add">`;
  return form;
};

console.log("in addform.js");

$("#add-form").html(CreateForm(addFormFields));

// TODO: Handle submitting Node.js
