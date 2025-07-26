document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const dateInput = document.getElementById('todo-date');
  const list = document.getElementById('todo-list');

  function updateNoTasksPlaceholder() {
    if (list.children.length === 0) {
      const li = document.createElement('li');
      li.className = 'no-tasks';
      li.textContent = 'No tasks added';
      list.appendChild(li);
    } else {
      const placeholder = list.querySelector('.no-tasks');
      if (placeholder) placeholder.remove();
    }
  }

  updateNoTasksPlaceholder();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = input.value.trim();
    const date = dateInput.value;
    if (!task || !date) {
      alert('Please enter both a task and a date.');
      return;
    }
    const today = new Date();
    today.setHours(0,0,0,0);
    const selectedDate = new Date(date);
    if (selectedDate < today) {
      alert('Cannot select a date in the past.');
      return;
    }
    // Create list item
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `<div class="item-left"><input type="checkbox" class="done-checkbox"> <span class="task">${task}</span> <span class="date">${date}</span></div><button class="delete-btn">Delete</button>`;
    list.appendChild(li);
    input.value = '';
    dateInput.value = '';
    updateNoTasksPlaceholder();

    li.querySelector('.done-checkbox').addEventListener('change', function(e) {
      li.classList.toggle('done', e.target.checked);
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
      li.remove();
      updateNoTasksPlaceholder();
    });
  });

  document.getElementById('filter-tasks').addEventListener('change', function (e) {
    updateNoTasksPlaceholder();
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
    if (confirm('Are you sure you want to clear all tasks?')) {
      list.innerHTML = '';
      updateNoTasksPlaceholder();
    }
  });
});