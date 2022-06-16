export default class Task {
  constructor(title, desc, deadline) {
    this.id = -1;
    this.title = title;
    this.desc = desc;
    this.deadline = deadline;
    this.completed = false;
  }
}
