const fetchTasks = async (pageNum) => {
  const req = await axios.get(`/todos?page=${pageNum}`);
  return req.data;
};

const postTask = async (task) => {
  try {
    const res = await axios.post("/todos", task);
  } catch (error) {
    alert(error);
  }
};

const completeTask = async (id) => {
  try {
    const res = await axios.put(`/todos/${id}`, { completed: true });
    return res.data.data;
  } catch (error) {
    alert(error);
  }
};

export { fetchTasks, postTask, completeTask };
