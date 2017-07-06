import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Offer from './Offer';

export default () => {
  return (
    <section class="complex__offers">
      <Grid fluid>
        <h3 class="complex__offers__title">Предложения в ЖК «Полянка/44»</h3>
        <Row>
          <Col xs={4}>
            <Offer 
              title = "1-комнатные квартиры"
              squre = "от 59 до 120 м²"
              value = "от 20.3 до 84.2 млн руб"
            />
          </Col>
          <Col xs={4}>
            <Offer 
              title = "2-комнатные квартиры"
              squre = "от 59 до 120 м²"
              value = "от 20.3 до 84.2 млн руб"
            />
          </Col>
          <Col xs={4}>
            <Offer 
              title = "3-комнатные квартиры"
              squre = "от 59 до 120 м²"
              value = "от 20.3 до 84.2 млн руб"
            />
          </Col>
        </Row>
      </Grid>
    </section> 
  )
}