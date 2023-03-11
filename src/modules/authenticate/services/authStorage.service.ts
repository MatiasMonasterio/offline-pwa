import type { LoginEmailForm } from "@/authenticate/types";
import { AUTH_STORAGE_KEY } from "@/authenticate/constants";

const saveUser = (credentials: LoginEmailForm) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(credentials));
};

const clearUser = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

const getUser = () => {
  const credentialsString = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!credentialsString || credentialsString === "") {
    return null;
  }

  const credentials = JSON.parse(credentialsString) as LoginEmailForm;
  return credentials;
};

export default {
  saveUser,
  clearUser,
  getUser,
};
