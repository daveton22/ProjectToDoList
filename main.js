// making todo list
// 1. add todo
function addTodo(event) {
  event.preventDefault();

  const todo = document.getElementById("todo-entry-box").value;

  if (todo.trim() !== "") {
    const ol = document.getElementById("todo-list");
    const li = document.createElement("li");

    li.textContent = todo;

    const liList = ol.getElementsByTagName("li");
    li.textContent = liList.length + 1 + ". " + todo;

    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox-wrapper-40");
    checkboxWrapper.setAttribute("id", "checkbox-wrapper");
    li.appendChild(checkboxWrapper);

    const label = document.createElement("label");
    checkboxWrapper.appendChild(label);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);

    const span = document.createElement("span");
    span.classList.add("checkbox");
    label.appendChild(span);

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
    });

    ol.appendChild(li);

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("listSaved", false);

    document.getElementById("todo-entry-box").value = "";
  }
}

// 2. remove all todo
// menhapus semua todo dari list dan local storage
function removeAllTodo() {
  var ol = document.getElementById("todo-list");
  ol.innerHTML = "";

  localStorage.removeItem("todos");
}

// 3. remove all todo yang sudah di check

function removeCheckedTodo() {
  var ol = document.getElementById("todo-list");
  var li = ol.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.contains("checked")) {
      li[i].remove();
    }
  }
}

// 4. saveList() untuk menyimpan list ke localStorage agar tidak hilang ketika di-refresh

function saveList() {
  const ol = document.getElementById("todo-list");
  const li = ol.getElementsByTagName("li");
  const todos = [];

  for (let i = 0; i < li.length; i++) {
    const todo = {
      text: li[i].textContent,
      checked: li[i].classList.contains("checked"),
    };
    todos.push(todo);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("listSaved", true);

  alert("List berhasil disimpan, Klik OK");
}

// 5. untuk memuat kembali list dari localStorage saat halaman di-load
function loadList() {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos && Array.isArray(savedTodos)) {
    const ol = document.getElementById("todo-list");
    ol.innerHTML = "";
    for (let i = 0; i < savedTodos.length; i++) {
      const li = document.createElement("li");
      li.textContent = savedTodos[i].text;

      if (savedTodos[i].checked) {
        li.classList.add("checked");
      }

      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.classList.add("checkbox-wrapper-40");
      checkboxWrapper.setAttribute("id", "checkbox-wrapper");
      li.appendChild(checkboxWrapper);

      const label = document.createElement("label");
      checkboxWrapper.appendChild(label);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      label.appendChild(checkbox);

      const span = document.createElement("span");
      span.classList.add("checkbox");
      label.appendChild(span);

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          li.classList.add("checked");
        } else {
          li.classList.remove("checked");
        }
      });

      ol.appendChild(li);
    }
  }
}

window.onload = function () {
  const isListSaved = localStorage.getItem("listSaved");

  if (isListSaved === "true") {
    loadList();
  } else {
    alert(
      "Daftar belum disimpan, harap tekan 'Save List' untuk menyimpan daftar."
    );
  }
};
