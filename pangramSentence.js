// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(sentence) {
    // Create a set to store unique letters.
    let uniqueLetters = new Set();

    // Iterate over each character in the sentence.
    for (let i = 0; i < sentence.length; i++) {
        let character = sentence[i].toLowerCase();

        // Add the character to the set if it's a letter.
        if (character >= 'a' && character <= 'z') {
            uniqueLetters.add(character);
        }
    }

    // A sentence is a pangram if it uses 26 letters
    return uniqueLetters.size === 26;
}

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))

// The runtime complexity of isPangram is 0(n) because the function iterates over the sentence once.