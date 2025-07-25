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
    li.innerHTML = `<div class="item-left"><input type="checkbox" class="done-checkbox"> <span class="task">${task}</span> <span class="date">${date}</span></div><button class="delete-btn">Delete</button>`;
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

  document.getElementById('filter-tasks').addEventListener('change', function (e) {
    const filter = e.target.value;
    const items = list.querySelectorAll('.todo-item');
    items.forEach(function (li) {
      if (filter === 'all') {
        li.style.display = '';
      } else if (filter === 'done') {
        li.style.display = li.classList.contains('done') ? '' : 'none';
      } else {
        li.style.display = li.classList.contains('done') ? 'none' : '';
      }
    });
  });

  document.getElementById('clear-all').addEventListener('click', function () {
    list.innerHTML = '';
  });
});