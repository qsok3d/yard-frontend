import React from 'react';

import developmentLogo from '../../img/compass-development-logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
   <section className="logotype">
    <Grid fluid>
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={6}>
            <img src={developmentLogo} alt="" className="logotype__pic" />
          </Col>
        </Row>
      </Col>
      </Row>
    </Grid>
  </section>
  )
}