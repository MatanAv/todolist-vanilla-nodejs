export default class Task {
  constructor(title, desc, status, deadline) {
    this.title = title;
    this.desc = desc;
    this.status = status;
    this.deadline = deadline;
  }

  // TODO: FIX

  get title() {
    return this.title;
  }
  get desc() {
    return this.desc;
  }
  get status() {
    return this.status;
  }
  get deadline() {
    return this.deadline;
  }
  set status(s) {
    this.status = s;
  }
}
