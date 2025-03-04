import React from "react";
import { render, screen } from "@testing-library/react";
import HospitalServicesStrip from "../src/components/HospitalServicesStrip";
import { FaAmbulance, FaUserMd, FaBriefcaseMedical, FaClock } from "react-icons/fa";

describe("HospitalServicesStrip Component", () => {
  it("renders the section title correctly", () => {
    render(<HospitalServicesStrip />);
    expect(screen.getAllByText(/Our Medical Services/i).length).toBeGreaterThan(0);
  });

  it("renders all service items", () => {
    render(<HospitalServicesStrip />);
    
    const serviceTitles = [
      "24/7 Emergency Care",
      "Expert Medical Team",
      "Modern Treatments",
      "24/7 Patient Support",
    ];

    serviceTitles.forEach((title) => {
      expect(screen.getAllByText(new RegExp(title, "i")).length).toBeGreaterThan(0);
    });
  });

  it("renders all service descriptions", () => {
    render(<HospitalServicesStrip />);
    
    const serviceDescriptions = [
      "Quick ambulance service, always on call",
      "Top doctors providing trusted healthcare",
      "Latest technology & advanced procedures",
      "Round-the-clock care for every patient",
    ];

    serviceDescriptions.forEach((desc) => {
      expect(screen.getAllByText(new RegExp(desc, "i")).length).toBeGreaterThan(0);
    });
  });

  it("renders all icons correctly", () => {
    render(<HospitalServicesStrip />);
    
    expect(screen.getAllByLabelText(/Emergency Services Icon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/Specialist Doctors Icon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/Advanced Treatment Icon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/24\/7 Support Icon/i).length).toBeGreaterThan(0);
  });
});
