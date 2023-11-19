document.addEventListener("DOMContentLoaded", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  renderTasks();

  function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
      const li = document.createElement("li");
      li.innerHTML = `<span>${task}</span><button onclick="editTask(${index})">Edit</button><button onclick="deleteTask(${index})">Delete</button>`;
      taskList.appendChild(li);
    });

    saveTasks();
  }

  window.addTask = function () {
    const newTaskInput = document.getElementById("new-task");
    const newTask = newTaskInput.value.trim();

    if (newTask !== "") {
      tasks.push(newTask);
      renderTasks();
      newTaskInput.value = "";
    }
  };

  window.editTask = function (index) {
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null) {
      tasks[index] = updatedTask.trim();
      renderTasks();
    }
  };

  window.deleteTask = function (index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      tasks.splice(index, 1);
      renderTasks();
    }
  };

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
