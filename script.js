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
    const newTasks = document.createElement('div');
    newTasks.classList.add('task');
    
    const newTasks_content = document.createElement('div');
    newTasks_content.classList.add('content');

    const newTasks_input = document.createElement('input');
    newTasks_input.type = 'text';
    newTasks_input.classList.add('text')
    newTasks_input.setAttribute('readonly')

    newTasks.appendChild(newTasks_content);
    taskList.appendChild(newTasks);
  })
})