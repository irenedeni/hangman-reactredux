export function pickRandomWord(words) {
  return Array.from(words[Math.floor(Math.random()*words.length)]);
}


export function checkGuess(letter, word) {
  //if (letter.indexOf(word) > -1)
  alert('in function');
  if (word.includes(letter)){
    alert('Correct letter');
    return letter;
  } else {
    alert('Wrong letter');

    return false;
  }
}