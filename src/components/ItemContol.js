import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class ItemControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      allItemList: [
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

  handleAddingNewItem = (newItem) =>{
    const newAllItemList = this.state.allItemList.concat(newItem);
    this.setState({allItemList: newAllItemList,
                  formVisibleOnPage: false });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItem}/>
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.allItemList} />
      buttonText = "Add a new Item";
    }
    return (
      <React.Fragment>
        <hr/>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default ItemControl;