import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class ItemControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      allItemList: [
        { name: "Star Sapphire Ring",
          quantity: 2,
          description: "sugarloaf cabochon, pale mauve star Sapphire, 17.90 carats."},
      ]
    };
  }


  render(){
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewItemForm />
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.allItemlist}/>
    }
    return (
      <React.Fragment>
        <hr/>
        <h1>Item control</h1>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default ItemControl;