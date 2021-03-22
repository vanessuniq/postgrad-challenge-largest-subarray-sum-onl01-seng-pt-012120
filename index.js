function largestSubarraySum(array) {
    // code to write here
    function sum(total, num) {
        return total + num;
    }
    let start = 1,
        end = array.length - 1,
        max = array.reduce(sum, 0);
    while (start !== end) {
        const max1 = array.slice(start).reduce(sum, 0);
        const max2 = array.slice(0, end).reduce(sum, 0);
        const max3 = array.slice(start - 1, end + 1).reduce(sum, 0);
        max = Math.max(max, max1, max2, max3);

        start++;
        end--;
    };
    return max;
}