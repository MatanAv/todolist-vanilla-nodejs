const compsStr = "components";

export const addFormFields = {
  Title: { type: "text" },
  Description: { type: "textarea" },
  Deadline: { type: "date" },
};

export const comps = {
  header: { elementId: "header", url: `${compsStr}/header.html` },
  nav: { elementId: "navbar", url: `${compsStr}/navbar.html` },
  addform: { elementId: "main", url: `${compsStr}/addform.html` },
  tasklist: { elementId: "main", url: `${compsStr}/tasklist.html` },
};

// export const taskStatusCodes = {
//   IN_PROGRESS: "In Progress",
//   IN_LATE: "In Late",
//   COMPLETED: "Completed",
// };
