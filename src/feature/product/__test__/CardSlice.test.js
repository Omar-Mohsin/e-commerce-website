import thunk from "redux-thunk";
import * as cardSlice from '../productSlice';
import { act } from 'react-dom/test-utils';

import expect from "expect";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  Product: [],
  productLoaded: false
};
const productList = [

    {
      id: 1,
      title: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1',
      category: 'Electronics',
      image: 'product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2',
      category: 'Clothing',
      image: 'product2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 9.99,
      description: 'Description for Product 3',
      category: 'Home & Garden',
      image: 'product3.jpg',
    },
];
describe("Test Product Actions", () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("Loads all Product correctly",() => {
  
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            id: 1,
            title: 'Product 1',
            price: 19.99,
            description: 'Description for Product 1',
            category: 'Electronics',
            image: 'product1.jpg',
            } ,
            {
              id: 2,
              title: 'Product 2',
              price: 29.99,
              description: 'Description for Product 2',
              category: 'Clothing',
              image: 'product2.jpg',
            },
            {
              id: 3,
              title: 'Product 3',
              price: 9.99,
              description: 'Description for Product 3',
              category: 'Home & Garden',
              image: 'product3.jpg',
            },
        ]
      });
    });

    const expectedActions = [
      {
        type: "LOAD_PRODUCT",
        posts: productList,
      },
      {
        type: "API_SUCCESS"
      }
    ];
    return store.dispatch(cardSlice.fetchCards()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it("Returns error action when no Product found", done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: []
      });
    });

    const expectedActions = [
      {
        type: "API_ERROR"
      }
    ];
    return store.dispatch(cardSlice.fetchCards()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
    done();
  });
});