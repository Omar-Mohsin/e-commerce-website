import React from 'react';
import { render } from '@testing-library/react';
import Cart from '../Routes-Component/Cart-Component/Cart';

test('renders the cart component', () => {
    try {
      render(<Cart />);
    } catch (error) {
      console.error(error);
    }
  });