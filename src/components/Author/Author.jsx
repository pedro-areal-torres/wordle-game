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
        href="https://fancy-naiad-6fa5fa.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="author__btn">Contact the author</button>
      </a>
    </div>
  );
}

export default Author;
