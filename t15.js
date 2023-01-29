function wordToNumber(word) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i < word.length; i++) {
      result.push(alphabet.indexOf(word[i]) + 1);
    }
    return result;
  }

console.log(wordToNumber("man i need"));