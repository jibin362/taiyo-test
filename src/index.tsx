import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Contacts from "./pages/Contacts";
import CreateContact from "./pages/CreateContact";
import UpdateContact, { loader } from "./pages/UpdateContact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChartMap from "./pages/ChartMap";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/contacts/create",
        element: <CreateContact />,
      },
      {
        path: "/contacts/:id",
        loader: loader,
        element: <UpdateContact />,
      },
      {
        path: "/chart-maps",
        element: <ChartMap />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
