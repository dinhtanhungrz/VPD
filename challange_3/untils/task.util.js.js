
export function asyncTask(name, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`${name} failed`));
            } else {
                resolve(`${name} done`);
            }
        }, delay);
    });
}
