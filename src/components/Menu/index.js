import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import ButtonLink from './componentes/ButtonLink';

function Menu(){
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="MarechaisFlix logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo Vídio
      </ButtonLink>
    </nav>
  );
 }

export default Menu; //