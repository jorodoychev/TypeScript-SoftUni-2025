"use strict";
function convertArr(arr) {
    const text = arr.join("");
    const length = text.length;
    return [text, length];
}
console.log(convertArr(['How', 'are', 'you?']));
console.log(convertArr(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
//# sourceMappingURL=04.convertArrays.js.map