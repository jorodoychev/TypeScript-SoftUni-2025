function convertArr(arr: string[]): [string, number] {
    const text = arr.join("")
    return [text, text.length]
}

console.log(convertArr(['How', 'are', 'you?']))
console.log(convertArr(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']))
