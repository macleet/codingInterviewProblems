/* 
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. 
A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.
EXAMPLE 
  Input: Tact Coa
  Output: True (permutations: "taco cat", "atco eta", etc.) 
*/

function permutationPalindrome(str) {
  const letters = new Map();
  for (let c of str.split("")) {
    if (c === " ") continue;
    c = c.toLowerCase();
    if (letters[c]) letters[c]++;
    else letters[c] = 1;
  }
  
  let oneLetter = 0;
  for (const key in letters) {
    // console.log(key, letters[key])
    if (letters[key] === 1) oneLetter++;
    if (oneLetter > 1) return false;
    if (letters[key] > 1 && letters[key] % 2 !== 0) return false;
  }
  return true;
}

console.log(permutationPalindrome("ssjj2jyjdd"));