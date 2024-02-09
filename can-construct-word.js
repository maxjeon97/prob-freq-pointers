// add whatever parameters you deem necessary & write doc comment
/** test cases:
 * canConstructWord("aa", "abc") => false
 * canConstructWord("abc", "dcba") => true
 * canConstructWord("aabb", "bcabad") => true
 *
 * create frequency counter helper function
 *
 * within conductor function create two frequency counters, one for each input
 * iterate through the word frequency counter and for each letter (key),
 * check to see if the corresponding letters frequency counter key contains
 * enough amount to create the word
 * */

/** given two strings, word and letters, return true if the word can be
 * built from the letters; otherwise return false
 * there are only lowercase letters so no need to worry about case
 *
 * Constraints: time complexity must be O(n)
*/
function canConstructWord(word, letters) {
  if(word.length > letters.length) {
    return false;
  }
  const wordFreqs = getLetterFrequency(word);
  const lettersFreqs = getLetterFrequency(letters);
  for(let letter in wordFreqs) {
    //check to see if lettersFreqs contains the letter in the first place
    if(lettersFreqs[letter] === undefined) {
      return false;
    }
    //since we know that the letter exists within both counters, check to see
    //  whether or not lettersFreqs has enough of that letter to construct
    //  the word
    if(wordFreqs[letter] > lettersFreqs[letter]) {
      return false;
    }
  }
  //if all conditions pass within for loop, return true
  return true;
}

/** given a string, create a frequency counter object containing the
 * letters and the number of times they appear as key-value pairs
 */
function getLetterFrequency(string) {
  const letterFrequency = {};
  for(let letter of string) {
    const count = letterFrequency[letter] || 0;
    letterFrequency[letter] = count + 1;
  }
  return letterFrequency;
}
