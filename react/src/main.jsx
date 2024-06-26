import React from "react";
import ReactDOM from "react-dom/client";
import Albums from "./Pages/Albums.jsx";
import AlbumDetails from "./Pages/AlbumDetails.jsx";
import { makeServer } from "./mirage.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

// do not modify this line
makeServer();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Albums />,
  },
  {
    path: "/albums/:albumId/hits",
    element: <AlbumDetails />,
  },
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);