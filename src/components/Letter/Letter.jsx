import React, { useContext, useEffect, useMemo } from 'react';
import './letter.css';
import { AppContext } from '../../App';

const Letter = ({ letterPos, attemptVal }) => {
  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  // Determine the letter's state
  const letterState = useMemo(() => {
    const isCorrect = correctWord.toUpperCase()[letterPos] === letter;
    const isAlmost = !isCorrect && letter !== '' && correctWord.toUpperCase().includes(letter);
    return currAttempt.attempt > attemptVal ? (isCorrect ? 'correct' : isAlmost ? 'almost' : 'error') : '';
  }, [correctWord, letter, letterPos, attemptVal, currAttempt.attempt]);

  useEffect(() => {
    if (letter !== '' && letterState === 'error') {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [letter, letterState, setDisabledLetters]);

  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
