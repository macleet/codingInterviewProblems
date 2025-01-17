/*
You are given a 0-indexed array of unique strings words.

A palindrome pair is a pair of integers (i, j) such that:


	0 <= i, j < words.length,
	i != j, and
	words[i] + words[j] (the concatenation of the two strings) is a palindrome.


Return an array of all the palindrome pairs of words.

You must write an algorithm with O(sum of words[i].length) runtime complexity.

 
Example 1:

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]


Example 2:

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]


Example 3:

Input: words = ["a",""]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["a","a"]


 
Constraints:


	1 <= words.length <= 5000
	0 <= words[i].length <= 300
	words[i] consists of lowercase English letters.

,Checking every two pairs will exceed the time limit. It will be O(n^2 * k). We need a faster way.,If we hash every string in the array, how can we check if two pairs form a palindrome after the concatenation?,We can check every string in words and consider it as words[j] (i.e., the suffix of the target palindrome). We can check if there is a hash of string that can be the prefix to make it a palindrome.
*/