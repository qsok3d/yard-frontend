import React, {Component} from 'react';

import Title from "./Title";
import Gallery from "./Gallery";
import Info from './Info';
import Details from './Details';
import Declaration from './Declaration';
import Structure from './Structure';
import Offers from './Offers';
import Landmark from './Landmark';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Complex extends Component {
  render() {
    return(
      <main className="complex">
        <Title />
        <Gallery />
        <Info />
        <Details />
        <Declaration />
        <Structure />
        <Offers />
        <Landmark />
      </main>
    )
  }
};

export default Complex;



