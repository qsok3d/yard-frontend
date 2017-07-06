import React, {Component} from 'react';

class Offer extends Component {
  render() {
    return (
      <div className="complex__offer">
        <h4 className="complex__offer__title">{this.props.title}</h4>
        <dl className="complex__offer__info">
          <dt className="offer__info__title">Площадь</dt>
          <dl className="offer__info__value">{this.props.squre}</dl>
        </dl>
        <dl className="complex__offer__info">
          <dt className="offer__info__title">Стоимость</dt>
          <dl className="offer__info__value">{this.props.value}</dl>
        </dl>
        <button className="offer__info__button">Посмотреть предложения</button>
      </div>
    );
  };
}

export default Offer;