"use strict";
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    let fullName = `${firstName} ${lastName}`;
    if (middleName && middleName !== '') {
        fullName = `${firstName} ${middleName} ${lastName}`;
    }
    let hobbiesString = '-';
    if (hobbies && hobbies.length > 0) {
        hobbiesString = hobbies.join(', ');
    }
    let workInfoString = '-';
    if (workInfo) {
        workInfoString = `${workInfo[0]} -> ${workInfo[1]}`;
    }
    return [id, fullName, age, hobbiesString, workInfoString];
}
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
//# sourceMappingURL=05.summarizePerson.js.map