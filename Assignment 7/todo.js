const tasks = [];

const list = document.getElementById('tasks');
const input = document.getElementById('task');
const form = document.getElementById('control');
const completed = document.getElementById('completed');

form.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  const task = { text: input.value, checked: false };
  tasks.push(task);
  redrawList();
  input.value=''
}

function todoWasChecked(event) {
  const index = event.target.id;
  tasks[index].checked = !tasks[index].checked;
  redrawList();
}

function redrawList() {
  list.innerHTML = '';
  var antallCompleted=0

  for (let task of tasks) {
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    span.innerText = task.text;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', tasks.indexOf(task));
    checkbox.addEventListener('click', todoWasChecked);

    if (task.checked) {
      checkbox.setAttribute('checked', true);
      span.style.textDecoration = 'line-through';
      antallCompleted++;
    }

    // Append the <li> to the <ul>.
    listElement.appendChild(checkbox);
    listElement.appendChild(span);
    list.appendChild(listElement);

  }
  completed.innerText = 'Du har fullført ' + antallCompleted + '/'+ tasks.length + ' av dine gjøremål';

}

redrawList();
