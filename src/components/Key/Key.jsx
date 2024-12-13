import React, { useContext } from 'react';
import { FiDelete } from 'react-icons/fi';

import './key.css';
import { AppContext } from '../../App';

const Key = ({ keyVal, bigKey, disabled }) => {
  const { gameOver, onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;

    switch (keyVal) {
      case 'ENTER':
        onEnter();
        break;
      case 'DELETE':
        onDelete();
        break;
      default:
        onSelectLetter(keyVal);
        break;
    }
  };

  return (
    <div
      className={`key ${bigKey ? 'big' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={selectLetter}
    >
      {keyVal === 'DELETE' ? <FiDelete /> : keyVal}
    </div>
  );
};

export default Key;
