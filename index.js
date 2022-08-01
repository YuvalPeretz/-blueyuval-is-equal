function circularObjectFix(obj) {
    var cache = [];
    const newObject = JSON.parse(JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            // Duplicate reference found, discard key
            if (cache.includes(value)) return;

            // Store value in our collection
            cache.push(value);
        }
        return value;
    }));

    cache = null; // Enable garbage collection

    return newObject;
}

/**
 * Checks equality of two values
 * @param {any} var1 
 * @param {any} var2 
 * @returns {boolean}
 */
function isEqual(var1, var2) {
    if (typeof var1 === 'object' && typeof var2 === 'object') {
        // Ensures circular object is fixed
        var1 = circularObjectFix(var1);
        var2 = circularObjectFix(var2);
        // Checking equality for each of the inner values of the objects
        const keys = [...new Set([...Object.keys(var1), ...Object.keys(var2)])];

        return keys.every(key => isEqual(var1[key], var2[key]) && isEqual(var2[key], var1[key]));
    } else { // Primitive types (number, boolean etc..)
        return var1 === var2; // Normal equality
    }
}

module.exports = isEqual;