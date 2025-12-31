//server express 

const express = require('express');
const tasks = require('./data');

const app = express();
const PORT = 3000;

// Middleware: parse JSON log request
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[LOG] ${req.method} ${req.url}`);
    next(); 
});

// Route: GET /
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Route: GET task
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Route: GET /tasks/:id 
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) res.json(task);
    else res.status(404).json({ message: "Task không tồn tại" });
});

// Route: POST /tasks 
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json({ message: "Task đã thêm", task: newTask });
});

// Route: PUT /tasks/
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        Object.assign(task, req.body); // cập nhật thông tin task
        res.json({ message: "Task đã cập nhật", task });
    } else res.status(404).json({ message: "Task không tồn tại" });
});

// Route: DELETE /tasks/
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        const removed = tasks.splice(index, 1);
        res.json({ message: "delete task", task: removed[0] });
    } else res.status(404).json({ message: "Task không tồn tại" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
});
