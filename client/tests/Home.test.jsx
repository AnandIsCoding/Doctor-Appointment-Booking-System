// Imported necessary testing utilities
import { render } from "@testing-library/react"; 
import { describe, it } from "vitest"; // Imported test suite functions from Vitest
import Home from "../src/pages/Home"; // Imported the Home component to be tested
import React from "react"; // Imported React for rendering components
import { MemoryRouter } from "react-router-dom"; // Imported MemoryRouter for testing React Router functionality
import { Provider } from "react-redux"; // Imported Provider to wrap components with Redux store
import appStore from '../src/redux/appStrore'; // Imported the Redux store

// Test suite for the Home component
describe("Home Component", () => {
  
  // Test case to check if the Home component renders without crashing
  it("renders without crashing", () => {
    
    // Render the Home component wrapped with necessary providers
    render(
      <Provider store={appStore}> {/* Provides Redux store to the component */}
        <MemoryRouter> {/* Provides a memory-based router for testing */}
          <Home /> {/* The component being tested */}
        </MemoryRouter>
      </Provider>
    );

  });

});
