import React, {Component} from 'react';

import cardPic from '../../img/card-pic.jpg';

class Card extends Component {
  render() {
    return (
      <a href="" className="complex__link">
        <img src={cardPic} alt="" className="complex__card__pic" />
        <div className="complex__card__info">
          <p className="complex__card__info__disctrict">{this.props.location}</p>
          <h3 className="complex__card__info__title">{this.props.title}</h3>
          <p className="complex__card__info__description">{this.props.description}</p>
        </div>
      </a>
    );
  };
}

export default Card;