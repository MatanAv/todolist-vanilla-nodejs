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

  set set_id(id) {
    this.id = id;
  }
  set set_title(t) {
    this.title = t;
  }
  set set_desc(d) {
    this.desc = d;
  }
  set set_deadline(dd) {
    this.deadline = dd;
  }
  set set_status(s) {
    this.status = s;
  }

  get get_id() {
    return this.id;
  }
  get get_title() {
    return this.title;
  }
  get get_desc() {
    return this.desc;
  }
  get get_status() {
    return this.status;
  }
  get get_deadline() {
    return this.deadline;
  }
}
