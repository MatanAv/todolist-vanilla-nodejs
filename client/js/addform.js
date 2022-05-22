const fields = [
  { lbl: "Title", type: "text" },
  { lbl: "Description", type: "textarea" },
  { lbl: "Deadline", type: "date" },
];

const AddFields = (formFields) => {
  flds = "";

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
  form = AddFields(formFields);
  form += `<input type="submit" value="Add">`;
  return form;
};

$("#add-form").html(CreateForm(fields));

// TODO: Handle submitting Node.js
