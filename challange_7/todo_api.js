// npm init -y
// npm i express
// npm i mongoose
// npm i dotenv
// npm i nodemon -D

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


let todos = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Build Todo API', completed: true }
];
let nextId = 3;



// GET ALL
app.get('/todos', (req, res) => {
    res.json(todos);
});

// GET BY ID
app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
});

// CREATE
app.post('/todos', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const newTodo = {
        id: nextId++,
        title,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// UPDATE
app.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const todo = todos.find(t => t.id === id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

// DELETE
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ message: 'Todo not found' });

    todos.splice(index, 1);
    res.json({ message: 'Deleted successfully' });
});

// ===== START =====
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

