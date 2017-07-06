import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
   <section className="complex__title">
      <Grid fluid>
        <div className="complex__title__wrapper">
          <div className="complex__title__name">
            <h2 className="complex__name__caption">Жилой комплекс «Полянка/44»</h2>
            <p className="complex__name__text">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
          </div>
          <button className="complex__title__button">В избранное</button>
        </div>
      </Grid>
    </section>
  )
}