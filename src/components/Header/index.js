import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import { Menu } from './style';

function Header() {
  return (
    <Menu>
        <Link to="/"><img src={Logo} /></Link>
        <ul>
          <Link to='/destiny'><li>DESTINOS</li></Link>
          <a href="#moreSearch"><li>MAIS PROCURADOS</li></a>
          <a href="/#newslatter"><li className="btn btn-menu">PARTICIPAR DA NEWSLATTER</li></a>
        </ul>
    </Menu>
  );
}

export default Header;