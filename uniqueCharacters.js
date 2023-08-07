// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function uniqueCharacters(s) {
    let characters = {};

    // Iterate over each character in string
    for (let i = 0; i < s.length; i++) {
        let character = s[i];

        // Return false if character isn't unique
        if (characters[character]) {
            return false;
        }

        characters[character] = true;
    }

    // If there are no duplicates        
    return true
}

console.log(uniqueCharacters('DaQun'))

// The runtime complexity is O(n) because the function iterates over the word once.