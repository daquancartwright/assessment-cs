// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function find_longest_word(words) {
    let longestWord = 0;

    // Iterate over each word in arr
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        // If word is longer than longest word update longestWord 
        if (word.length > longestWord) {
            longestWord = word.length;
        }
    }    
    return longestWord
}

console.log(find_longest_word(['one', 'two', 'three', 'four']))

// The runtime complexity is O(n) because we iterate over the list once.