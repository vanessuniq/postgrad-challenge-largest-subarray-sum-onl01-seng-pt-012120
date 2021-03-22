function largestSubarraySum(array) {
    // code to write here
    let currentSum = 0,
        max = 0;
    for (const num of array) {
        currentSum = Math.max(0, currentSum + num);
        max = Math.max(currentSum, max);
    };
    return max;
}