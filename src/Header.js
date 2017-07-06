import React from 'react';

import logo from './img/compass-logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <header className="header">
    <Grid fluid>
      <div className="header__wrapper">
        <img src={logo} alt="" className="header__logo" />
        <nav className="header__nav">
          <a href="" className="header__nav__link">Купить</a>
          <a href="" className="header__nav__link">Снять</a>
          <a href="" className="header__nav__link">Наши агенты</a>
        </nav>
      </div>
    </Grid>
  </header>
  )
}