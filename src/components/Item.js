import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <h2><strong>Name:</strong> {props.name}</h2>
      <h3><strong>Quantity:</strong> {props.quantity}</h3>
      <h3><strong>Description:</strong> {props.description}</h3>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string
}

export default Item;