import React, { useContext } from 'react';

import './gameOver.css';
import { IoMdRefresh } from 'react-icons/io';

import { AppContext } from '../../App';

function GameOver() {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="gameOver">
      {gameOver.guessedWord ? (
        <h3 className="gameover__congrats">Congratulations!</h3>
      ) : (
        <h3 className="gameover__lost">
          Correct Word:
          {' '}
          {correctWord}
        </h3>
      )}
      {gameOver.guessedWord && (
        <h3>
          You guessed in
          {' '}
          {currAttempt.attempt}
          {' '}
          attempts
        </h3>
      )}

      <button className="gameover__button" onClick={refreshPage}>
        Play Again
        {' '}
        <IoMdRefresh />
      </button>
    </div>
  );
}

export default GameOver;
