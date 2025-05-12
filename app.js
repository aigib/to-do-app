const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Wright something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "⤫";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
  taskContainer.innerHTML = localStorage.getItem("data");
}

showData();
