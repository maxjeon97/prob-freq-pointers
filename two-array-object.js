/**This should take two arrays of possibly-different lengths.
/The first array consists of keys and the second one consists of values.
/This should return an object created from the keys and values. If there are not
enough values, the rest of keys should have a value of null. If there not enough
 keys, just ignore the rest of values.
*/

/**
 * Test Cases:
 * twoArrayObject(['x', 'y', 'z'], [1, 2]);
  // {'x': 1, 'y': 2, 'z': null}

  twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
  // {'a': 1, 'b': 2, 'c': 3}
 */


/**
 * Sudo: Go through the first array add the element at that index to the object
 * as a key add the element at the same index from the second array as the value
 * for the corresponding key
 *
 * if the furst array is empty return empty obj
 */






/**Takes two arrays and returns an object containing the elements of the first
 * array as the keys and the correspding elementd of the second array as the
 * values.If there are not enough values, the rest of keys should have a value
 * of null. If there not enough keys, just ignore the rest of values.
 */
function twoArrayObject(keys, values) {
  if (keys.length === 0) {
    return {};
  }

  let arrayPairs = {};

  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      arrayPairs[keys[i]] = null;
    } else {
      arrayPairs[keys[i]] = values[i];
    }
  }
  return arrayPairs;

}

