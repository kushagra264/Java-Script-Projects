const addBtn = document.getElementById("add-button");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.classList.add("todo-item");

  li.innerHTML = `
    <span class="todo-text">${text}</span>
    <div class="todo-actions">
      <button class="complete-btn">✅</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";

  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.style.animation = "fadeOut 0.5s forwards";
    li.addEventListener("animationend", () => li.remove());
  });
}
