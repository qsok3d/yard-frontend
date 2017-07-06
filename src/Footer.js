import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <footer className="footer">
    <Grid fluid>
      <Row>
        <Col xs={6}>
          <div className="footer__info">
            <h4 className="footer__info__title">ООО «Ярд»</h4>
            <p className="footer__info__text">ОГРН 1175074002531</p>
            <p className="footer__info__text">ИНН 5036165365</p>
            <p className="footer__info__tel">+7 (999) 821-14-88</p>
          </div>
        </Col>
        <div className="col-xs-2">
          <nav className="footer__nav">
            <h4 className="footer__nav__title">Жилые комплексы</h4>
            <a href="" className="footer__nav__link">ВТБ Арена Парк</a>
            <a href="" className="footer__nav__link">Садовые кварталы</a>
            <a href="" className="footer__nav__link">Резиденция Монэ</a>
            <a href="" className="footer__nav__link">Все ЖК Москвы &#x2192</a>
          </nav>
        </div>
        <div className="col-xs-2">
          <nav className="footer__nav">
            <h4 className="footer__nav__title">Компания</h4>
            <a href="" className="footer__nav__link">Команда</a>
            <a href="" className="footer__nav__link">О компании</a>
          </nav>
        </div>
        <div className="col-xs-8 col-xs-offset-4">
          <p className="footer__text">
          Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
          </p>
        </div>
      </Row>
    </Grid>
  </footer>
  )
}