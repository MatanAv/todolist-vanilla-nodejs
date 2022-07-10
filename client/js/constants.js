const compsStr = "components";

export const PAGE_SIZE = 6;
export const TODOS_NUM_COLS = 3;

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
