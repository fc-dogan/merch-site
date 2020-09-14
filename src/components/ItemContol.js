import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ItemControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItem = (newItem) =>{
    const { dispatch } = this.props;
    const { id, name, quantitiy, description } = newItem;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      quantitiy: quantitiy,
      description: description
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false });
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

ItemControl.propTypes = {
  allItemList: PropTypes.object
};

ItemControl = connect()(ItemControl);

export default ItemControl;