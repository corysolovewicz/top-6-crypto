import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = (props) => (
  <div className="card-wrapper">
    <li className="card">{props.item}</li>
  </div>
);

Card.propTypes = {
  item: PropTypes.any
};

export default Card;
