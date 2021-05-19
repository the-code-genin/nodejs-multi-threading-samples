import sleep from './sleep';


(async () => {
    let startTime = Date.now();

    let secondsArray: number[] = [];
    for (let i = 1; i <= 20; i++) secondsArray.push(i);

    for (let seconds of secondsArray) console.log(await sleep());

    let endTime = Date.now();
    console.log('Used:', (endTime - startTime) / 1000, 'seconds');
})();