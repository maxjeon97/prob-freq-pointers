/**
 *Given two postive integers find out if the two numbers have the same frequency
 * of digits
 */

/**Test Cases:
 * sameFrequency(123, 321);   // true
   sameFrequency(34, 14);     // false
   sameFrequency(22, 22);     // true
   sameFrequency(22, 222);    // false

 */


/**Get the frequencies ofeach number.
 *
 * controller function sets variables equal to the two inputs called on the set
 * frequncy function. Iterate through first number checks to see if it is in
 * and checks to see if it equals the same
 *
 * false safe makes sure lengths are same
 */


/**Takes two numbers, sets variable equal to the frequency of each number by
 * using the getNumberFrequency function. Compares the two variables to see if
 * the frequency is the same. Returns false if they do not, true if they do.
 */
function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }

  const numOneFrequency = getNumberFrequency(num1);
  const numTwoFrequency = getNumberFrequency(num2);

  for (let num in numOneFrequency) {
    if (!(num in numTwoFrequency)) {
      return false;
    }
    if (numOneFrequency[num] !== numTwoFrequency[num]) {
      return false;
    }
  }

  return true;
}

/** Takes a number, turns it into a string, goes through the string and
 * adds the frequency of digits to an object. Returns the object
*/
function getNumberFrequency(num) {
  const stringNumber = num.toString();
  const numberFrequency = {};
  for (let num of stringNumber) {
    let currentNum = numberFrequency[num] || 0;
    numberFrequency[num] = currentNum + 1;
  }
  return numberFrequency;
}