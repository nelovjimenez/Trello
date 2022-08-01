const form = document.querySelector('#form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formData = ev.target;

  const days = formData.nombretarea.value;

  const data = {
    title: formData.nombretarea.value,
    user: formData.encargadoTarea.value,
    description: formData.descripciontarea.value,
    timeline: Number(moment().add(7, 'days').format('X')),
    created: Number(moment().add(Number(days), 'days').format('X')),
    status: 1
  };

  ApiClient.post(`${API_URL}/tasks`, data)
    .then((resp) => {
      createTask(resp.data);
      formData.reset();
    })
    .catch((e) => console.error(e));
});
