import { taskStatusCodes } from "./constants.js";

const { IN_PROGRESS, IN_LATE, COMPLETED } = taskStatusCodes;

const createUniqueId = (() => {
  let firstId = 0;
  return function () {
    return firstId++;
  };
})();

export default class Task {
  constructor(title, desc, deadline) {
    this.id = createUniqueId();
    this.title = title;
    this.desc = desc;
    this.deadline = deadline;
    this.status = IN_PROGRESS;
  }
}
