import React from "react"; // Imported React for component rendering
import { render, screen, fireEvent } from "@testing-library/react"; // Imported testing utilities from React Testing Library
import MyAppointmentCard from "../src/components/MyAppointmentCard"; // Imported the component to be tested

// Test suite for MyAppointmentCard component
describe("MyAppointmentCard Component", () => {

  // Mock doctor data for testing
  const mockDoctor = {
    doctorData: {
      image: "https://via.placeholder.com/150", // Placeholder image URL
      name: "Dr. John Doe", // Doctor's name
      specialization: "Cardiologist", // Specialization field
      experience: "10 years", // Experience details
      qualification: "MBBS, MD", // Educational qualifications
      location: "New Delhi, India", // Location of the doctor
      consultationFee: 500, // Consultation fee in INR
    },
    _id: "123", // Mock ID for the doctor
  };

  // Test to verify if the doctor's details are rendered correctly
  it("renders doctor's details correctly", () => {
    
    // Mock function to simulate setting feedback form visibility
    function setShowFeedbackform() {
      console.log("Feedback form toggled");
    }

    // Render the MyAppointmentCard component with mock doctor data
    render(<MyAppointmentCard doctor={mockDoctor} setShowFeedbackform={setShowFeedbackform} />);

    // Assertions to check if all details are correctly displayed
    expect(screen.getAllByText(/Dr. John Doe/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Cardiologist/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/10 years Experience/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/MBBS, MD/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/New Delhi, India/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/₹500/i).length).toBeGreaterThan(0);
  });

  // Test to check if clicking the feedback button triggers the callback function
  it("calls setShowFeedbackform when feedback button is clicked", () => {
    let feedbackClicked = false; // Flag to track if feedback button was clicked

    // Function to update feedbackClicked flag when called
    function setShowFeedbackform() {
      feedbackClicked = true;
    }

    // Render the MyAppointmentCard component with mock doctor data
    render(<MyAppointmentCard doctor={mockDoctor} setShowFeedbackform={setShowFeedbackform} />);

    // Select the feedback button from the rendered output
    const feedbackButton = screen.getAllByText(/Feedback/i)[0];

    // Simulate a click event on the feedback button
    fireEvent.click(feedbackButton);

    // Check if the feedback button click updated the flag
    expect(feedbackClicked).toBe(true);
  });

});
