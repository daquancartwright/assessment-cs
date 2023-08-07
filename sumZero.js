// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function sumZero(n) {
    for (let i = 0; i < n.length; i++) {
        for (let j = i; i < n.length; j++) {
            // If pair sums to zero
            if (nums[i] + nums[j] === 0) {
                return true;
            }
        }
    }
    // If no pairs sum to zero
    return false;
}

// Runtime Complexity is O(n^2) because the function iterates over the array twice.