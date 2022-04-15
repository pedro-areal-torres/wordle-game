import React from 'react';

import './author.css';

function Author() {
  return (
    <div className="author">
      <a
        href="https://github.com/pedro-areal-torres/Wordle-Game"
        target="_blank"
        rel="noreferrer"
      >
        <button className="author__btn">GitHub Code</button>
      </a>
      <a
        href="http://www.pedro-areal-torres.me/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="author__btn">Author's Profile</button>
      </a>
    </div>
  );
}

export default Author;
