import { createTask, getTasksList } from "./taskGeteway.js";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createData: new Date().toISOString(),
  };
  // console.log(createTask(newTask));
  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

//1. prepare data
//2. write data to db
//3. read new data from server
//4. save new data to front-end storage
//5. update UI
