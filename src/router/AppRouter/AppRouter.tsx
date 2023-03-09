import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthenticateRouter } from "@/authenticate/router";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authenticate/*" element={<AuthenticateRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
