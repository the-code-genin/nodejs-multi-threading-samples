export default function sleep(seconds: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now().toString());
        }, seconds);
    })
}