const comps = "components";

const scripts = [
  // "js/constants.js",
  // "js/task.js",
  // "js/navbar.js",
  // "js/addform.js",
  // "js/tasklist.js",
];

const addFormFields = [
  { lbl: "Title", type: "text" },
  { lbl: "Description", type: "textarea" },
  { lbl: "Deadline", type: "date" },
];

const paths = {
  navURL: `${comps}/navbar.html`,
  addformURL: `${comps}/addform.html`,
  tasklistURL: `${comps}/tasklist.html`,
};

const taskStatusCodes = {
  IN_PROGRESS: "In Progress",
  IN_LATE: "In Late",
  COMPLETED: "Completed",
};

export { scripts, paths, taskStatusCodes, addFormFields };
