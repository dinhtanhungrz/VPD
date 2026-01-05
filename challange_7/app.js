const API_URL = 'http://localhost:3000/todos';

async function loadTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();

    const ul = document.getElementById('todoList');
    ul.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id}, this.checked)">
            ${todo.title}
            <button onclick="deleteTodo(${todo.id})">X</button>
        `;
        ul.appendChild(li);
    });
}

async function addTodo() {
    const titleInput = document.getElementById('title');
    const title = titleInput.value.trim();
    if (!title) return;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });

    titleInput.value = '';
    loadTodos();
}

async function toggleTodo(id, completed) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });

    loadTodos();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTodos();
}

// INIT
loadTodos();
