document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const dateInput = document.getElementById('todo-date');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', function(e) {
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
    li.innerHTML = `<span class="task">${task}</span> <span class="date">${date}</span>`;
    list.appendChild(li);
    // Reset form
    input.value = '';
    dateInput.value = '';
  });
});
