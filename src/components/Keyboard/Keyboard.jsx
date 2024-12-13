import React, { useCallback, useEffect, useContext } from 'react';

import './keyboard.css';
import { AppContext } from '../../App';
import Key from '../Key/Key';

const Keyboard = () => {
  const { disabledLetters, gameOver, onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const keyRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'],
  ];

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;

      const key = event.key.toUpperCase();
      if (key === 'ENTER') {
        onEnter();
      } else if (key === 'BACKSPACE') {
        onDelete();
      } else if (
        keyRows.flat().includes(key) // Check if the pressed key exists in any row
      ) {
        onSelectLetter(key);
      }
    },
    [gameOver, onEnter, onDelete, onSelectLetter, keyRows],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className='keyboard'>
      {keyRows.map((row, rowIndex) => (
        <div key={rowIndex} className={`keyboard__line${rowIndex + 1}`}>
          {row.map((key) => (
            <Key
              key={key}
              keyVal={key}
              bigKey={key === 'ENTER' || key === 'DELETE'}
              disabled={disabledLetters.includes(key)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
