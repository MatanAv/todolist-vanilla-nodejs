export const TASKS_PER_PAGE = 6;

export const addFormFields = {
  Title: { type: "text" },
  Description: { type: "textarea" },
  Deadline: { type: "date" },
};

export const comps = {
  header: { elementId: "header", url: `components/header.html` },
  nav: { elementId: "navbar", url: `components/navbar.html` },
  addform: { elementId: "main", url: `components/addform.html` },
  tasklist: { elementId: "main", url: `components/tasklist.html` },
  footer: { elementId: "footer", url: `components/footer.html` },
};
