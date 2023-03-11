import type { LoginEmailForm } from "@/authenticate/types";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authStorageService } from "@/authenticate/services";
import AuthenticateContext from "./AuthenticateContext";

interface Props {
  children: React.ReactNode;
}

const initialValue = authStorageService.getUser();

export default function AuthenticateProvider({ children }: Props) {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(initialValue || null);

  const loginUser = (credentials: LoginEmailForm) => {
    setAuthUser(credentials);
    authStorageService.saveUser(credentials);
    navigate("/");
  };

  const logoutUser = () => {
    setAuthUser(null);
    authStorageService.clearUser();
    navigate("/authenticate");
  };

  return (
    <AuthenticateContext.Provider value={{ authUser, loginUser, logoutUser }}>
      {children}
    </AuthenticateContext.Provider>
  );
}
