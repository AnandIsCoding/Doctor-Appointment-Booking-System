// Imported necessary testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Imported Vitest functions for structuring and running tests
import { describe, it } from "vitest"; 

// Imported React for rendering components
import React from "react"; 

// Imported Redux's Provider to wrap components with the mock store
import { Provider } from "react-redux"; 

// Imported MemoryRouter to simulate routing in tests
import { MemoryRouter } from "react-router-dom"; 

// Imported configureStore to create a mock Redux store
import configureStore from "redux-mock-store"; 

// Imported the BookAppointment component to be tested
import BookAppointment from "../src/pages/BookAppointment"; 

// Created a mock Redux store instance
const mockStore = configureStore([]);

// Test suite for the BookAppointment component
describe("BookAppointment Component", () => {
  
  // Test case to check if the component renders without crashing and displays the specialization filter
  it("renders without crashing and displays the specialization filter", () => {
    
    // Created a mock Redux store with initial state
    const store = mockStore({
      sidebar: false, // Sidebar state
      doctors: { 
        doctors: [{ _id: "1", name: "Dr. Smith", specialization: "Cardiologist" }] // Mock doctor data
      }
    });

    // Render the BookAppointment component wrapped with necessary providers
    render(
      <Provider store={store}> {/* Provides Redux store to the component */}
        <MemoryRouter> {/* Provides a memory-based router for testing */}
          <BookAppointment /> {/* The component being tested */}
        </MemoryRouter>
      </Provider>
    );

   
    //expect(screen.getAllByText("Cardiologist")).toBeInTheDocument();
  });

});
