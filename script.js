window.addEventListener('load',()=>{
  const taskInput  = document.getElementById('task-input');
  const submitButton = document.getElementById('task-submit');
  const taskList = document.getElementById('tasks');

  submitButton.addEventListener('click', (e)=>{
    e.preventDefault();

    if (taskInput.value == '') {
      alert('Please enter something!');
      return;
    };
    const newTasks = document.createElement('div');
    newTasks.classList.add('task');
    
    const newTasks_content = document.createElement('div');
    newTasks_content.classList.add('content');

    const newTasks_input = document.createElement('input');
    newTasks_input.type = 'text';
    newTasks_input.classList.add('text');
    newTasks_input.value = taskInput.value;
    newTasks_input.readOnly = true;

    newTasks_content.appendChild(newTasks_input)
    newTasks.appendChild(newTasks_content);

    taskInput.value = '';

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-delete-left');
    deleteIcon.style.color = "crimson";
    deleteButton.appendChild(deleteIcon);

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    newTasks.appendChild(actions);

    taskList.appendChild(newTasks);
    
    
    editButton.addEventListener("click", ()=>{
      if(editButton.innerText.toLowerCase() == "edit"){
        editButton.innerText = 'Save'
        newTasks_input.readOnly = false;
        newTasks_input.focus();
      }else{
        editButton.innerText = 'Edit'
        newTasks_input.readOnly = true;
      }
    });
    
    deleteButton.addEventListener("click", ()=>{
      taskList.removeChild(newTasks);
    });
    
  });

});
