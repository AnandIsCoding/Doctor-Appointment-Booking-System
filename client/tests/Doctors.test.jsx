import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Doctors from "../src/pages/Doctors";
import React from "react";
import { Provider } from "react-redux";
import appStore from '../src/redux/appStrore'
import { MemoryRouter } from "react-router-dom";

describe("Doctors Component", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Doctors />
        </MemoryRouter>
      </Provider>
    );
  });
});
