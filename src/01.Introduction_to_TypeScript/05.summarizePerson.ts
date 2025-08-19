function summarizePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName: string = '',
    hobbies: string[] = [],
    workInfo?: [string, number]
): [number, string, number, string, string] {

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`
    const hobbiesString = hobbies.length ? hobbies.join(', ') : '-'
    const workInfoString = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-'

    return [id, fullName, age, hobbiesString, workInfoString]
}

console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
