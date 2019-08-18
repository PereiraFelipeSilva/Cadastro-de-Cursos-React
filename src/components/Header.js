import React from 'react';
import Greeting from './Greeting';
import Clock from './Clock';

const Header = () => {

  return (
    <header className="nav-wrapper">
      <nav className="blue lighten-1">
        <a href="/" className="brand-logo">
          <Greeting />
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Clock />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header