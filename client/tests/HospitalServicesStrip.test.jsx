// Importing React for component rendering
import React from "react";

// Importing testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";

// Importing the component to be tested
import HospitalServicesStrip from "../src/components/HospitalServicesStrip";

// Importing FontAwesome icons used in the component
import { FaAmbulance, FaUserMd, FaBriefcaseMedical, FaClock } from "react-icons/fa";

// Defining the test suite for the HospitalServicesStrip component
describe("HospitalServicesStrip Component", () => {

  // Test case: Checking if the section title is rendered correctly
  it("renders the section title correctly", () => {
    render(<HospitalServicesStrip />); // Rendering the component

    // Verifying if the section title "Our Medical Services" is present
    expect(screen.getAllByText(/Our Medical Services/i).length).toBeGreaterThan(0);
  });

  // Test case: Checking if all service items are rendered
  it("renders all service items", () => {
    render(<HospitalServicesStrip />); // Rendering the component
    
    // Defining expected service titles
    const serviceTitles = [
      "24/7 Emergency Care",
      "Expert Medical Team",
      "Modern Treatments",
      "24/7 Patient Support",
    ];

    // Verifying if each service title is present
    serviceTitles.forEach((title) => {
      expect(screen.getAllByText(new RegExp(title, "i")).length).toBeGreaterThan(0);
    });
  });

  // Test case: Checking if all service descriptions are rendered
  it("renders all service descriptions", () => {
    render(<HospitalServicesStrip />); // Rendering the component
    
    // Defining expected service descriptions
    const serviceDescriptions = [
      "Quick ambulance service, always on call",
      "Top doctors providing trusted healthcare",
      "Latest technology & advanced procedures",
      "Round-the-clock care for every patient",
    ];

    // Verifying if each service description is present
    serviceDescriptions.forEach((desc) => {
      expect(screen.getAllByText(new RegExp(desc, "i")).length).toBeGreaterThan(0);
    });
  });

  // Test case: Checking if all icons are rendered correctly
  it("renders all icons correctly", () => {
    render(<HospitalServicesStrip />); // Rendering the component
    
    // Verifying if all expected icons are present by their aria-labels
    expect(screen.getAllByLabelText(/Emergency Services Icon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/Specialist Doctors Icon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/Advanced Treatment Icon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/24\/7 Support Icon/i).length).toBeGreaterThan(0);
  });
});
