const compsStr = "components";

export const addFormFields = [
  { lbl: "Title", type: "text" },
  { lbl: "Description", type: "textarea" },
  { lbl: "Deadline", type: "date" },
];

// const a= {
//   Title: {
//     type: "text"
//   },
//   Description: "text"
// }

// Object.keys(a).forEach(b => {
//   a[b]
// })

export const comps = {
  header: { loadToElem: "header", url: `${compsStr}/header.html` },
  nav: { loadToElem: "navbar", url: `${compsStr}/navbar.html` },
  addform: { loadToElem: "main", url: `${compsStr}/addform.html` },
  tasklist: { loadToElem: "main", url: `${compsStr}/tasklist.html` },
};

export const taskStatusCodes = {
  IN_PROGRESS: "In Progress",
  IN_LATE: "In Late",
  COMPLETED: "Completed",
};

// const scripts = [
//   "js/constants.js",
//   "js/task.js",
//   "js/navbar.js",
//   "js/addform.js",
//   "js/tasklist.js",
// ];
