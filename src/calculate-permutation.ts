export default function calculatePermutation(a: number): number {
    if (a <= 1) return 1;
    else return a * calculatePermutation(a - 1);
}