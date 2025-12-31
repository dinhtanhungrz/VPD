//install npm install express cors


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


const users = [
    { id: 1, name: 'Boss Admin', role: 'admin' },
    { id: 2, name: 'User A', role: 'user' }
];

const tasks = [
    { id: 101, title: 'Report', ownerId: 1 },
    { id: 102, title: 'Learn frontend', ownerId: 2 },
    { id: 103, title: 'Fix bug', ownerId: 2 }            
];


app.use(cors());
app.use(express.json());


// Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// AUTH MIDDLEWARE
app.use((req, res, next) => {
    
    const userId = Number(req.headers['user-id']); 
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(401).json({ message: 'Who are u?' });
    }

    req.user = user;
    next();
});

// Route
app.get('/tasks', (req, res) => {
    if (req.user.role === 'admin') {
        return res.json(tasks); 
    }
    
    const userTasks = tasks.filter(t => t.ownerId === req.user.id);
    res.json(userTasks);
});

// Start server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


//test : Get http://localhost:3000/tasks
// Header Key: user-id Value: 2 user or 1 admin
