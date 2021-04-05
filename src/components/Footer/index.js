import React from 'react';

import { FooterPage } from './style';

import Logo from '../../assets/logo.svg';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';

function Footer() {
  return (
    <FooterPage className="row">
    <div className="col-lg-3 col-md-12 col-sm-12 logo-social">
      <img src={Logo} />
      <div className="social-media">
        <a href=""><img src={Instagram} /></a>
        <a href=""><img src={Facebook} /></a>
        <a href=""><img src={Linkedin} /></a>
      </div>
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12 footer-menus">
      <h3>DESTINOS</h3>
      <a href="#">CONHEÇA OS DESTINOS</a>
      <a href="#">NOS CONTE SOBRE UM DESTINO</a>
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12 footer-menus">
      <h3>SUPORTE</h3>
      <a href="#">RELATAR UM BUG</a>
      <a href="#">PROBLEMAS COM A NEWSLATTER</a>
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12 footer-menus">
      <h3>CONTATO</h3>
      <a href="#">FALE CONOSCO</a>
      <a href="#">PARCERIAS E ANÚNCIOS</a>
      <a href="#">SOBRE A TRIPTIPS</a>
    </div>
  </FooterPage>
  );
}

export default Footer;