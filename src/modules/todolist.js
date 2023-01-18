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

  displayToDo(list) {
    list.innerHTML = '';
    this.tasks.forEach((task) => {
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

    const textArea = document.querySelectorAll('.text-area');
    textArea.forEach((area) => {
      area.addEventListener('change', () => {
        const result = this.tasks.filter((task) => task.id === Number(area.id));
        this.tasks[result[0].id - 1].description = area.value;
        this.setStorage();
      });
    });
  }

  resetIndex = () => {
    let initialIndex = 1;
    this.tasks.forEach((task) => {
      task.id = initialIndex;
      initialIndex += 1;
    });
  }

  setStorage = () => {
    const formData = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', formData);
  };

  getStorage = () => {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  };
}