function largestSubarraySum(array) {
    // code to write here
    // using the Kadane’s algorithm:
    // initialize the current sum variable and the max variable to 0
    let currentSum = 0,
        max = 0;
    // iterate through the array
    for (const num of array) {
        // add each num to the currentSum and check if positive. if negative, set its value to zero
        currentSum = Math.max(0, currentSum + num);
        // if currentSum is greater than max, set max = currentSum, otherwise keep max value the same
        max = Math.max(currentSum, max);
    };
    // return the max once iteration is done.
    return max;
}