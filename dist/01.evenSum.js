"use strict";
function isEvenSum(input) {
    const sum = input.reduce((a, b) => a + b, 0);
    return sum % 2 === 0;
}
console.log(isEvenSum([1, 2, 3, 4, 5, 6]));
//# sourceMappingURL=01.evenSum.js.map