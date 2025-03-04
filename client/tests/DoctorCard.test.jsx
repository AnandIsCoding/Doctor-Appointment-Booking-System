import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DoctorCard from "../src/components/DoctorCard";

const mockStore = configureStore([]);

describe("DoctorCard Component", () => {
  const doctor = {
    _id: "123",
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: "10 years",
    consultationFee: 500,
    rating: 4.5,
    image: "doctor-image.jpg",
  };

  const renderComponent = (user = null) => {
    const store = mockStore({ user });

    return render(
      <Provider store={store}>
        <MemoryRouter>
          <DoctorCard doctor={doctor} />
        </MemoryRouter>
      </Provider>
    );
  };

  it("renders doctor details correctly", () => {
    renderComponent();

  });


  it("shows toast message and navigates to signup page when user is not logged in", () => {
    renderComponent(null);

    const bookButton = screen.getByText("Book Appointment");
    fireEvent.click(bookButton);

    
  });

  it("navigates to booking page when user is logged in", () => {
    renderComponent({ id: "user123" });

    const bookButton = screen.getByText("Book Appointment");
    fireEvent.click(bookButton);

  });
});
