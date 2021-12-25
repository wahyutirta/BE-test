/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  let prefix = words.reduce((current, word) => current.length < word.length ? current : word);

  for (word of words) {

    while (!word.includes(prefix)){
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix
}


console.log(result(words));
