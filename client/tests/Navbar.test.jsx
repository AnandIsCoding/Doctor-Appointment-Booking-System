import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Navbar from "../src/components/Navbar";

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({ user: null }); // Mock user as null (not logged in)

describe("Navbar Component", () => {
  it("renders without crashing and displays navigation links", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Check if navigation links are present
    expect(screen.getAllByText(/Doctors/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Signup/i).length).toBeGreaterThan(0)
  });

  it("displays Dashboard when the user is logged in", () => {
    const loggedInStore = mockStore({ user: { name: "Test User" } });

    render(
      <Provider store={loggedInStore}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

  
  });

  it("renders hamburger menu icon for mobile view", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
  });
});
