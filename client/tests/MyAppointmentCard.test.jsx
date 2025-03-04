import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MyAppointmentCard from "../src/components/MyAppointmentCard";

describe("MyAppointmentCard Component", () => {
  const mockDoctor = {
    doctorData: {
      image: "https://via.placeholder.com/150",
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      experience: "10 years",
      qualification: "MBBS, MD",
      location: "New Delhi, India",
      consultationFee: 500,
    },
    _id: "123",
  };

  it("renders doctor's details correctly", () => {
    function setShowFeedbackform() {
      console.log("Feedback form toggled");
    }

    render(<MyAppointmentCard doctor={mockDoctor} setShowFeedbackform={setShowFeedbackform} />);

    expect(screen.getAllByText(/Dr. John Doe/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Cardiologist/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/10 years Experience/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/MBBS, MD/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/New Delhi, India/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/₹500/i).length).toBeGreaterThan(0);
  });

  it("calls setShowFeedbackform when feedback button is clicked", () => {
    let feedbackClicked = false;

    function setShowFeedbackform() {
      feedbackClicked = true;
    }

    render(<MyAppointmentCard doctor={mockDoctor} setShowFeedbackform={setShowFeedbackform} />);

    const feedbackButton = screen.getAllByText(/Feedback/i)[0];
    fireEvent.click(feedbackButton);

    expect(feedbackClicked).toBe(true);
  });
});
