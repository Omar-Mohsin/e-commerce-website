import axios from 'axios'
import { render, waitFor, screen } from "@testing-library/react";
import Card from '../../../components/Card-Component/Card';
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import configureStore from 'redux-mock-store';

jest.mock('axios')

const mockResponse = {
    data: [
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
    ],
  };
  

  test('checking if the data is fetched' , async()=>{
    axios.get.mockResolvedValue({ data: mockResponse });

    const mockStore = configureStore();
    const initialState = {
        card: [],
        loading: 'idle',
        error: null,
        cartItem : [],
        cart: {
            cartItems: [],
          },
      };
    const store = mockStore(initialState);
      render(
        <Provider store={store}>
        <Card />
      </Provider>
    )

    const Product = await waitFor(() => screen.findAllByTestId("product"));
    expect(Product).toHaveLength(20);
})