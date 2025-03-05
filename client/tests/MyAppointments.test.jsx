// Importing necessary testing utilities and libraries
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux"; // Redux provider for managing global state
import { MemoryRouter } from "react-router-dom"; // Provides routing context for testing
import { ToastProvider } from "react-hot-toast"; // Provides toast notifications
import { describe, it, expect, vi } from "vitest"; // Vitest testing utilities

// Importing the component to be tested
import MyAppointments from "../src/pages/MyAppointments";

// Importing the Redux store for state management
import appStore from "../src/redux/appStrore";

// Importing React for component rendering
import React from "react";

// Importing axios for API requests
import axios from "axios";

// Mocking axios to prevent actual API calls during testing
vi.mock("axios");

// Defining the test suite for the MyAppointments component
describe("MyAppointments Component", () => {
  
  // Test case: Checking if the component renders without crashing
  it("renders without crashing", async () => {
    // Mocking an API response with an empty array
    axios.get.mockResolvedValue({
      data: [], // Simulating an empty response from the API
    });

    // Rendering the component within necessary providers
    render(
      <Provider store={appStore}> {/* Providing Redux store */}
        <MemoryRouter> {/* Enabling routing context */}
          <MyAppointments /> {/* Rendering the component */}
        </MemoryRouter>
      </Provider>
    );
  });

});
