export default function sleep(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now().toString());
        }, 1000);
    })
}