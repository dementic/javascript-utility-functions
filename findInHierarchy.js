function traverse(obj, func) {
    for (i in obj) {
        func.apply(this, [i, obj]);
        if (typeof obj[i] === "object") {
            traverse(obj[i], func, i);
        }
    }
}

function getPropertyRecursive(obj, property, value) {
    var acc = null;
    traverse(obj, function (key, object) {
        if (key === property && object[key] === value) {
            acc = object;
        }
    });
    return acc;
}

// Usage:
var foo = getPropertyRecursive(obj, property, value);
