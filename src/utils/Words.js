import wordBank from './word-bank.txt';

export const boardDefault = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  // Read the word-bank file and split it
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split('\n');
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      // Build a set instead of a array to avoid performance issues
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
