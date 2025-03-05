import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '../src/pages/Signup';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom'; // ✅ Import MemoryRouter

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({});

// Test 1: Check if the component renders without crashing
describe('Signup Component', () => {
  it('renders Signup component', () => {
    render(
      <MemoryRouter> {/* ✅ Wrap in MemoryRouter */}
        <Provider store={store}>
          <Signup />
        </Provider>
      </MemoryRouter>
    );

  });
});
