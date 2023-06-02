const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  const task = inputBox.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;
  listContainer.appendChild(li);
  const span = document.createElement("span");
  span.innerHTML = "&#10006;";
  li.appendChild(span);
  inputBox.value = "";
  saveData();
};

const handleClick = (event) => {
  const target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.tagName === "SPAN") {
    target.parentElement.remove();
  }
  saveData();
};

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

listContainer.addEventListener("click", handleClick);

showTask();
