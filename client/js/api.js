const fetchTasks = async () => {
  const tasks = await fetch("/todos");

  return tasks.json();
};

// const addNewTask = async (url, task) => {
//   $.post("/api/addtask", task, () => console.log("is here"));
// };

export { fetchTasks };
