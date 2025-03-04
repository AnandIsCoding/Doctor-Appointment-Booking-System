import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import React from "react";
import { Provider } from "react-redux";
import appStore from '../src/redux/appStrore'
import { MemoryRouter } from "react-router-dom";
import SingleDoctor from '../src/pages/DoctorDetails'

describe("SingleDoctor Component", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <SingleDoctor />
        </MemoryRouter>
      </Provider>
    );
  });
});
