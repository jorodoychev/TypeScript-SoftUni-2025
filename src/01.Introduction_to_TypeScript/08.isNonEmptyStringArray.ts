function isNonEmptyStringArray(arg: unknown): arg is string[] {
    return Array.isArray(arg) && arg.every(x => typeof x === 'string')
}

let arr: unknown = ['test', '123']

if (isNonEmptyStringArray(arr)) {
    console.log(arr.length)
}

