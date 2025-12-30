export function eventLoopDemo() {
    console.log('Start');

    setTimeout(() => {
        console.log('setTimeout');
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise.then');
    });

    console.log('End');
}
