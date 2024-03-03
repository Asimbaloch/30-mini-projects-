const task= document.querySelector('#task_name')
const task_added=document.querySelector('.add')
const content=document.querySelector('.content');

function addtask() {

    if (task.value==='') {
        alert('Please enter something');
    }

    else {
        let li = document.createElement('li'); 
        li.innerHTML = task.value; 
        content.appendChild(li); 
    }
  }