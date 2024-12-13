import React from 'react';
import './board.css';
import Letter from '../Letter/Letter';

const Board = () => {
  const ROWS = 6;
  const COLUMNS = 5;

  return (
    <div className="board">
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div key={rowIndex} className="board__row">
          {Array.from({ length: COLUMNS }).map((_, colIndex) => (
            <Letter key={colIndex} letterPos={colIndex} attemptVal={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
