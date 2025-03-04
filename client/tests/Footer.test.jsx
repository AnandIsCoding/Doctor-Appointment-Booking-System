import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer";

describe("Footer Component", () => {
  it("renders the footer section correctly", () => {
    render(<Footer />);
    
    // Check if at least one heading (h3) is present
    expect(screen.getAllByRole("heading").length).toBeGreaterThan(0);
  });

  it("renders all section titles", () => {
    render(<Footer />);

    const sectionTitles = [
      "Patient Care",
      "News & Media",
      "Centres Of Excellence",
      "Medical Procedures",
      "Corporate",
      "Hospitals",
      "Academics & Research",
      "Contact Us",
    ];

    sectionTitles.forEach((title) => {
      expect(screen.getAllByText(new RegExp(title, "i")).length).toBeGreaterThan(0);
    });
  });

  it("renders specific footer links", () => {
    render(<Footer />);

    const items = [
      "Find A Doctor",
      "Media Contacts",
      "Cardiology",
      "Bone Marrow Transplant",
      "The Seva Story",
      "Seva Fertility",
      "Clinical Research",
      "Consult Doctors Online",
    ];

    items.forEach((item) => {
      expect(screen.getAllByText(new RegExp(item, "i")).length).toBeGreaterThan(0);
    });
  });

});
