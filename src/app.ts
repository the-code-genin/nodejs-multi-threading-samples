import {Worker, isMainThread} from 'worker_threads'
import os from 'os'
import sleep from './sleep';
import path from 'path';



(async () => {
    if (isMainThread) {
        let startTime = Date.now();

        let secondsArray: number[] = [];
        for (let i = 1; i <= 20; i++) secondsArray.push(i * 1000);

        // for (let cpu of os.cpus()) {
        //     let worker = new Worker(path.resolve(__dirname, 'app.ts'));
        // }

        for (let seconds of secondsArray) console.log(await sleep());

        let endTime = Date.now();
        console.log('Used:', (endTime - startTime) / 1000, 'seconds');
    } else {

    }
})();