import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';


function ItemList(props){
  return (
    <React.Fragment>
      <h4>Item List</h4>
      <hr/>
      {Object.values(props.itemList).map((item) => 
        <Item 
          onClickDelete= {props.onClickingDelete}
          name={item.name}
          quantity={item.quantity}
          description={item.description}
          id= {item.id}
          key= {item.id} />
      )}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onClickingDelete: PropTypes.func
};

export default ItemList ;


