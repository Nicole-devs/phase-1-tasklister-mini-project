document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let input =  document.getElementById('new-task-description').value
    console.log(input)

    let todo = document.getElementById('tasks')
    let task = document.createElement('p')
    let delTsk = document.createElement('button')
    task.textContent = input
    delTsk.textContent = 'x'
    delTsk.style.marginLeft = '20px'
    delTsk.style.background ='red'
    delTsk.style.color = 'black'
  
    todo.appendChild(task)
    task.appendChild(delTsk)

    delTsk.addEventListener('mousedown', ()=>{
      delTsk.parentNode.remove()
    })

  })
  
  // your code here
});
