// making todo list
// 1. add todo
// make onclick event for add button to add todo to the list

// make the
function addTodo(event) {
  event.preventDefault(); // Mencegah form submit

  var todo = document.getElementById("todo-entry-box").value;

  if (todo.trim() !== "") {
    // Memastikan input tidak kosong atau hanya berisi spasi
    var ol = document.getElementById("todo-list");
    var li = document.createElement("li");
    // make checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(document.createTextNode(todo));
    ol.appendChild(li);

    // Clear input box after adding the todo item
    document.getElementById("todo-entry-box").value = "";
  }
}

// 2. remove all todo
// make onclick event for remove button to remove all todo from the list
function removeAllTodo() {
  var ol = document.getElementById("todo-list");
  ol.innerHTML = "";
}

// 3. make todo item checked when double clicked
// make onclick event for todo item to make it checked
// Menambahkan event listener untuk item todo yang di-double-click
document
  .getElementById("todo-list")
  .addEventListener("click", function (event) {
    // Pastikan target adalah elemen li
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  });

// 4. remove todo that contain checked class
// make onclick event for remove button to remove all todo from the list
function removeCheckedTodo() {
  const ol = document.getElementById("todo-list");
  const li = ol.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.contains("checked")) {
      ol.removeChild(li[i]);
    }
  }
}
