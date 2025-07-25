document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const dateInput = document.getElementById('todo-date');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = input.value.trim();
    const date = dateInput.value;
    if (!task || !date) {
      alert('Please enter both a task and a date.');
      return;
    }
    // Create list item
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `<input type="checkbox" class="done-checkbox"> <span class="task">${task}</span> <span class="date">${date}</span> <button class="delete-btn">Delete</button>`;
    list.appendChild(li);
    input.value = '';
    dateInput.value = '';

    li.querySelector('.done-checkbox').addEventListener('change', function(e) {
      li.classList.toggle('done', e.target.checked);
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
      li.remove();
    });
  });
});