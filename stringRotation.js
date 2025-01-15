/*
Assume you have a method isSubstring which checks if one word is a substring of another.

Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 

e.g., "waterbottle" is a rotation of "erbottlewat"
*/

// Check if s1 is a substring of s2
function isSubstring(pattern, target) {
    const m = pattern.length, n = target.length;
    for (let i = 0; i <= n - m; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (pattern[j] !== target[i + j]) break;
        }
        if (j === m) return i;
    }
    return -1;
}

function stringRotation(s1, s2) {
    return isSubstring(s2, s1 + s1) > 0;
}

console.log(stringRotation("waterbottle", "erbottlewat"));