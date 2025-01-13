/* 
Implement a method to perform basic string compression using the counts of repeated characters. 

For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string, return the original string. 
Assume the string has only uppercase and lowercase letters (a - z).
*/

function stringCompression(str) {
    let i = 0, j = 0, count = 0, compressedStr = [];
    do {
        if (str[i] !== str[j]) {
            compressedStr.push(str[j], count);
            count = 0;
            j = i;
        }
        count++;
    } while (i++ < str.length);

    
    return str.length <= compressedStr.length ? str : compressedStr.join("");
}

console.log(stringCompression("aabbb")); // a2b1c5a3