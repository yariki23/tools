import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
import { getTasksList } from "./taskGeteway.js";
import { setItem } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);


//1. get data from server
//2. save data to front-end storage
