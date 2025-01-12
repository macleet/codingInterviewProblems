//  Given two strings, write a method to decide if one is a permutation of the other

function permutation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const letters = new Map();
    for (const c in s2) {
        if (letters.has(c)) {
            letters[c]++;
        } else {
            letters[c] = 1;
        }
    }

    for (const c of s1) {
        letters[c]--;
        if (letters[c] < 0) {
            return false;
        }
    }
    return true;
}
    
console.log(permutation("abcdddd", "dcadddb"));