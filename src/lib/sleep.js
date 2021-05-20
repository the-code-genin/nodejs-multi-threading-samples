module.exports = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now().toString());
        }, 1000);
    })
}