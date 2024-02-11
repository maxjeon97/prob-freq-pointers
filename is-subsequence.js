/**This should take two strings, s1 and s2. It checks whether the characters in
 * s1`form a subsequence of the characters in `s2. In other words, this should
 * check whether the characters in the s1 appear somewhere in the s2, without
 * their order changing.
 *
 * test cases:
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting');        // true
 * isSubsequence('abc', 'acb');           // false (order matters)
 *
 * use multiple pointers
 * assign left as the first letter in the first word
 * assign right as the first letter in the second word
 * iterate through the first word using while loop (left < firstword.length)
 *  if right pointer > second word. length
 *    return false
 *  if letter at left is equal to letter at right
 *    move both pointers to the right
 *  if not
 *    move right pointer to the right
 * return true;
 * */

/**given two words, checks whether the characters in the first word appear in
 * the second word in the same order
 */
function isSubsequence(word1, word2) {
  let left = 0;
  let right = 0;
  while(left < word1.length) {
    if(right > word2.length) {
      return false;
    }
    if(word1[left] === word2[right]) {
      left++;
      right++;
    }
    else {
      right++;
    }
  }
  return true;
}
