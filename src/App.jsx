import './App.css';
import React, { useState, createContext, useEffect } from 'react';

import Swal from 'sweetalert2';

import {
  Author, Board, Keyboard, GameOver, Nav,
} from './components/index';
import { boardDefault, generateWordSet } from './utils/Words';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState('');
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = '';
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    // If the word exists move to next attempt
    if (wordSet.has(currWord.toUpperCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      // If the word doesnt exist display an alert to the user
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
    }

    // If the word matches de correct word
    if (currWord.toUpperCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    // If the user fails the last attempt the game is over
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <Nav />
      <AppContext.Provider
        value={{
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
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
      <Author />
    </div>
  );
}

export default App;
