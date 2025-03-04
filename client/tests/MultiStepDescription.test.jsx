import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MultiStepDescription from "../src/components/MultiStepDescription";
import { multiStepData } from "../src/utils/multistepData";

describe("MultiStepDescription Component", () => {
  it("renders all step buttons", () => {
    render(<MultiStepDescription />);
    
    multiStepData.forEach((item) => {
      expect(screen.getAllByText(new RegExp(item.title, "i")).length).toBeGreaterThan(0);
    });
  });

  it("displays the correct initial content", () => {
    render(<MultiStepDescription />);
    
    const firstStep = multiStepData[0]; // Default is first item
    expect(screen.getAllByText(new RegExp(firstStep.title, "i")).length).toBeGreaterThan(0);
    expect(screen.getAllByText(new RegExp(firstStep.text, "i")).length).toBeGreaterThan(0);
  });

  it("changes content when a different step button is clicked", () => {
    render(<MultiStepDescription />);
    
    const secondStep = multiStepData[1]; // Select second step
    const secondButton = screen.getAllByText(new RegExp(secondStep.title, "i"))[0];

    fireEvent.click(secondButton);

    expect(screen.getAllByText(new RegExp(secondStep.text, "i")).length).toBeGreaterThan(0);
  });
});
