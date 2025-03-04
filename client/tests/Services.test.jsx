import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Services from "../src/pages/Services";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import axios from "axios";

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({});

// Mock axios
vi.mock("axios");

describe("Services Component", () => {
  it("renders Services component and displays loading state", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Services />
          </Provider>
        </MemoryRouter>
      );
    });
  });

  it("renders services correctly when API call succeeds", async () => {
    const mockServices = {
      data: {
        data: [
          { _id: "1", name: "Service 1", image: "service1.jpg" },
          { _id: "2", name: "Service 2", image: "service2.jpg" },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(mockServices);

    await act(async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Services />
          </Provider>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Service 1")).toBeInTheDocument();
      expect(screen.getByText("Service 2")).toBeInTheDocument();
    });
  });

  it("renders error message when API call fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("API Error"));

    await act(async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Services />
          </Provider>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to fetch services. Please try again./i)
      ).toBeInTheDocument();
    });
  });
});
