import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props){
  return (
    <React.Fragment>
      <h4>Item List</h4>
      {/* <p>{props.itemList}</p>; */}
      {/* {props.itemList.map((item, index) => 
        <Item 
          name={item.name}
          quantity={item.quantity}
          description={item.description}
          key={index} />
      )} */}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList ;


