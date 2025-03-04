import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import React from "react";
import Strip from "../src/components/Strip";

describe("Strip Component", () => {
  it("renders the hospital name and contact information", () => {
    render(<Strip />);
  });
});
