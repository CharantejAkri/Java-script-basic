document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.className = 'delete';
  delBtn.onclick = () => li.remove();

  li.onclick = () => li.classList.toggle('done');
  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
}
 
