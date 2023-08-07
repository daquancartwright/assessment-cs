const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// Define an array of arrays to loop over
const arrays = [
    {name: 'tinyArray', array: tinyArray},
    {name: 'smallArray', array: smallArray},
    {name: 'mediumArray', array: mediumArray},
    {name: 'largeArray', array: largeArray},
    {name: 'extraLargeArray', array: extraLargeArray}
]

// Loop over the arrays array
for(let arr of arrays){
    // Measure the time it takes to double all elements in the current array using doublerAppend
    perf.start(); // Start the timer
    doublerAppend(arr.array); // Perform the operation
    let resultsAppend = perf.stop(); // Stop the timer and save the results

    // Measure the time it takes to double all elements in the current array using doublerInsert
    perf.start(); // Start the timer
    doublerInsert(arr.array); // Perform the operation
    let resultsInsert = perf.stop(); // Stop the timer and save the results

    // Print the results for the current array
    console.log(`Results for the ${arr.name}`);
    console.log("insert", resultsInsert.preciseWords);
    console.log("append", resultsAppend.preciseWords);
}

// How long does it take to double every number in a given 
// array? 

// ```
// tinyArray
// insert 37.2 μs
// append 85 μs

// smallArray
// insert 24.2 μs
// append 12.8 μs

// mediumArray
// insert 97.3 μs
// append 35.8 μs

// largeArray
// insert 6.7843 ms
// append 303.9 μs

// extraLargeArray
// insert 870.7696 ms
// append 2.1518 ms
// ```

// ```
// Explanation:

// The doublerAppend method uses .push() which adds an element to the end of the array. Which is fast because it doesn't require any rearrangement. The doublerInsert method uses .unshift(). Which adds an element to the beginning of an array, causing all elements to shift to make space for the shifted element. This means that it has a longer execution time that scales with the size of the array, so as the array size grows the time becomes exponentially longer to execute.
// ```



// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


