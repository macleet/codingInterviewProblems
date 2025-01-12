// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the additional characters, 
// and that you are given the "true" length of the string. 
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

// O(n) time and O(1) space (in-place)

function urlify(str, length) {
    for (let i = length - 1, j = str.length - 1; i >= 0; i--) {
        if (str[i] === " ") {
            str[j--] = "0";
            str[j--] = "2";
            str[j--] = "%";
        } else {
            str[j--] = str[i];
        }
    }
    return str.join("");
}

const testStr = "My favorite food is bologna";
const str = testStr.split("");
let spaceCount = str.filter((c) => c === " ").length;
while (spaceCount > 0) {
    str.push(" ", " ");
    spaceCount--;
}

console.log(urlify(str, testStr.length));