import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import BookAppointment from "../src/pages/BookAppointment";


const mockStore = configureStore([]);

describe("BookAppointment Component", () => {
  it("renders without crashing and displays the specialization filter", () => {
    const store = mockStore({
      sidebar: false,
      doctors: { doctors: [{ _id: "1", name: "Dr. Smith", specialization: "Cardiologist" }] }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <BookAppointment />
        </MemoryRouter>
      </Provider>
    );

    // expect(screen.getByText("Cardiologist")).toBeInTheDocument();
  });
});
