// Import necessary testing utilities
import { render, screen, fireEvent } from "@testing-library/react";

// Importing testing framework functions from Vitest
import { describe, it, vi } from "vitest";

// Import Redux Provider for providing store to the component
import { Provider } from "react-redux";

// Import MemoryRouter to simulate routing within the test environment
import { MemoryRouter } from "react-router-dom";

// Import function to create a mock Redux store
import configureStore from "redux-mock-store";

// Import the Sidebar component to be tested
import Sidebar from "../src/components/Sidebar";

// Import React library
import React from "react";

// Mock Redux store setup
const mockStore = configureStore([]);
let store;
const mockNavigate = vi.fn(); // Mocking the navigate function
const mockDispatch = vi.fn(); // Mocking the Redux dispatch function

// ✅ Partially mock `react-router-dom` to override `useNavigate` and `useLocation`
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom"); // Import actual module
  return {
    ...actual, 
    useNavigate: () => mockNavigate, // Mock `useNavigate` function
    useLocation: () => ({ pathname: "/patient" }), // Mock `useLocation` function
  };
});

// ✅ Partially mock `react-redux`, keeping the Provider untouched
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux"); // Import actual module
  return {
    ...actual, 
    useDispatch: () => mockDispatch, // Mock `useDispatch`
    useSelector: vi.fn(), // Mock `useSelector`
  };
});

// Before each test, set up a new Redux store instance
beforeEach(() => {
  store = mockStore({
    sidebar: true, // Mock sidebar state as open
    user: { image: "user-image.jpg" }, // Mock user data
  });
});

// Describe test suite for the Sidebar component
describe("Sidebar Component", () => {

  // Test case: Sidebar should render correctly with the initial state
  it("renders sidebar with initial state", () => {
    render(
      <Provider store={store}> {/* Provide mock store */}
        <MemoryRouter> {/* Wrap with MemoryRouter for navigation */}
          <Sidebar /> {/* Render Sidebar component */}
        </MemoryRouter>
      </Provider>
    );

  });

  /*
  // Test case: Clicking the logout button should trigger the logout function
  it("calls logout function when logout button is clicked", () => {
    render(
      <Provider store={store}> 
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    // Expand the sidebar by clicking the toggle icon
    const toggleButton = screen.getByRole("img", { hidden: true }); // Adjust selector as needed
    fireEvent.click(toggleButton);

    // Find and click the logout button
    const logoutButton = screen.getByTestId("logoutbtn");
    fireEvent.click(logoutButton);

    // Check if dispatch was called after clicking logout
    expect(mockDispatch).toHaveBeenCalled();
  });
  */

});
