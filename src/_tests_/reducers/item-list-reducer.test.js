import itemListReducer from '../../reducers/item-list-reducer';
let action;
const itemData = {
  name: "Marquise Ruby and Diamond Ring",
  quantity: 1,
  description: "Sleek, richly hued marquise-shaped rubies alternate with brilliant bezel-set round diamonds on this delicate anniversary ring, accentuated by the blush of 14k rose gold",
  id: 1
};
const currentState = {
  1: {name: "Marquise Ruby and Diamond Ring",
  quantity: 1,
  description: "Sleek, richly hued marquise-shaped rubies alternate with brilliant bezel-set round diamonds on this delicate anniversary ring, accentuated by the blush of 14k rose gold"
  },
  2: {name: "Star Sapphire Ring",
  quantity: 2,
  description: "sugarloaf cabochon, pale mauve star Sapphire, 17.90 carats."},
  id:2
};

describe('itemListReducer', () => {
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(itemListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new item data to allItemList', () => {
    const { name, quantity, description, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      quantity: quantity,
      description: description,
      id: id
    }
    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        name:name,
        quantity: quantity,
        description: description,
        id: id
      }
    });
  });

  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    }
    expect(itemListReducer( {}, action)).toEqual({
      2: {name: "Star Sapphire Ring",
      quantity: 2,
      description: "sugarloaf cabochon, pale mauve star Sapphire, 17.90 carats."},
      id: 2
    })
  })
});