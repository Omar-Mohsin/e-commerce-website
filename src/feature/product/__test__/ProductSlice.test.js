import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchProducts } from '../productSlice'; // Replace with the correct path to your slice file

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  product: [], // Use "product" with a lowercase "p"
  productLoaded: false,
};

const store = mockStore(initialState);

describe('productSlice', () => {
  it('Should initially set product to an empty object', () => {
    const state = store.getState().product;
    expect(state).toEqual([]);
  });
});
