// import _ from 'lodash';
import './style.css';

export default class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask = (description) => {
    const completed = false;
    const id = this.tasks.length + 1;
    const task = {
      id,
      description,
      completed,
    };
    this.tasks.push(task);
  }

  removeList = (id) => {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      }
    });
  }
}