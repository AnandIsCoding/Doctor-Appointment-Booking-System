import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../src/pages/Contact";
import { Provider } from "react-redux";
import appStore from '../src/redux/appStrore'

describe("Contact Component", () => {
  it("renders without crashing", () => {
    render(
        <Provider store={appStore}>
        <MemoryRouter>
          <Contact/>
        </MemoryRouter>
      </Provider>
    );
  });
});
