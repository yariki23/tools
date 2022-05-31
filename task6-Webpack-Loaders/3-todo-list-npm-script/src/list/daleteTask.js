import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { getTasksList, updateTask } from "./taskGeteway.js";

// export const onDeleteTask = (e) => {
//   const isCheckbox = e.target.classList.contains("list__item-checkbox");

//   const taskId = e.target.dataset.id;
//   const tasksList = getItem("tasksList");

//   updateTask(taskId, updatedTask)
//     .then(() => getTasksList())
//     .then((newTasksList) => {
//       setItem("tasksList", newTasksList);
//       renderTasks();
//     });
// };
