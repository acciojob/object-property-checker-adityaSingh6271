function hasKey(key) {
    // Check if the global object sampleObject contains the key
    return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Examples
console.log(hasKey("red"));    // true
console.log(hasKey("blue"));   // false
console.log(hasKey("white"));  // true

