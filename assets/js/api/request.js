const API_URL = "https://my-json-server.typicode.com/nelovjimenez/Trello"

const ApiClient = axios.create({
    baseURL: API_URL
  });
  
  ApiClient.get(`${API_URL}/tasks`)
    .then((res) => showAllTasks(res.data))
    .catch((err) => console.error(err));
  
  const showAllTasks = (data) => {
    data.map((task) => createTask(task));
   console.log(data)
  };
  
  const createTask = (task) => {
    let newTask = document.createElement('article');
  
    let taskTitle = document.createElement('h3');
    taskTitle.innerText = task.title;
  
    let taskResponsible = document.createElement('p');
    taskResponsible.innerHTML = `<b>Responsable:</b> ${task.user}`;
  
    let taskDate = document.createElement('p');
    taskDate.innerHTML = `<b>Plazo:</b> ${dateFormat(task.timeline)}`;
  
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskResponsible);
    newTask.appendChild(taskDate);
  
    let columnToDo = document.querySelector('#inicio');
    let columnInProgress = document.querySelector('#progreso');
    let columnDone = document.querySelector('#terminado');
  
    if (task.status === 1) {
      columnToDo.appendChild(newTask);
    }
    if (task.status === 2) {
      columnInProgress.appendChild(newTask);
    }
    if (task.status === 3) {
      columnDone.appendChild(newTask);
    }
    console.log(task.status)
  };
