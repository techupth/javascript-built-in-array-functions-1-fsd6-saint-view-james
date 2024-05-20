let words = ["hello", "world"];
// Start coding here
function getWordLengths(words) {
  console.log(words);
  return words.length;
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
