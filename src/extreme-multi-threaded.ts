import { FunctionThread, spawn, Thread, Worker } from 'threads'
import os from 'os'
import { ObservablePromise } from 'threads/dist/observable-promise';



(async () => {
    let startTime = Date.now();


    // Parse seconds array
    let secondsArray: number[] = [];
    for (let i = 1; i <= 20; i++) secondsArray.push(i);


    // Calculate no of threads to spawn based on number of CPUs
    let noCPUs = os.cpus().length * 2;
    let totalWork = secondsArray.length;
    let maxIndividualWork = Math.floor(totalWork / noCPUs);
    let totalThreadsToSpawn = (maxIndividualWork * noCPUs == totalWork) ? noCPUs : noCPUs + 1;


    // Spawn each thread
    let threads: FunctionThread[] = [];
    let threadResults: ObservablePromise<void>[] = [];
    for (let i = 0; i < totalThreadsToSpawn; i++) {
        let offset = i * maxIndividualWork;
        let limit = offset + maxIndividualWork;
        if (limit > totalWork) limit = totalWork;

        // Spawn the thread
        let workload = secondsArray.slice(offset, limit);
        const divideSleepThread = await spawn(new Worker("./workers/divide-sleep"));
        threads.push(divideSleepThread);
        threadResults.push(divideSleepThread(workload));
    }

    // Execute all results
    await Promise.all(threadResults);

    threads.forEach(thread => Thread.terminate(thread));

    let endTime = Date.now();
    console.log('Used:', (endTime - startTime) / 1000, 'seconds');
})();