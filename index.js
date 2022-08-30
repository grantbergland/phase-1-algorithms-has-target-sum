function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}