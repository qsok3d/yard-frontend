import React, {Component} from 'react';
import Photo from './Photo';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default() =>{
    return (
      <section className="complex__gallery">
      <div className="complex__gallery__wrapper">
        <div className="complex__gallery__images">
          <Photo 
            url = "img/bitmap1.png"
          />
          <Photo 
             url = "img/bitmap2.png"
          />
          <Photo 
             url = "img/bitmap3.png"
          />
          <Photo 
             url = "img/bitmap4.png"
          />
          <Photo 
             url = "img/bitmap5.png"
          />
        </div>
        <Grid fluid>
          <button className="complex__gallery__button">41 фотография</button>
        </Grid>
      </div>
    </section>
    );
};
