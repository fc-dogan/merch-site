export default (state={}, action) => {
  const { name, quantity, description, id } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id] : {
          name: name,
          quantity: quantity,
          description: description,
          id: id
        }
      });
    case 'DELETE_ITEM':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}