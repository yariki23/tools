import { getItem, setItem } from "./storage.js";
import { getTasksList } from "./taskGeteway.js";

const listElem = document.querySelector(".list");

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("data-id", id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add("list__item_done");
  }

  const textElem = document.createElement("span");
  textElem.classList.add("text");
  textElem.textContent = text;

  const deleteBtnElem = document.createElement("button");
  deleteBtnElem.classList.add("dlt-btn");
  deleteBtnElem.setAttribute("data-id", id);
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getTasksList();

  listElem.innerHTML = "";
  tasksList
    .then((tasks) => tasks.sort((a, b) => a.done - b.done).map(createListItem))
    .then((tasks) => listElem.append(...tasks));

  // listElem.append(...tasksElems);
};
