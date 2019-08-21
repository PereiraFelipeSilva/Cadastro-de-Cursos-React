import React from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
import LinkWrapper from '../Services/LinkWrapper';

const Header = () => {

  return (
    <header className="nav-wrapper">
      <nav className="blue lighten-1">
        <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>
          <Greeting />
        </LinkWrapper>
        <ul id="nav-mobile" className="right">
          <li>
            <Clock />
          </li>
          <li> <LinkWrapper to="/instrutores"> Instrutores </LinkWrapper> </li>
          <li> <LinkWrapper to="/cursos"> Cursos </LinkWrapper> </li>
          <li> <LinkWrapper to="/sobre"> Sobre </LinkWrapper> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header