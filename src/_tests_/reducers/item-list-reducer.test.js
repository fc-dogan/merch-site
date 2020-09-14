import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(itemListReducer({}, {type: null})).toEqual({});
  });
});