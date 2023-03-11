import { Route, Routes } from "react-router-dom";

import { DashboardLayout } from "@/dashboard/layouts";
import HomePage from "@/dashboard/pages/Home";
import ProfilePage from "@/dashboard/pages/Profile";

export default function DashboardRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
