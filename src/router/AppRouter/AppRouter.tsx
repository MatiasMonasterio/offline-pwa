import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicRoutes, PrivateRoutes } from "hocs";

import { AuthenticateProvider } from "@/authenticate/contexts";

import { AuthenticateRouter } from "@/authenticate/router";
import { DashboardRouter } from "@/dashboard/router";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthenticateProvider>
        <Routes>
          <Route
            path="/authenticate/*"
            element={
              <PublicRoutes>
                <AuthenticateRouter />
              </PublicRoutes>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <DashboardRouter />
              </PrivateRoutes>
            }
          />
        </Routes>
      </AuthenticateProvider>
    </BrowserRouter>
  );
}
