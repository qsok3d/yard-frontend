import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <section className="complex__info">
      <Grid fluid>
        <div className="complex__info__wrapper">
          <h2 className="complex__info__title">
            950<small className="complex__info__text">предложений</small>
          </h2>
          <h2 className="complex__info__title">
            John McAslan + Partners<small className="complex__info__text">архитектор</small>
          </h2>
          <h2 className="complex__info__title">
            Группа "ПСН"<small className="complex__info__text">застройщик</small>
          </h2>
        </div>
      </Grid>
    </section>

  )
}