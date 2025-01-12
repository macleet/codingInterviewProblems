/*
There are three types of edits that can be performed on strings: 
insert a character
remove a character
replace a character

Given two strings, write a function to check if they are one edit (or zero edits) away. 

EXAMPLE 
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false 
*/

function oneAway(str1, str2) {
  if (str1.length === str2.length) return replace(str1.split(""), str2.split(""));
  else if (str1.length + 1 === str2.length) return insert(str2, str1);
  else if (str1.length === str2.length + 1) return insert(str1, str2);
  return false;
}
  
function replace(str1, str2) {
  let replaced = false;
  for (let i = 0; i < str1.length; i++) {
    if (!replaced && str1[i] !== str2[i]) replaced = true;
    else if (replaced && str1[i] !== str2[i]) return false;
  }
  return true;
}

function insert(str1, str2) {
  
}

console.log(oneAway("pale", "payy"));