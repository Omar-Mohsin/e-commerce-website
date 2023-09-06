import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';
import { describe } from 'node:test';

describe('renders the App component', () => {
    try {
      render(<App />);
    } catch (error) {
      console.error(error);
    }
  });