import React from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="nav-wrapper">
      <nav className="blue lighten-1">
        <Link to="/" className="brand-logo">
          <Greeting />
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Clock />
          </li>
          <li> <Link to="/instrutores"> Instrutores </Link> </li>
          <li> <Link to="/cursos"> Cursos </Link> </li>
          <li> <Link to="/sobre"> Sobre </Link> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header