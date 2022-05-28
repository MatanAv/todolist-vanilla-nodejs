const createUniqueId = (() => {
  let firstId = 0;
  return function () {
    return firstId++;
  };
})();

export default class Task {
  constructor(title, desc, status, deadline) {
    this.id = createUniqueId();
    this.title = title;
    this.desc = desc;
    this.status = status;
    this.deadline = deadline;
  }
}
