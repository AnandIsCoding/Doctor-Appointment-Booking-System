// Importing React library
import React from "react";

// Importing testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Importing Redux provider to wrap components with store access
import { Provider } from "react-redux";

// Importing MemoryRouter to simulate routing in tests
import { MemoryRouter } from "react-router-dom";

// Importing function to create a mock Redux store
import configureStore from "redux-mock-store";

// Importing the Navbar component to be tested
import Navbar from "../src/components/Navbar";

// Creating a mock Redux store
const mockStore = configureStore([]);

// Creating a mock store instance with a user set to null (not logged in)
const store = mockStore({ user: null });

describe("Navbar Component", () => {

  // Test case: Ensure Navbar renders correctly and displays navigation links
  it("renders without crashing and displays navigation links", () => {
    render(
      <Provider store={store}> {/* Providing the mock Redux store */}
        <MemoryRouter> {/* Wrapping with MemoryRouter for navigation support */}
          <Navbar /> {/* Rendering the Navbar component */}
        </MemoryRouter>
      </Provider>
    );

    // Checking if the expected navigation links are present in the document
    expect(screen.getAllByText(/Doctors/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Signup/i).length).toBeGreaterThan(0);
  });

  // Test case: Ensure Dashboard appears when a user is logged in
  it("displays Dashboard when the user is logged in", () => {
    const loggedInStore = mockStore({ user: { name: "Test User" } });

    render(
      <Provider store={loggedInStore}> {/* Providing a store with a logged-in user */}
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Add assertions to check if "Dashboard" appears when logged in
  });

  // Test case: Ensure the hamburger menu icon is rendered for mobile view
  it("renders hamburger menu icon for mobile view", () => {
    render(
      <Provider store={store}> {/* Providing the mock Redux store */}
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Add assertions to verify the presence of the hamburger menu icon
  });

});
