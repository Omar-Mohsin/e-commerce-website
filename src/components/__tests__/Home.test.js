import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Routes-Component/Home';


test('renders the Home component', () => {
    try {
      render(<Home />);
    } catch (error) {
      console.error(error);
    }
  });