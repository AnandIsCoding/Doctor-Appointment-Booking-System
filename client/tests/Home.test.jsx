import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Home from "../src/pages/Home";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from '../src/redux/appStrore'

describe("Home Component", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
  });
});
