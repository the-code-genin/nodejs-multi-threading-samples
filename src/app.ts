import workerThreads from 'worker_threads'
import os from 'os'
import calculatePermutation from './calculate-permutation';



(() => {
    let numbers: number[] = [];
    for (let i = 1; i < 100; i++) numbers.push(i);

    let startTime = Date.now().valueOf()
    for (let number of numbers) {
        console.log(calculatePermutation(number));
    }
    let endTime = Date.now().valueOf()

    console.log('Used: ', endTime - startTime);
})();