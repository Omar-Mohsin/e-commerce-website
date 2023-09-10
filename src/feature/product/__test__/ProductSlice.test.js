import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { fetchProducts } from '../productSlice';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  product: [], 
  productLoaded: false,
};

const store = mockStore(initialState);

describe('productSlice', () => {
  it('Should initially set product to an empty object', async() => {
    const state = store.getState().product;
    expect(state).toEqual([]);
  });

  it("test the if the products are fetched" , ()=>{

  })
});
