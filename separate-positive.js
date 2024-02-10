// add whatever parameters you deem necessary & write docstring
/**This should take an array of non-zero numbers. Separate the positive numbers
 * to the left and the negative numbers to the right. The positive numbers and
 * negative numbers need not be in sorted order.
 * The problem should be done in place, and the function should return the
 * original array, not a copy.
 *
 * test cases:
 * separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
 * separatePositive([-5, 5]);                // [5, -5]
 * separatePositive([1, 2, 3]);              // [1, 2, 3]
 *
 * pseudo:
 * multiple pointers question
 * assign left and right variables to the beginning and end of the array
 * while loop (left < right)
 * if left is positive
 *  left++;
 * if left is a negative number
 *  if right is a negative number
 *    right--;
 *  if right is positive, switch the two values
 *  [-3, 4, 5, -5, 3] => [3, 4, 5, -5, -3]
 */

/** given an array of non-zero numbers, returns the same array with the positive
 * numbers on the left side, and the negative numbers on the right side
 */
function separatePositive(nums) {
  if(nums.length === 0) {
    return nums;
  }
  let left = 0;
  let right = nums.length - 1;
  // let's start on the left and work our way rightwards
  while(left < right) {
    // if value at the left is positive, move left pointer
    if(nums[left] > 0) {
      left++;
    }
    if(nums[left] < 0) {
      // if the value at the right is negative, move right pointer
      if(nums[right] < 0) {
        right--;
      }
      //switch the values here and move the pointers bc we have finished
      // checking those values
      else if(nums[right] > 0) {
        // initialize variables to store the values at the indexes
        let rightNum = nums[right];
        let leftNum = nums[left];
        nums[left] = rightNum;
        nums[right] = leftNum;
        left++;
        right--;
      }
    }
  }
  return nums;
}
