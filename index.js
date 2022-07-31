function isEqual(var1, var2) {
    if (typeof var1 === 'object' && typeof var2 === 'object') {
        // Checking equality for each of the inner values of the objects
        const keys = [...new Set([...Object.keys(var1), ...Object.keys(var2)])];
        return keys.every(key => isEqual(var1[key], var2[key]) && isEqual(var2[key], var1[key]));
    } else { // Primitive types (number, boolean etc..)
        return var1 === var2; // Normal equality
    }
}

module.exports = isEqual;