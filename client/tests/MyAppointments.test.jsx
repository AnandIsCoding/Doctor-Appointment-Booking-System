import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ToastProvider } from "react-hot-toast";
import { describe, it, expect, vi } from "vitest";
import MyAppointments from "../src/pages/MyAppointments";
import appStore from "../src/redux/appStrore";
import React from "react";
import axios from "axios";

vi.mock("axios");

describe("MyAppointments Component", () => {
  it("renders without crashing", async () => {
    axios.get.mockResolvedValue({
      data: [], // Mock an empty array as response
    });

    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <MyAppointments />
        </MemoryRouter>
      </Provider>
    );
  });
});
