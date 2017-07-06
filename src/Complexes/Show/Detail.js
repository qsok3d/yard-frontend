import React, {Component} from 'react';

class Detail extends Component {
  render() {
    return (
      <dl className="complex__details__list">
        <dt className="details__list__termin">{this.props.termin}</dt>
        <dd className="details__list__description">{this.props.description}</dd>
      </dl>
    );
  };
}

export default Detail;