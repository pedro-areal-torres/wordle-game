import React from 'react';

import './nav.css';
import PT from '../../assets/pt-logo.png';

function Nav() {
  return (
    <nav>
      <a
        href="http://www.pedro-areal-torres.me/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={PT} alt="Author" className="nav__logo" />
      </a>
      <h1>Wordle</h1>
    </nav>
  );
}

export default Nav;
