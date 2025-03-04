import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Sidebar from "../src/components/Sidebar";
import React from 'react'


// Mock Redux store
const mockStore = configureStore([]);
let store;
const mockNavigate = vi.fn();
const mockDispatch = vi.fn();

// ✅ Partially mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: "/patient" }),
  };
});

// ✅ Partially mock react-redux (without overriding Provider)
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
    useSelector: vi.fn(),
  };
});

// Before each test, set up a new store instance
beforeEach(() => {
  store = mockStore({
    sidebar: true,
    user: { image: "user-image.jpg" },
  });
});

describe("Sidebar Component", () => {
  it("renders sidebar with initial state", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );
  });



//   it("calls logout function when logout button is clicked", () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Sidebar />
//         </MemoryRouter>
//       </Provider>
//     );
  
//     // Expand the sidebar by clicking the toggle icon
//     const toggleButton = screen.getByRole("img", { hidden: true }); // Adjust selector as needed
//     fireEvent.click(toggleButton);
  
//     // Now, find and click the logout button
//     const logoutButton = screen.getByTestId("logoutbtn");
//     fireEvent.click(logoutButton);
  
//     expect(mockDispatch).toHaveBeenCalled();
//   });
  
  
});




 
