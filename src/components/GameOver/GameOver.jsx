import React, { useContext } from 'react';
import { IoMdRefresh } from 'react-icons/io';

import './gameOver.css';
import { AppContext } from '../../App';

const GameOver = () => {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="gameOver">
      {/* Display Game Over Message */}
      <h3 className={`gameover__message ${gameOver.guessedWord ? 'gameover__congrats' : 'gameover__lost'}`}>
        {gameOver.guessedWord
          ? 'Congratulations!'
          : `Correct Word: ${correctWord}`}
      </h3>

      {/* Display Attempts if Guessed Correctly */}
      {gameOver.guessedWord && (
        <h3 className="gameover__attempts">
          You guessed in {currAttempt.attempt} attempts
        </h3>
      )}

      {/* Play Again Button */}
      <button className="gameover__button" onClick={refreshPage}>
        Play Again <IoMdRefresh />
      </button>
    </div>
  );
};

export default GameOver;
