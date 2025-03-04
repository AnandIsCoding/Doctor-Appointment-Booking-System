import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Patient from '../src/pages/Patient'
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("Patient Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      sidebar: false,
      user: {
        name: "John Doe",
        age: "30",
        contact: "1234567890",
        address: "123 Street, City",
        gender: "male",
        dob: "01/01/1990",
        bloodGroup: "O+",
        email: "john.doe@example.com"
      }
    });
  });

  it("renders without crashing", () => {
    render(
      <Provider store={store}>
       <MemoryRouter>
        <Patient />
      </MemoryRouter>
      </Provider>
    );
  });
});
