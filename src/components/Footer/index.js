import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import LogoMarechais from '../../assets/img/LogoMarechais.png'


function Footer() {
  return (
    <FooterBase>
      <Link to="/">
          <img className="Logo" src={LogoMarechais} alt="MarechaisFlix logo" />
      </Link>
      
     
      <p>
        Associação Desportista Maceio Marechais
        {' '}
        <a href="/">
          CNPJ: 17639203000125
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
