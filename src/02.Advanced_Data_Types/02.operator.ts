function operator(
    param: string | number | string[], 
    operation: 'Index' | 'Length' | 'Add', 
    operand: number
): string | number | string[] | undefined {
    
    if (operation === 'Index') {
        if (typeof param === 'string' || Array.isArray(param)) {
            if (operand >= 0 && operand < param.length) {
                return param[operand];
            }
            return undefined; // Index out of bounds
        }
        return undefined; // Invalid type for Index operation
    }
    
    if (operation === 'Length') {
        if (typeof param === 'string' || Array.isArray(param)) {
            return param.length;
        }
        return undefined; // Invalid type for Length operation
    }
    
    if (operation === 'Add') {
        if (typeof param === 'number') {
            return param + operand;
        }
        return undefined; // Invalid type for Add operation
    }
    
    return undefined; // Unknown operation
}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1))