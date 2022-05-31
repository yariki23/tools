import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { deleteTask, getTasksList, updateTask } from "./taskGeteway.js";

export const onClickTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");
  const isDeleteBtn = e.target.classList.contains("dlt-btn");
  console.log(isCheckbox);
  console.log(isDeleteBtn);
  if (isCheckbox) {
    const taskId = e.target.dataset.id;
    console.log(taskId);
    const tasksList = getItem("tasksList");
    const { text, createDate } = tasksList.find((task) => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };
    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem("tasksList", newTasksList);
        renderTasks();
      });
  } else if (isDeleteBtn) {
    const taskId = e.target.dataset.id;
    console.log(taskId);
    deleteTask(taskId).then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
  }
};
