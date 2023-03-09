import { Route, Routes } from "react-router-dom";

import { AuthenticateLayout } from "@/authenticate/layouts";

import AuthenticatePage from "@/authenticate/pages/Authenticate";
import EmailPage from "@/authenticate/pages/Email";

export default function AuthenticateRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticateLayout />}>
        <Route index element={<AuthenticatePage />} />
        <Route path="email" element={<EmailPage />} />
      </Route>
    </Routes>
  );
}
