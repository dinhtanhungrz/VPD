const http = require('http');
const tasks = require('./data');

const PORT = 3000;

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'application/json');

   
    if (req.url === '/tasks' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(tasks));
    } 
    
    else if (req.url === '/tasks' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const newTask = JSON.parse(body);
            tasks.push(newTask);
            res.writeHead(201);
            res.end(JSON.stringify({ message: "Task added", task: newTask }));
        });
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});


server.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
});
