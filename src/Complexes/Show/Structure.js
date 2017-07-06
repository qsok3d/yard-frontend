import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
   <section className="complex__structure">
      <Grid fluid>
        <h3 className="complex__structure__title">Инфраструктура</h3>
        <Row>
          <Col xs={2}>
            <div className="complex__structure__item">Бассейн</div>
            <div className="complex__structure__item">Частная школа</div>
          </Col>
          <Col xs={2}>
            <div className="complex__structure__item">Детский сад</div>
            <div className="complex__structure__item">Частная школа</div>
          </Col>
          <Col xs={2}>
            <div className="complex__structure__item">Частная школа</div>
            <div className="complex__structure__item">Частная школа</div>
          </Col>
          <Col xs={2}>
            <div className="complex__structure__item">Бассейн</div>
          </Col>
          <Col xs={2}>
            <div className="complex__structure__item">Детский сад</div>
          </Col>
          <Col xs={2}>
            <div className="complex__structure__item">Частная Школа</div>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}