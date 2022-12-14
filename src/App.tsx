import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
