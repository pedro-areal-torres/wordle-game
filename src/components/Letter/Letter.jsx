import React, { useContext, useEffect } from 'react';

import './letter.css';
import { AppContext } from '../../App';

function Letter({ letterPos, attemptVal }) {
  const {
    board, setDisabledLetters, currAttempt, correctWord,
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  /*
  Rules
  Correct: The letter is in the word and in the correct spot.
  Almost: The letter is in the word but in the wrong spot.
  Error: The letter is not in the word in any spot.
  */
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
  const letterState = currAttempt.attempt > attemptVal
    && (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
