import React from 'react';
import { test } from 'vitest'; // Import test from vitest
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../src/pages/NotFound'

test('renders NotFound component', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  
});
