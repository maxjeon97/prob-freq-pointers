// add whatever parameters you deem necessary & write docstring
/**
 * constraints: time complexity: O(n)
 *
 * test cases:
 * averagePair([1, 2, 3], 2.5);         // true
 * averagePair([3, 3, 6, 12, 19], 8);   // false
 * averagePair([1, 2, 3], 2);           // true
 * averagePair([], 4);                  // false
 *
 * create a calcAverage helper function
 *
 * use multiple pointers
 * assign left and right variables to the beginning and ends of the input array
 * using a while loop as long as left < right
 *  average the numbers at the left and right indexes and check to see if
 *  greater than or equal to the targetAvg
 *  if less than, move left pointer
 *  if greater, move right pointer
 *  if calculated avg = targetAvg
 *    return true
 * return false if loop has concluded
 */


/** given a sorted array of numbers, nums, and a numeric target, targetAvg,
 * determine if there is a pair of numbers in nums where the average of the pair
 * equals targetAvg. There may be more than one pair.
 * returns a boolean value
 */
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    let average = calcAverage(nums[left], nums[right]);
    if(average === targetAvg) {
      return true;
    }
    else if(average < targetAvg) {
      left++;
    }
    else if(average > targetAvg) {
      right--;
    }
  }

  return false;
}

/** given two numbers, return the mathematical average of them */
function calcAverage(num1, num2) {
  return (num1 + num2) / 2;
}

