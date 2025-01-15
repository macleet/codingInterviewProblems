// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUniqueHashTable(s) {
    const letters = {};
    for (const c of s) {
        if (letters[c]) {
            return false;
        } else {
            letters[c] = true;
        }
    }
    return true;
}

function isUniqueSorting(s) {
    s = s.split("").sort().join("");
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            return false;
        }
    }
    return true;
}
