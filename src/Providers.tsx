import React from "react";
import { BrowserRouter } from "react-router-dom";

function Providers({ children }: any) {
  return (
      <BrowserRouter>{children}</BrowserRouter>
  );
}

export default Providers;
