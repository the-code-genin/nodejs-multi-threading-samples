import workerThreads from 'worker_threads'
import os from 'os'
import sleep from './sleep';



(async () => {
    let startTime = Date.now();
    for (let i = 1; i <= 5; i++) {
        console.log(await sleep(1000));
    }
    let endTime = Date.now();

    console.log('Used: ', endTime - startTime, 'milli-seconds');
})();