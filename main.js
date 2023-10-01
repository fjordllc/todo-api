document.addEventListener('DOMContentLoaded', async function() {
  const todosElment = document.querySelector('#todos');
  const todos = await getTodos();
  console.log(todos);

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.classList.add(`todo_${todo.id}`);
    li.textContent = todo.body;
    todosElment.appendChild(li)
  });

});


async function getTodos() {
  const url = 'http://localhost:8000/api/tables/todos/rows';
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

async function deleteTodo(id) {
  const url = `http://localhost:8000/api/tables/todos/rows/${id}`;
  const response = await fetch(url, { method: 'DELETE' });
  const json = await response.json();
  return json.data;
}
