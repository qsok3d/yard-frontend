import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <section className="complex__landmark">
        <Grid fluid>
          <Row>
            <Col xs={6}>
              <p className="complex__landmark__name">Якиманка</p>
              <h5 className="complex__landmark__title">Исторический центр Москвы в двух километрах от Кремля</h5>
              <a href="#" className="complex__landmark__link">Гид по Якиманке</a>
            </Col>
            <Col xs={6}>
              <img src="img/polyanka-photo.png" alt="" className="complex__landmark__pic" />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <img src="img/map.png" alt="" className="complex__landmark__map" />
            </Col>
            <Col xs={6}>
              <div className="complex__landmark__near">
                <div className="landmark__near__item">
                  <h6 className="landmark__near__place">Красный Октрябрь</h6>
                  <p className="landmark__near__distance">24 минуты, 6 км</p>
                </div>
                <div className="landmark__near__item">
                  <h6 className="landmark__near__place">World className</h6>
                  <p className="landmark__near__distance">2 минуты, 300 м</p>
                </div>
                <div className="landmark__near__item">
                  <h6 className="landmark__near__place">Третьяковская галерея</h6>
                  <p className="landmark__near__distance">14 минут, 4 км</p>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
  )
}