import { asyncTask } from './utils/task.util.js';

async function runAsyncTasks() {
    try {
        const r1 = await asyncTask('Task 1', 1000);
        const r2 = await asyncTask('Task 2', 500);

        console.log(r1);
        console.log(r2);
    } catch (err) {
        console.error(err.message);
    }
}

runAsyncTasks();
