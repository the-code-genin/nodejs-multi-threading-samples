const { expose } = require("threads");
const sleep = require('../lib/sleep');

expose(async (secondsArray) => {
    for (let seconds of secondsArray) {
        console.log(await sleep());
    }
});