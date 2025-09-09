function optionalMultiplier(param1?: string | number,
                            param2?: string | number,
                            param3?: string | number
):number {
    const num1 = param1 !== undefined ? Number(param1) : 1;
    const num2 = param2 !== undefined ? Number(param2) : 1;
    const num3 = param3 !== undefined ? Number(param3) : 1;

    if (param1 === undefined && param2 === undefined && param3 === undefined) {
        return 1;
    }

    return num1 * num2 * num3;
}

console.log(optionalMultiplier('3', 5, '10'))
console.log(optionalMultiplier(undefined, 2, 3))


