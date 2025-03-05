import React from "react"; // Imported React for component rendering
import { render, screen, fireEvent } from "@testing-library/react"; // Imported testing utilities from React Testing Library
import MultiStepDescription from "../src/components/MultiStepDescription"; // Imported the component to be tested
import { multiStepData } from "../src/utils/multistepData"; // Imported mock data for multi-step component

// Test suite for MultiStepDescription component
describe("MultiStepDescription Component", () => {

    // Test to check if all step buttons are rendered
  it("renders all step buttons", () => {
    render(<MultiStepDescription />);
    
    // Check if each step title is present in the document
    multiStepData.forEach((item) => {
      expect(screen.getAllByText(new RegExp(item.title, "i")).length).toBeGreaterThan(0);
    });
  });

  // Test to verify the correct initial content is displayed

  it("displays the correct initial content", () => {
    render(<MultiStepDescription />);
    
    const firstStep = multiStepData[0]; // Default is first item
    expect(screen.getAllByText(new RegExp(firstStep.title, "i")).length).toBeGreaterThan(0);
    expect(screen.getAllByText(new RegExp(firstStep.text, "i")).length).toBeGreaterThan(0);
  });


  // Test to check if the content changes when a different step button is clicked
  it("changes content when a different step button is clicked", () => {
    render(<MultiStepDescription />); // Render the component
    
    const secondStep = multiStepData[1]; // Select second step
    const secondButton = screen.getAllByText(new RegExp(secondStep.title, "i"))[0];

    fireEvent.click(secondButton); // Simulate user clicking the second step button

    // Verify that the content changes to the selected step
    expect(screen.getAllByText(new RegExp(secondStep.text, "i")).length).toBeGreaterThan(0);
  });
});
