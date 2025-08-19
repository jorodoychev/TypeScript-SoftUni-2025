function isEvenSum(input: number[]): boolean {
    const sum = input.reduce((a: number, b: number) => a + b, 0)
    return sum % 2 === 0
}

console.log(isEvenSum([1, 2, 3, 4, 5, 6]));

