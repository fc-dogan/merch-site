import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Quantity:</strong> {props.quantity}</p>
      <p><strong>Description:</strong> {props.description}</p>
      <button onClick={()=> props.onClickDelete(props.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  onClickDelete: PropTypes.func
}

export default Item;