// making todo list
// 1. add todo
// make onclick event for add button to add todo to the list

// 3. make todo item checked when klik check box input
// make onclick event for checkbox to make todo item checked
function addTodo(event) {
  event.preventDefault(); // Mencegah form submit

  const todo = document.getElementById("todo-entry-box").value;

  if (todo.trim() !== "") {
    const ol = document.getElementById("todo-list");
    const li = document.createElement("li");

    // masukan value dari input ke li
    li.textContent = todo;
    // buat pernomoran untuk todo
    const liList = ol.getElementsByTagName("li");
    li.textContent = liList.length + 1 + ". " + todo;
    // Membuat checkbox
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox-wrapper-40");
    li.appendChild(checkboxWrapper);

    const label = document.createElement("label");
    checkboxWrapper.appendChild(label);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);

    const span = document.createElement("span");
    span.classList.add("checkbox");
    label.appendChild(span);

    // Tambahkan event listener untuk checkbox
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
    });

    ol.appendChild(li); // Tambahkan li ke ol

    // simpan todo ke local storage agar tidak hilang ketika di refresh
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    // Kosongkan input setelah menambahkan todo
    document.getElementById("todo-entry-box").value = "";
  }
}

// 2. remove all todo
// make onclick event for remove button to remove all todo from the list
function removeAllTodo() {
  var ol = document.getElementById("todo-list");
  ol.innerHTML = "";
}

// 4. remove all todo that contain checked class
// make onclick event for remove button to remove all todo from the list

function removeCheckedTodo() {
  var ol = document.getElementById("todo-list");
  var li = ol.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.contains("checked")) {
      li[i].remove();
    }
  }
}

// 5. buat saveList() untuk menyimpan setiap dinamis list jika ada dan simpan ke local storage dan buat list tetap ada ketika di refresh
function saveList() {
  const ol = document.getElementById("todo-list");
  const li = ol.getElementsByTagName("li");
  const todos = [];

  for (let i = 0; i < li.length; i++) {
    todos.push(li[i].textContent);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
}

// 6. buat loadList() untuk memuat list yang sudah disimpan di local storage

function loadList() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  const ol = document.getElementById("todo-list");

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.textContent = todos[i];
    ol.appendChild(li);
  }
}

// 6. hapus list dari local storage
function clearList() {
  localStorage.removeItem("todos");
}
