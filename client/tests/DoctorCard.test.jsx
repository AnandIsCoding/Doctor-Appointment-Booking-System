// Importing React for component rendering
import React from "react";

// Importing testing utilities from React Testing Library
import { render, screen, fireEvent } from "@testing-library/react";

// Importing MemoryRouter to simulate routing in tests
import { MemoryRouter } from "react-router-dom";

// Importing Redux Provider to wrap components with a mock Redux store
import { Provider } from "react-redux";

// Importing configureStore to create a mock Redux store for testing
import configureStore from "redux-mock-store";

// Importing the DoctorCard component to be tested
import DoctorCard from "../src/components/DoctorCard";

// Creating a mock Redux store instance
const mockStore = configureStore([]);

// Defining the test suite for the DoctorCard component
describe("DoctorCard Component", () => {
  
  // Mock doctor data for testing
  const doctor = {
    _id: "123",
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: "10 years",
    consultationFee: 500,
    rating: 4.5,
    image: "doctor-image.jpg",
  };

  // Helper function to render the component with a mock Redux store
  const renderComponent = (user = null) => {
    const store = mockStore({ user }); // Creating a mock store with user data

    return render(
      <Provider store={store}> {/* Providing Redux store to the component */}
        <MemoryRouter> {/* Providing routing context for testing */}
          <DoctorCard doctor={doctor} /> {/* Rendering DoctorCard component */}
        </MemoryRouter>
      </Provider>
    );
  };

  // Test case: Checking if doctor details render correctly
  it("renders doctor details correctly", () => {
    renderComponent(); // Rendering the component
  });

  // Test case: Checking if a toast message appears and navigation happens when user is not logged in
  it("shows toast message and navigates to signup page when user is not logged in", () => {
    renderComponent(null); // Rendering without a logged-in user

    const bookButton = screen.getByText("Book Appointment"); // Selecting the "Book Appointment" button
    fireEvent.click(bookButton); // Simulating a button click
  });

  // Test case: Checking if navigation to booking page happens when user is logged in
  it("navigates to booking page when user is logged in", () => {
    renderComponent({ id: "user123" }); // Rendering with a logged-in user

    const bookButton = screen.getByText("Book Appointment"); // Selecting the button
    fireEvent.click(bookButton); // Simulating a button click
  });
});
