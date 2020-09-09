import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class ItemControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render(){
    return (
      <React.Fragment>
        <h1>Item control</h1>
        <ItemList />
        <NewItemForm />
      </React.Fragment>
    )
  }
}

export default ItemControl;