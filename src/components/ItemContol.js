import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class ItemControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [
        {name: "Star Sapphire Ring",
          quantity: 2,
          description: "sugarloaf cabochon, pale mauve star Sapphire, 17.90 carats."},
      ]
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewItemForm />
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemlist} />
      buttonText = "Add a new Item";
    }
    return (
      <React.Fragment>
        <hr/>
        <h1>Item control</h1>
        {currentlyVisibleState}
        <button onclick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default ItemControl;