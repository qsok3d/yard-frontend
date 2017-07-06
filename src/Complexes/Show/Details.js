import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Detail from './Detail.js';

export default () => {
  return (
   <section className="complex__details">
      <Grid fluid>
        <h3 className="complex__details__title">Характеристики</h3>
        <Row>
          <Col xs={4}>
            <Detail 
              termin = "Количество квартир"
              description = "1503" 
            />
            <Detail 
              termin = "Статус"
              description = "Квартиры"
            />
            <Detail 
              termin = "Цены"
              description = "от 5.3 до 143.5 млны"
            />
            <Detail 
              termin = "Безопасность"
              description = "Охраняемая территория"
            />
          </Col>
          <Col xs={4}>
            <Detail 
              termin = "Конструкция корпусов"
              description = "монолит" 
            />
            <Detail 
              termin = "Площадь"
              description = "от 50 до 154 м²"
            />
            <Detail 
              termin = "Высота потолков"
              description = "3.45 - 5 м"
            />
            <Detail 
              termin = "Обслуживание"
              description = "1 200 руб / м² / месяц"
            />
          </Col>
          <Col xs={4}>
            <Detail 
              termin = "Начало строительства"
              description = "I квартал 2012 года" 
            />
            <Detail 
              termin = "Конец строительства"
              description = "IV квартал 2018 года"
            />
            <Detail 
              termin = "Наземная парковка"
              description = "1 500 м/м"
            />
            <Detail 
              termin = "Подземная парковка"
              description = "Нет"
            />
          </Col>
        </Row>
      </Grid>
    </section>
  )
}