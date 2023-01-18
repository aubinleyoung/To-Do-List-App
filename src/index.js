// import _ from 'lodash';
import './style.css';

const list = document.querySelector('.lists-of-tasks');

const tasks = [
  {
    description: 'Eat food',
    completed: true,
    index: 1,
  },
  {
    description: 'Play game',
    completed: false,
    index: 2,
  },
  {
    description: 'Work on my project',
    completed: false,
    index: 3,
  },
];
const displayToDo = (tasks) => {
  tasks.forEach((task) => {
    const li = `<div id="${task.id}" class="list">
    <input
      type="checkbox"
      id="${task.id}"
      name="task"
      value="task"
      ${task.completed ? 'checked' : ''}
      class="checkbox"
    />
    <input
      type="text" id="${task.id}" class="text-area" name="task" value="${task.description}" />
    <button class="delete">Delete</button>
  </div>`;
    list.innerHTML += li;
  });
};
displayToDo(tasks);