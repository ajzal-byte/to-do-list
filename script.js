window.addEventListener('load',()=>{
  const taskInput  = document.getElementById('task-input');
  const submitButton = document.getElementById('task-submit');
  const taskList = document.getElementById('tasks');

  submitButton.addEventListener('click', (e)=>{
    e.preventDefault();

    if (taskInput.value == '') {
      alert('Please enter something!');
      return;
    }
    console.log('here');
    const newTasks = document.createElement('div');
    newTasks.classList.add('task');
    
    const newTasks_content = document.createElement('div');
    newTasks_content.classList.add('content');

    const newTasks_input = document.createElement('input');
    newTasks_input.type = 'text';
    newTasks_input.classList.add('text')
    newTasks_input.value = taskInput.value;
    newTasks_input.readOnly = true;

    newTasks_content.appendChild(newTasks_input)
    newTasks.appendChild(newTasks_content);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';
    
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    newTasks.appendChild(actions);

    taskList.appendChild(newTasks);
  })
})
