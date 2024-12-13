import React, { useState, createContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import './App.css';

import { Author, Board, Keyboard, GameOver, Nav } from './components/index';
import { boardDefault, generateWordSet } from './utils/Words';

export const AppContext = createContext();

const App = () => {
  // State
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState('');
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  // Load word set and today's word
  useEffect(() => {
    const fetchWords = async () => {
      const words = await generateWordSet();
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    };
    fetchWords();
  }, []);

  // Handlers
  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    const currWord = board[currAttempt.attempt].join('');

    if (wordSet.has(currWord.toUpperCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      Swal.fire({
        title: 'Word not found!',
        text: 'Please try again.',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: 'grey',
        color: 'white',
      });
      return;
    }

    if (currWord.toUpperCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
    } else if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = '';
    setBoard(newBoard);
    setCurrAttempt((prev) => ({ ...prev, letter: prev.letter - 1 }));
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt((prev) => ({ ...prev, letter: prev.letter + 1 }));
  };

  // Context value
  const contextValue = {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    correctWord,
    onSelectLetter,
    onDelete,
    onEnter,
    setDisabledLetters,
    disabledLetters,
    gameOver,
  };

  return (
    <div className='App'>
      <Nav />
      <AppContext.Provider value={contextValue}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
