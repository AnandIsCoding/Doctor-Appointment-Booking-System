import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import PatientNavbar from "../src/components/PatientNavbar";

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({ sidebar: false });

describe("PatientNavbar Component", () => {
  it("renders without crashing and display text Book Appointment and my Appointments", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PatientNavbar />
        </MemoryRouter>
      </Provider>
    );

    // Check if navigation links are present
    expect(screen.getAllByText(/Book Appointment/i).length).toBeGreaterThan(0);

    expect(screen.getAllByText(/My Appointments/i).length).toBeGreaterThan(0);


    // // Check if the hamburger menu icon is present
    // expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });
});
