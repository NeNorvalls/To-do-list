# To-Do List Project

[Visit My Project on Netlify](https://nenorvalls-to-do-list.netlify.app/)

## Project Overview

This project is a simple To-Do List application implemented using HTML, CSS, and JavaScript. The application allows users to add, edit, and delete tasks, with task data stored in the browser's local storage.

## Checklist

### HTML Structure

- Contains a container (`div.todo-container`) for the entire To-Do List.
- Includes an `h1` element for the title ("To-Do List").
- Utilizes an unordered list (`ul#task-list`) to display the list of tasks.
- Provides an input field (`input#new-task`) for adding new tasks.
- Includes a button for adding tasks (`button` inside `.add-task` div).

### CSS Styling

- External stylesheet linked (`styles.css`).
- Basic styling for the To-Do List container and input elements.

### JavaScript Functionality

- Uses `DOMContentLoaded` event to ensure the DOM is fully loaded before executing scripts.
- Retrieves tasks from local storage or initializes an empty array.
- Defines a `renderTasks` function to display tasks on the page.
- Renders tasks on page load.
- `addTask` function to add a new task to the list.
- `editTask` function to edit an existing task.
- `deleteTask` function to delete a task, with confirmation prompt.
- `saveTasks` function to save tasks to local storage.

### HTML File (`index.html`)

- DOCTYPE declaration.
- HTML tag with `lang` attribute.
- Meta tags for character set and viewport.
- External stylesheet linked.
- Title for the page ("To-Do List").
- Body contains a div with the class `todo-container`.

### JavaScript File (`scripts.js`)

- Event listener for `DOMContentLoaded`.
- Retrieves or initializes tasks from local storage.
- Renders tasks on page load.
- Defines `addTask`, `editTask`, `deleteTask`, and `saveTasks` functions.

### Readme.md

- Project overview.
- Checklist summary.
- Instructions on how to use or modify the project.

## Usage

1. Open `index.html` in a web browser.
2. Add tasks using the input field and "Add" button.
3. Edit tasks using the "Edit" button.
4. Delete tasks using the "Delete" button with confirmation.
